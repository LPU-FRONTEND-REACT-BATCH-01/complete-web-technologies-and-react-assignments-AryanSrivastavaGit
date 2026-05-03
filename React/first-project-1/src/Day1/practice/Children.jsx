import React from 'react'

const Children = (props) => {
    console.log(props);
  return (
    <>
        <p>{props.children[0]}</p>
        <p>{props.children[1]}</p>
    </>
  )
}

export default Children