const parent = document.getElementById("parent");
// console.log(parent);
const root=ReactDOM.createRoot(parent);
// const h2 = React.createElement("h2",{style:{color:'yellow', backgroundColor: 'blue'}},"Welcome to React App");

// const li1 = React.createElement("li", {},"JAVA");
// const li2 = React.createElement("li", {},"Python");
// const li3 = React.createElement("li", {},"React");
// const ul = React.createElement("ul", {style:{backgroundColor: 'pink'}},li1,li2,li3);

// const pic = React.createElement("img", {src: "https://i.ytimg.com/vi/jGiGhRwr1Fk/maxresdefault.jpg", style:{width:'200px', height:'200px', borderRadius:'50%'}});
// const myname = React.createElement("h3", {},"My name is ReactJS");
// const wrap1 = React.createElement("div", {style:{display: 'flex', gap:'200px', fontSize: '25px'}},pic,myname);
// const wrapper = React.createElement("div", {},h2,wrap1,ul);

// JSX

const h2 = <h2>Hello using JSX</h2>
const li1 = <li>JAVA</li>;
const li2 = <li>Python</li>;
const ul=<ul>{li1}{li2}</ul>
const container = (
    <div>
    {h2},
    {ul}
    </div>
)
root.render(container);
