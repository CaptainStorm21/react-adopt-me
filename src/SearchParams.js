import React from 'react';

const SearchParams = () => {
    const location = "Seattle, WA";


    return (
        <div className = "search-params">
            <form>
                <label htmlFor = "location">
                    location
                    <input id = "location" 
                           value = {location}
                           placeholder = "Location"
                    />
                    <button>Submit</button>
                </label>
            </form>
        </div>
    )
}

export default SearchParams;