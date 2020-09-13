import React from 'react';

//2nd component
//destructuring

export default function Pet ({ name, animal, breed }) {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h3", {}, breed),
    ]);
};
