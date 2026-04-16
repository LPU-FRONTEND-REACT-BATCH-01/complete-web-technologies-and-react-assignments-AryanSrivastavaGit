//Day1



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


import React from 'react';
import Children from './Day1/practice/Children';
const App = () => {
  return (
    <>
        <Children>
            <h1>This is first child</h1>
            <h1>This is second child</h1>
        </Children>
    </>
  )
}
export default App