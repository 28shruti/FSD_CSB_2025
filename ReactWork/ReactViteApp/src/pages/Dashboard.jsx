// import React, { useState, useEffect } from "react";

// function Dashboard() {
//   const [counter, setCounter] = useState(10);
//   const [pointer, setPointer] = useState(100);

//   useEffect(() => {
//     console.log(counter)
//     console.log(pointer)
//   }, [counter, pointer]);

//   return (
//     <div>
//       <h2>Counter value = {counter}</h2>
//       <h2>Pointer Value = {pointer}</h2>

//       <button onClick={() => setCounter(counter + 10)}>Counter</button>
//       <button onClick={() => setPointer(pointer - 10)}>Pointer</button>
//     </div>
//   );
// }

// export default Dashboard;


// import React, { useState, useEffect } from "react";

// function Dashboard() {
//   const [data, setData] = useState();

//   useEffect(() => {
//     async function fetchData(){
//       const serverresponse = await fetch('https://fakestoreapi.com/products');
//       const jsonResponse=await serverresponse.json();
//       console.log(jsonResponse);
//       setData(jsonResponse);
//     }
//     fetchData();
//   }, []);

//   return (
//     <div>
//       {
//         data.length===0?(<h2>Daya could not fetch</h2>):
//         (
//         <div>
//           Hii
//         </div>
//         )
//       }

//       {/* {
//       JSON.stringify(data)
// } */}
//     </div>
//   );
// }

// export default Dashboard;


import React, { useState, useEffect } from "react";

function Dashboard() {
  const [data, setData] = useState([]); // initialize as empty array

  useEffect(() => {
    async function fetchData() {
      try {
        const serverResponse = await fetch("https://fakestoreapi.com/products");
        const jsonResponse = await serverResponse.json();
        console.log(jsonResponse);
        setData(jsonResponse);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]); // fallback to empty array on error
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {data.length === 0 ? (
        <h2>Data could not fetch</h2>
      ) : (
        <div>
          {/* {/* <h2>Products List</h2>
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))} 
          </ul> */}

          <h1>Products Gallery</h1>
          {
          data.map((ele) => (
            
            <div style={{height:'200px', width:'200px' , display:'inline-block', margin:'10px', padding:'10px'}} key={ele.id}>
              <img src={ele.image} height={100} width={100}/>
              <h3>{ele.title}</h3> 
              <button>Add to cart</button>
            </div>
          ))
          }
        </div>
      )}
    </div>
  );
}

export default Dashboard;
