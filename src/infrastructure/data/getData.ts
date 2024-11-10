import { faker } from "@faker-js/faker";
import { AnimalData } from "@/domain/model/Animal/AnimalData";
import { picsum } from "@/contants/images.c";

/**
 * Generates a random image URL for an animal.
 *
 * @returns A string representing the image URL.
 */
const getRandomAnimalImage = (animalType: string): string => {
  const width = 644;
  const height = 362; 
  const url = `${picsum}/${width}/${height}/animals/${animalType}`;
  return url;
}

/**
 * Generates a random animal type.
 *
 * @returns A string representing the animal type.
 */
const getType = (): string => faker.animal.type();

/**
 * Generates a random URL.
 *
 * @returns A string representing a URL.
 */
const getUrl = (): string => faker.internet.url();

/**
 * Generates a random description.
 *
 * @returns A string representing random text.
 */
const getText = (): string => faker.lorem.sentences();

/**
 * Generates a title for the animal based on its type.
 *
 * @param {string} type - The type of animal.
 * @returns A string representing the title.
 */
const getTitle = (type: string): string => faker.animal[type as keyof typeof faker.animal] ? faker.animal[type as keyof typeof faker.animal]() : "Unknown";

/**
 * Generates an array of animal data objects.
 *
 * @returns An array of animal data objects.
 */
const generateData = (): AnimalData[] => {
  return [...new Array(100)].map((_, index): AnimalData => {
    const type = getType();
    return {
      type,
      id: index + 1,
      url: getUrl(),
      title: getTitle(type),
      description: getText(),
      image: getRandomAnimalImage(type),
    };
  });
};

/**
 * Simulates an asynchronous request to retrieve animal data.
 * @returns A promise that resolves to an array of animal data.
 */
const getData = (): Promise<AnimalData[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(generateData());
    }, 2000); // Simulates a delay (e.g., fetching from an API)
  });
};

export default getData;
