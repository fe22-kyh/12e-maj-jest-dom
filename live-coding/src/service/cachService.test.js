import CacheService from "./cacheService";

test("Enter cache text data", () => {
  CacheService.save("username", "Yves");

  const cacheResult = CacheService.get("username");
  expect(cacheResult).toBe("Yves");
});

test("Enter cache object data", () => {
  const user = {username: "Greta"};
  CacheService.save("user-data", user);

  const cacheResult = CacheService.get("user-data");
  expect(cacheResult).toStrictEqual({username: "Greta"});
});