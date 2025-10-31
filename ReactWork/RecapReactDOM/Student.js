const parent = document.getElementById('parent');
console.log(parent);
const root=ReactDOM.createRoot(parent);
const h2 = React.createElement("h2",{style:{color:'yellow', backgroundColor: 'blue'}},"Welcome to React App😁");

// jsx
const pic = <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" style={{width:'200px', height:'200px', borderRadius:'50%',}}/>;
const myname = <h2>My name is Shruti</h2>;
const branch = <h3>Computer Science</h3>;
const section = <h3>Section - B</h3>
const clg = <h3>ABES Engineering College</h3>
const container = (
    <div>
    {pic}
    {myname}
    {branch}
    {section}
    {clg}
    </div>

)
root.render(container); 