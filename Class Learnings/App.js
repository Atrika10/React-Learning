const heading = React.createElement(
    "h1",
    { id: "title", xyz: "abc" },
    "Hello React"); // {} => is the place where you will give attribute to the tag

console.log(heading) ; // object
const root = ReactDOM.createRoot(document.getElementById("main"));

root.render(heading);  // render method is converting this object to h1 tag & put it in root