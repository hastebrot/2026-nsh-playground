import { expect, open, test } from "nsh/test";

test("counts taps", async () => {
  const app = await open("./App.tsx");
  expect(app.texts()).toContain("0");
  await app.press("Tap");
  await app.press("Tap");
  expect(app.texts()).toContain("2");
});

test("resets the counter", async () => {
  const app = await open("./App.tsx");
  await app.press("Tap");
  await app.press("Tap");
  await app.press("Reset Counter");
  expect(app.texts()).toContain("0");
});
