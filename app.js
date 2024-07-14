
const parent = React.createElement(
    "div", 
    {id: "parent"},
    [
        React.createElement(
        "div",
        {id: "child"},
        [
            React.createElement(
            "h1",
            {},
            "I'm h1 tag"
        ),
            React.createElement(
                "h2",
                {},
                "I'm h2 tag"
            )
        
    ]
    ),
        React.createElement(
            "div",
            {id: "child2"},
            [
                React.createElement(
                    "h1",
                    {},
                    "I'm h1 tag"
                ),
                React.createElement(
                    "h2",
                    {},
                    "I'm h2 tag"
                )
            ]
        )
]
)



// Creating a H1 tag using react
const header = React.createElement("h1", {}, "Hello World from React");
// Getting the  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
