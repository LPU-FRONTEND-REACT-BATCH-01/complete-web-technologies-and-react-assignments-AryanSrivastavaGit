//-----------------------------------------------------Day1--------------------------------------------------------------------------------

// import React, { Component } from "react";
// class base Component
// export default class App extends Component {
//     render() {
//         return <>
//             <h1>Hello</h1>
//         </>
//     }
// }


// function base Component
// let App = () =>{
//     let name = "aryan";
//     return(
//         <div>
//             <label htmlFor="">Input</label>
//             <input type="text" />
//             <h1 style={{color:"red"}} className="h1Tag">Hello {name}</h1>
//         </div>
//     )
// }
// export default App


// import React from 'react';
// import Card from './Components/Card';
// const App = () => {
//     let card1 = "variable card 1";
//     let card2 = "variable card 2";
//     return (
//         <>
//             <div>App</div>
//             <Card variable={card1} />
//             <Card variable={card2} />
//         </>
//     )
// }
// export default App


// import React from 'react';
// import UserCard from './Day1/assignment/UserCard';
// const App = () => {
//     let user1 = {
//         username: "aryan",
//         regNo: 1111,
//         age:23
//     }
//     let user2 = {
//         username: "abishek",
//         regNo: 1111,
//         age:22
//     }
//     let user3 = {
//         username: "abhijeet",
//         regNo: 1111,
//     }
//     return (
//         <>
//             <UserCard variable={user1}></UserCard>
//             <UserCard variable={user2}></UserCard>
//             <UserCard variable={user3}></UserCard>
//         </>
//     )
// }
// export default App


// import React from 'react';
// import Children from './Day1/practice/Children';
// const App = () => {
//   return (
//     <>
//         <Children>
//             <h1>This is first child</h1>
//             <h1>This is second child</h1>
//         </Children>
//     </>
//   )
// }
// export default App



//-----------------------------------------------------Day2--------------------------------------------------------------------------------


// import React, { useState } from 'react'
// const App = () => {

//     const [state, setState] = useState(0);
//     let normal = 0;
//     let handleState = () => {
//         setState(state+1);
//     }
//     let handleNormal = () => {
//         normal+=1;
//     }
//     return (
//         <>
//             <h1>This is state variable: {state}</h1>
//             <h1>This is state variable: {normal}</h1>
//             <button onClick={handleState}>state</button>
//             <button onClick={handleNormal}>normal</button>
//         </>
//     )
// }
// export default App


// import React, { useState } from 'react'
// const App = () => {

//     console.log("Execute");

//     const [state, setState] = useState({count:0});

//     let handleIncreament = () => {
//         setState({count:1});
//     }
//     let handleDecrement = () => {
//         setState({count:-1});
//     }
//     return (
//         <>
//             <h1>This is state object variable: {state.count}</h1>
//             <button onClick={handleIncreament}>Increament</button>
//             <button onClick={handleDecrement}>Decreament</button>
//         </>
//     )
// }
// export default App


// import React, { useState } from 'react'

// const App = () => {

//     const [show, setShow] = useState("password");

//     let handleShow = () => {

//         // setShow(pre=>pre==="password"?"text":"password"); // only use pre when another setShow depend upon this setShow
//         setShow(show==="password"?"text":"password");
//         // if(show==="password"){
//         //     setShow("text");
//         // }else{
//         //     setShow("password")
//         // }
//     }
//   return (
//     <>
//         <input type={show} />
//         <button onClick={handleShow}>show</button>
//     </>
//   )
// }
// export default App


// import React, { useState } from 'react'
// let App = () => {

//     const [show,setShow] = useState(false);

//     let handleShow = () => {
//         setShow(prev => !prev);
//     }

//     return(
//         <div>
//              <input type={(show ? "text" : "password")} />
//             <i
//                 className={`fa-solid ${show ? "fa-eye" : "fa-eye-slash"}`}
//             ></i>
//             <button onClick={handleShow}>Show</button>
//         </div>
//     )
// }
// export default App


// import React, { useState } from 'react'
// const App = () => {
//     let [bulb, setBulb] = useState(true);

//     let handleBulb = () => {
//         setBulb(prev=>!prev)
//     }

//   return (
//     <>
//     <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", width:"100vw", height:"100vh", backgroundColor:"black"}}>
//         <i class="fa-solid fa-lightbulb" style={{color: bulb?"yellow":"grey", fontSize:"100px"}}></i>
//         <br/>
//         <br/>
//         <button onClick={handleBulb}>{bulb ? "OFF" : "ON"}</button>
//     </div>
//     </>
//   )
// }
// export default App


// import React, { useEffect, useState } from 'react'
// const App = () => {
  
//   let [count1, setCount1] = useState(0);
//   let [count2, setCount2] = useState(0);
  
//   useEffect(()=>{
//     console.log("UseEffect got executed.");
//   },[count2])
  
//   let handleCount1 = () =>{
//     setCount1(pre=>pre+1);
//   }
//   let handleCount2 = () =>{
//     setCount2(pre=>pre+1);
//   }
  
//   console.log("Component rendered");

//   return (
//     <>
//       <h1>Count1: {count1}</h1>
//       <h1>Count2: {count2}</h1>
//       <button onClick={handleCount1}>Count1</button>
//       <button onClick={handleCount2}>Count2</button>
//     </>
//   )
// }

// export default App


// import { useEffect, useState } from "react";

// const App = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://dummyjson.com/users")
//       .then(res => res.json())
//       .then(res => setData(res.users));
//   }, []);

//   return <div>{data.length}</div>;
// }

// export default App



//-----------------------------------------------------Day3--------------------------------------------------------------------------------

// import React from 'react'
// import CardCarousel from './Day3/assignment/CardCarousel'

// const App = () => {
//   return (
//     <>
//         <CardCarousel></CardCarousel>
//     </>
//   )
// }

// export default App


// import React from 'react'
// import FetchingDataUseEffect from './Day3/practice/FetchingDataUseEffect'

// const App = () => {
//   return (
//     <>
//       <FetchingDataUseEffect></FetchingDataUseEffect>
//     </>
//   )
// }

// export default App



import React from 'react'
import FormData from './Day3/practice/FormData'

const App = () => {
  return (
    <>
      <FormData></FormData>
    </>
  )
}

export default App