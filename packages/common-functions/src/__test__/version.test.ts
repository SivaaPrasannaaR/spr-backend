import { getCurrentVersion } from "../common-utils/version"

test("to be able to access to version number", () => {
  const version = getCurrentVersion()
  // 具体的なバージョンをチェックするのは無理なので、undefinedじゃなければOK
  expect(version).not.toBeUndefined()
})
