import React from 'react'
import '../App.css'
function Basics() {
    let name = "sumit yadav";
    let object = {
        name: "sumit yadav",
        age: 25,
        love: "rits"
    }
    let speed = [10, 20, 30, 40];
    let condition = true;
    return (
        <div>
            <p className='hello'>hello how are you,{name}</p>
            {speed.map((e) => {
                return (<p>{e}</p>)
            })}

            {object.name}

            {/* TERNARY OPERATOR */}
            {(condition) ? <h1 style={{color:"green",width:"20rem"}}>welcome here</h1> : <h1 style={{color:"red"}}>cant welcome here</h1>}
        </div>
    )
}

export default Basics
