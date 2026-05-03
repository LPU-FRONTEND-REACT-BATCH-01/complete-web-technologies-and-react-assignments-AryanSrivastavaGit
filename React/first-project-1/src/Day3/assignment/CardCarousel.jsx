import React, { useState } from 'react'

const CardCarousel = () => {

    const imagess = ["fa-regular fa-face-frown","fa-regular fa-face-grin-tears","fa-regular fa-face-kiss-beam"];

    const [index, setIndex] = useState(0);

    let handlePrevious = () =>{
      setIndex(prev => {
        prev-=1;
        if(prev<0){
          prev=imagess.length-1;
        }
        return prev;
      });
    }

    let handleNext = () =>{
      setIndex(next => {
        next+=1;
        if(next > imagess.length-1){
          next=0;
        }
        return next;
      });
    }

  return (
    <>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"grey", width:"100vw", height:"100vh"}}>

            <button onClick={handlePrevious}>previous</button>
            <i className={imagess[index]} style={{fontSize:"100px"}}></i>
            <button onClick={handleNext}>next</button>

        </div>
    </>
  )
}

export default CardCarousel