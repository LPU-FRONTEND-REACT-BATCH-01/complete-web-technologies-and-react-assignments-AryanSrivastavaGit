import React, { useEffect, useState } from 'react'
import FetchDataCard from './FetchDataCard';

// const FetchingDataUseEffect = () => {

//     const [data, setData] = useState([]);

//     useEffect(()=>{
//         async function fetchData() {
//             try{
//                 let prodData = await fetch("https://dummyjson.com/products");
//                 if(prodData.ok){
//                     let prodDataJson = await prodData.json();
//                     setData(prodDataJson.products);
//                     // console.log(data);
//                 }
//             }catch(e){
//                 console.log(e);
//             }
//         }
//         fetchData();
//         // console.log(data);
//     },[])

//     console.log(data);

//   return (
//     <>
//         {data.map((x)=> <FetchDataCard pData={x}/>)}
//     </>
//   )
// }

// export default FetchingDataUseEffect



// const FetchingDataUseEffect = () => {

//     const [data, setData] = useState([]);

//     useEffect(()=>{
//         async function fetchData() {
//             try{
//                 let prodData = await fetch("https://dummyjson.com/products");
//                 if(prodData.ok){
//                     let prodDataJson = await prodData.json();
//                     setData(prodDataJson.products);
//                 }
//             }catch(e){
//                 console.log(e);
//             }
//         }
//         fetchData();
//     },[])

//   return (
//     <>
//         {data.map((x)=> <FetchDataCard key={x.id} pData={x}/>)}
//     </>
//   )
// }

// export default FetchingDataUseEffect



// const FetchingDataUseEffect = () => {

//     const [data, setData] = useState([]);

//     const[loading, setLoading] = useState(true);

//     useEffect(()=>{
//         async function fetchData() {
//             try{
//                 let prodData = await fetch("https://dummyjson.com/products");
//                 if(prodData.ok){
//                     let prodDataJson = await prodData.json();
//                     setData(prodDataJson.products);
//                     setLoading(false);                    
//                 }
//             }catch(e){
//                 console.log(e);
//             }
//         }
//         fetchData();
//     },[])

//     if(loading){
//         return(
//             <div>Loading...</div>
//         )
//     }

//   return (
//     <>
//         {data.map((x)=> <FetchDataCard key={x.id} pData={x}/>)}
//     </>
//   )
// }

// export default FetchingDataUseEffect