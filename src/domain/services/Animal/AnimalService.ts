import getData  from "@/infrastructure/data/getData.js";
import { AnimalData } from "../../model/Animal/AnimalData";

export class AnimalService {

    /**
     * Retrieves animals based on the provided query.
     * @param query - The query string to filter animals by type or name.
     * @returns A promise that resolves to an array of AnimalData objects matching the query.
     * @throws If there is an error fetching the animals or handling the query.
     */
    async getAnimalsByTypeOrName(query: string): Promise<AnimalData[]> {
        try {
          const response = await getData();
          const filteredData = response.filter(
            (animal: AnimalData) => animal.type === query || animal.title.toLowerCase().includes(query.toLowerCase())
          );
          return filteredData;
        } catch (error) {
          console.error(`Error fetching animals by query (${query}):`, error);
          throw error; // Propagate the error for handling by the caller
        }
      }
}