import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, Wa");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

  useEffect (() => {
    // pet.breeds("dog").then(console.log, console.error);
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({breeds}) => {
      const breedStrings = breeds.map(({name}) => name);
      setBreeds(breedStrings);
    }, console.error)
  }, [animal, setBreed, setBreeds]);

  return (
    <div className="search-params">
      <form>
        <span>
          <h2>Your Location is: {location}</h2>
        </span>
        <label htmlFor="location">
          location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
          <AnimalDropdown />
          <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
