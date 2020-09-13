//2nd component
const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.breed),
        React.createElement("h3", {}, props.animal),
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
                name: "Lune",
                animal: "Dog",
                breed: "Labrador",
                class: "individual-div",
            }),
            React.createElement(Pet, {
                name: "Alice",
                animal: "Fox",
                breed: "Lisao"
            }),
            React.createElement(Pet, {
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