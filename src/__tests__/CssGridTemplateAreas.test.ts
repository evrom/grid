import CssGridTemplateAreas from "../CssGridTemplateAreas";
import gridExamples from "../gridExamples";

const gridTemplateString = `           "a a ."
"a a ."
". b c";`;

test("converts template string into string[][]", () => {
  expect(
    new CssGridTemplateAreas(gridTemplateString).gridTemplate
  ).toStrictEqual([
    ["a", "a", "."],
    ["a", "a", "."],
    [".", "b", "c"],
  ]);
});

test("converts template string with comments into string[][]", () => {
  expect(
    new CssGridTemplateAreas('/* "hey" */ "a ." /* "hi"" */ ". b"').gridTemplate
  ).toStrictEqual([
    ["a", "."],
    [".", "b"],
  ]);
});

test("count rows", () => {
  expect(new CssGridTemplateAreas(gridTemplateString).rows()).toBe(3);
});

test("count columns per row", () => {
  expect(
    new CssGridTemplateAreas(gridTemplateString).columnsPerRow()
  ).toStrictEqual([3, 3, 3]);
});

test("count columns per row with space", () => {
  expect(
    new CssGridTemplateAreas(`"a a ."
  "a a ."
  ". b ";`).columnsPerRow()
  ).toStrictEqual([3, 3, 2]);
});

test("count columns per row when empty string", () => {
  expect(new CssGridTemplateAreas(`""`).columnsPerRow()).toStrictEqual([0]);
});

test("is rectangular", () => {
  expect(new CssGridTemplateAreas(gridTemplateString).isRectangular()).toBe(
    true
  );
});

test("count columns", () => {
  expect(new CssGridTemplateAreas(gridTemplateString).columns()).toBe(3);
});

test("throw on non-rectangular", () => {
  expect(() =>
    new CssGridTemplateAreas(gridExamples["Not Rectangular"]).columns()
  ).toThrow();
});

test("names of areas", () => {
  expect(new CssGridTemplateAreas(gridTemplateString).namedAreas()).toEqual(
    new Set(["a", "b", "c"])
  );
});

test("determine if named area is contiguous", () => {
  expect(
    new CssGridTemplateAreas(gridTemplateString).isContiguous("a")
  ).toEqual(true);
});

test("determine that non contiguous named area is not contiguous", () => {
  expect(
    new CssGridTemplateAreas(`"a a ." "a a ." ". b a";`).isContiguous("a")
  ).toEqual(false);
});

test("find no non-contiguous areas", () => {
  expect(
    new CssGridTemplateAreas(gridTemplateString).findNotContiguous()
  ).toEqual(new Set());
});

test("find non-contiguous area", () => {
  expect(
    new CssGridTemplateAreas(`"a a ." "a a ." ". b a";`).findNotContiguous()
  ).toEqual(new Set(["a"]));
});

test("find non-contiguous area when area is not in an adjacent row", () => {
  expect(
    new CssGridTemplateAreas(gridExamples["Not Contiguous"]).findNotContiguous()
  ).toEqual(new Set(["header"]));
});

test("creates valid property value", () => {
  expect(new CssGridTemplateAreas(gridTemplateString).toPropertyValue()).toBe(
    `"a a ." "a a ." ". b c"`
  );
});
