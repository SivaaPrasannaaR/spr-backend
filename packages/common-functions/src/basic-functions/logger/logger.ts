export enum LogLevel {
  Trace = 1,
  Log = 2,
  Warn = 3,
  Error = 4,
  Nothing = 5,
}

export class Logger {
  private static logLevel: LogLevel = LogLevel.Log

  public static create = (name: string) => new Logger(name)

  public static setLogLevel = (level: LogLevel) => {
    Logger.logLevel = level
  }

  private readonly name: string

  constructor(name: string) {
    this.name = name
  }

  public trace = (...args: any) => {
    if (Logger.logLevel <= LogLevel.Trace) {
      console.log(`[TRACE] [${this.name}]`, ...args)
    }
  }

  public log = (...args: any) => {
    if (Logger.logLevel <= LogLevel.Log) {
      console.log(`[${this.name}]`, ...args)
    }
  }

  public warn = (...args: any) => {
    if (Logger.logLevel <= LogLevel.Warn) {
      console.warn(`[${this.name}]`, ...args)
    }
  }

  public error = (...args: any) => {
    if (Logger.logLevel <= LogLevel.Error) {
      console.error(`[${this.name}]`, ...args)
    }
  }
}
