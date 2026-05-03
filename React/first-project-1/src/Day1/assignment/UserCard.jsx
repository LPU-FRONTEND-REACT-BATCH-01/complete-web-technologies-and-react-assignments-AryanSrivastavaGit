import React from 'react'

// const UserCard = (props) => {
//     // return (
//     //     <>
//     //         <div style={{ height: "200px", width: "200px", border: "2px solid red", borderRadius: "10px" }}>
//     //             <p>{props.variable.username}</p>
//     //             <p>{props.variable.regNo}</p>
//     //         </div>
//     //     </>
//     // )


//     let {variable:{username, regNo}} = props;
//     return(
//         <>
//             <div style={{ height: "200px", width: "200px", border: "2px solid red", borderRadius: "10px" }}>
//                 <p>{username}</p>
//                 <p>{regNo}</p>
//             </div>
//         </>
//     )
// }


const UserCard = ({ variable: { username, regNo, age="not given" } }) => {
    return (
        <>
            <div style={{ height: "200px", width: "200px", border: "2px solid red", borderRadius: "10px" }}>
                <p>{username}</p>
                <p>{regNo}</p>
                <p>{age}</p>
            </div>
        </>
    )
}

export default UserCard