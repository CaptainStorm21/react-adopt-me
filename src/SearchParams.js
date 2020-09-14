import React, { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, Wa");
  return (
    <div className="search-params">
      <form>
        <span>
          <h2>
            Your Location is: {location}
          </h2>
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
          <button>Submit</button>
        </label>
      </form>
    </div>
  );
};

export default SearchParams;
