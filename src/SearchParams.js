import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, Wa");
  const [animal, setAnimal] = useState("dog");
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
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
          <label htmlFor="animal">
            Animal
            <select
              id="animal"
              value={animal}
              onChange={(e) => setAnimal(e.target.value)}
              onBlur={(e) => setAnimal(e.target.value)}
            >
              <option>All</option>
              {ANIMALS.map((animal) => (
                <option 
                    key={animal}
                    value={animal}>
                        {animal}
                </option>
              ))}
            </select>
          </label>
          <button>Submit</button>
        </label>
      </form>
    </div>
  );
};

export default SearchParams;
