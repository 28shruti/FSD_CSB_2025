// import React, { useState, useEffect } from "react";

// function Dashboard() {
//   const [data, setData] = useState([]);
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch("https://fakestoreapi.com/products");
//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setData([]);
//       }
//     }
//     fetchData();
//   }, []);

// function shoppingCart(ele){
//   // alert(ele.title)
//   setCart(data=>[...data,ele]);
//   alert("Item added to cart");
//   // alert(cart.length)
// }

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>Products Gallery</h1>
//       return (
//     <div style={{ textAlign: "center" }}>
//       <div>
//         {cart.length === 0 ? (
//           <h4>Cart is Empty</h4>
//         ) : (
//           cart.map((ele) => (
//             <h3 style={{ backgroundColor: "cyan" }}>
//               {ele.title}
//             </h3>
//           ))
//         )}
//       </div>

//       {data.length === 0 ? (
//         <h2>Data could not be fetched</h2>
//       ) : (
//         <div>
//           {data.map((ele) => (
//             <div
//               key={ele.id}
//               style={{
//                 width: "230px",
//                 display: "inline-block",
//                 margin: "10px",
//                 padding: "12px",
//                 border: "1px solid #ccc",
//                 borderRadius: "8px",
//                 verticalAlign: "top",
//                 boxShadow: "0 0 5px rgba(0,0,0,0.1)",
//               }}
//             >
//               <img src={ele.image} alt={ele.title} height={120} width={120} style={{ objectFit: "contain" }}/>
//               <h4>{ele.title}</h4>
//               <p style={{ fontWeight: "bold", color: "green" }}> $ {ele.price} </p>
//               <p style={{ fontSize: "12px", textAlign: "justify" }}> {ele.description.substring(0, 80)}... </p>
//               <button onClick={()=>shoppingCart(ele)}>Add to Cart</button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Dashboard;











import React, { useState, useEffect } from "react";

function Dashboard() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      }
    }
    fetchData();
  }, []);

  function shoppingCart(ele) {
    setCart(data => [...data, ele])
    // alert(cart.length);
    //alert(ele.title);
  }
  // return (
  //   <div style={{ textAlign: "center" }}>
  //     <div>
  //       cart.length===0?(<h4>Cart is Empty</h4>):
  //       (
  //       cart.map((ele)=>(
  //       <h3 style={{ backgroundColor: 'cyan' }}>{ele.title}</h3>
  //       ))
  //       )

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Total Cart Price: $ {totalPrice.toFixed(2)}</h2>

      <div>
        {cart.length === 0 ? (
          <h4>Cart is Empty</h4>
        ) : (
          cart.map((ele) => (
            <h3 style={{ backgroundColor: "green", color: "white" }}>
              {ele.title}
            </h3>
          ))
        )}
      </div>
      <h1>🛒 Products Gallery</h1>

      {data.length === 0 ? (
        <h2>Data could not be fetched</h2>
      ) : (
        <div>
          {data.map((ele) => (
            <div
              key={ele.id}
              style={{
                width: "230px",
                display: "inline-block",
                margin: "10px",
                padding: "12px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                verticalAlign: "top",
                boxShadow: "0 0 5px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={ele.image}
                alt={ele.title}
                height={120}
                width={120}
                style={{ objectFit: "contain" }}
              />

              <h4>{ele.title}</h4>

              <p style={{ fontWeight: "bold", color: "green" }}>
                $ {ele.price}
              </p>

              <p style={{ fontSize: "12px", textAlign: "justify" }}>
                {ele.description.substring(0, 80)}...
              </p>

              <button
                onClick={() => shoppingCart(ele)}
                style={{
                  padding: "6px 12px",
                  border: "none",
                  backgroundColor: "#2874f0",
                  color: "white",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;