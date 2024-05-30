/* code in html
 <div id="parent">
            <div class="child">
                <h1>Hi, there I'm h1 tag</h1>
                <h2>Hi, there I'm h2 tag</h2>
            </div>
            <div class="child2">
                <h1>Hi, there I'm h1 tag</h1>
                <h2>Hi, there I'm h2 tag</h2>
            </div>
    </div>
*/

/* code in React */

const parent = React.createElement("div", { id: "parent" }, 
    [
        React.createElement("div", { id: "child" }, 
     [React.createElement("h1", {}, "Hi, there I'm h1 tag"),
     React.createElement("h2", {}, "Hi, there I'm h2 tag")
     ]
    ),
    React.createElement("div", { id: "child2" }, 
     [React.createElement("h1", {}, "Hi, there I'm h1 tag"),
     React.createElement("h2", {}, "Hi, there I'm h2 tag")
     ]
    )
    ]
)

/* if we want to create sibling children inside a div, then in 3rd params of createElement we have to pass element as an array*/ 

const heading = React.createElement(
    "h1",
    { id: "title", xyz: "abc" },
    "Hello React"); // {} => is the place where you will give attribute to the tag

console.log(heading); // object
const root = ReactDOM.createRoot(document.getElementById("main"));

root.render(parent);  // render method is converting this object to h1 tag & put it in root