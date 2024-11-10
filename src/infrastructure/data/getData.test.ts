import generateData from "./getData";
import { AnimalData } from "@/domain/model/Animal/AnimalData";

// Test case 1: Check if the generated data is an array
test("generateData should return an array", () => {
  const data: AnimalData[] = generateData();
  expect(Array.isArray(data)).toBe(true);
});

// Test case 2: Check if the generated data has the correct length
test("generateData should return an array of length 100", () => {
  const data: AnimalData[] = generateData();
  expect(data.length).toBe(100);
});

// Test case 3: Check if each data object has the expected properties
test("generateData should return an array of objects with the expected properties", () => {
  const data: AnimalData[] = generateData();
  data.forEach((item) => {
    expect(item).toHaveProperty("type");
    expect(item).toHaveProperty("id");
    expect(item).toHaveProperty("url");
    expect(item).toHaveProperty("title");
    expect(item).toHaveProperty("description");
    expect(item).toHaveProperty("image");
  });
});

// Test case 4: Check if the generated data has valid values
test("generateData should return an array of objects with valid values", () => {
  const data: AnimalData[] = generateData();
  data.forEach((item) => {
    expect(typeof item.type).toBe("string");
    expect(typeof item.id).toBe("number");
    expect(typeof item.url).toBe("string");
    expect(typeof item.title).toBe("string");
    expect(typeof item.description).toBe("string");
    expect(typeof item.image).toBe("string");
    expect(item.type).not.toBe("");
    expect(item.url).toMatch(/^https?:\/\/\w+(\.\w+)*(:\d+)?\/?$/);
  });
});
