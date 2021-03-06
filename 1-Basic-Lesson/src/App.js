//2nd component
//destructuring

const Pet = ({ name, animal, breed }) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h3", {}, breed),
    ])
}

//your code is going here
const App = () => {
    return React.createElement(
        "div",
        //attributes {}
        {
            id: "internal-div"
        },
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, {
                key: 1,
                name: "Lune",
                animal: "Dog",
                breed: "Labrador",
            }),
            React.createElement(Pet, {
                key: 2,
                name: "Alice",
                animal: "Fox",
                breed: "Lisao"
            }),
            React.createElement(Pet, {
                key: 3,
                name: "Max",
                animal: "Dog",
                breed: "English settler"
            }),

        ],
    )
}

ReactDOM.render(React.createElement(App),
    document.getElementById("root")
)