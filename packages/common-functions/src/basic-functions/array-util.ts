export default class ArrayUtil {
  /**
   * 複数の配列を、重複のないひとつの配列にまとめる
   * @param arrays
   */
  public static reduceArrays = <T extends number | string>(arrays: T[][]): T[] => {
    const pushed: T[] = [];
    for (const arr of arrays) {
      Array.prototype.push.apply(pushed, arr);
    }
    return pushed.filter((val, idx, self) => self.indexOf(val) === idx);
  };

  /**
   * 重複を削除する
   */
  public static removeDuplicates = <T extends number | string>(arr: T[]): T[] => {
    return arr.filter((val, idx, self) => self.indexOf(val) === idx);
  };

  /**
   * 指定の条件を満たす配列を排除するメソッド
   * @param param
   * @param condition
   */
  public static removeDuplicateByCondition = <T>(param: (T | undefined)[], condition: (a: T, b: T) => boolean): T[] =>
    param.filter(
      (x, i, self) => x !== undefined && self.findIndex(y => y !== undefined && condition(x, y)) === i,
    ) as T[];

  /**
   * 分割された電話番号をハイフンで区切る
   */
  public static formatPhoneWithHyphen = (splitPhoneNumber: [string, string, string]): string => {
    return splitPhoneNumber.filter(number => !!number && number !== '').join('-');
  };

  public static isSame = <T extends number | string>(a: T[], b: T[]): boolean => {
    if (!a.every(element => b.some(unit => unit === element))) {
      return false;
    }
    return b.every(element => a.some(unit => unit === element));
  };
  /**
   * 左詰にする (null, undefined, "" が右詰になる)
   * 例) ['1', '', '3', '4', '', '6'] => ['1', '3', '4', '6', '', '']
   * ※ 0 は右詰されない
   */
  public static justifyLeft = (array: any[]): any[] => {
    const squeezedArray = [...array];
    let i = 0;
    let j = 0;
    while (j < squeezedArray.length) {
      if (squeezedArray[j] || typeof squeezedArray[j] === 'number') {
        [squeezedArray[i], squeezedArray[j]] = [squeezedArray[j], squeezedArray[i]];
        i++;
      }
      j++;
    }
    return squeezedArray;
  };

  /**
   * undefinedの要素を除外する
   * 簡単に処理の記載はできるが as を用いる必要があるため、ここに集約しておく
   * @param params
   */
  public static removeUndefined = <T>(params: (T | undefined)[]): T[] => params.filter(p => !!p) as T[];

  /**
   * 重複を除外するメソッド
   * プリミティブ以外は未対応...
   * @param param
   */
  public static removeDuplicate = <T extends string>(param: (T | undefined)[]): T[] =>
    param.filter((x, i, self) => x !== undefined && self.indexOf(x) === i) as T[];

  /**
   * idをキーにして重複を除去するメソッド
   * @param param
   */
  public static removeDuplicateById = <T extends {id: string}>(param: (T | undefined)[]): T[] =>
    param.filter((x, i, self) => x !== undefined && self.findIndex(y => y !== undefined && y.id === x.id) === i) as T[];

  /**
   * 配列の平坦化を行うメソッド
   * @param params
   */
  public static flat = <T>(params?: ((T | undefined)[] | undefined)[]): T[] => {
    if (!params) {
      return [];
    }
    return ArrayUtil.removeUndefined(ArrayUtil.removeUndefined(params).reduce((a, b) => a.concat(b), []));
  };

  /**
   * 平坦化と重複の除外を行うメソッド
   * 一旦string型のみ対応
   * @params params
   */
  public static flatAndRemoveDuplicate = (params?: ((string | undefined)[] | undefined)[]): string[] =>
    ArrayUtil.removeDuplicate(ArrayUtil.flat(params));

  /**
   * 平坦化と重複の除外を行うメソッド
   * idをキーにして重複除外したいバージョン
   * @params params
   */
  public static flatAndRemoveDuplicateById = <T extends {id: string}>(
    params?: ((T | undefined)[] | undefined)[],
  ): T[] => ArrayUtil.removeDuplicateById(ArrayUtil.flat(params));

  /**
   * Objectをその中に含まれるキーを元にグルーピングする
   * @param objects
   * @param key
   */
  public static groupBy = <T extends {[key: string]: any}>(objects: T[], key: keyof T): {[key: string]: T[]} =>
    objects.reduce((map, obj) => {
      map[obj[key]] = map[obj[key]] || [];
      map[obj[key]].push(obj);
      return map;
    }, {} as {[key: string]: T[]});

  /**
   * 配列を指定数の要素ごとに分割する
   * @param params
   * @param num
   */
  public static divide = <T>(params: T[], num: number): T[][] => {
    const result: T[][] = [];
    for (let i = 0; i * num < params.length; i++) {
      result.push(params.slice(i * num, (i + 1) * num));
    }
    return result;
  };
}
