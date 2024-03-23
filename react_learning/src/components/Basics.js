import React, { useState } from 'react'
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

    let [myname, setMyname] = useState('');
    let [villagename, setvillagename] = useState('');
    let [lover, setlover] = useState('');

    console.log(lover);
    console.log(villagename);
    console.log(myname) ;
    return (
        <div>
            <p className='hello'>hello how are you,{name}</p>
            {speed.map((e) => {
                return (<p>{e}</p>)
            })}

            {object.name}

            {/* TERNARY OPERATOR */}
            {(condition) ? <h1 style={{ color: "green", width: "20rem" }}>welcome here</h1> : <h1 style={{ color: "red" }}>cant welcome here</h1>}

            <form action="" style={{ display: "flex", flexDirection: "column", width: "10vw", margin: "0 auto", gap: "1rem" }}>
                <input key="1" type="text" onChange={(event) => { setMyname(event.target.value); }} placeholder='myname' name='myname' />
                <input key="2" type="text" onChange={(event) => { setvillagename(event.target.value);  }} placeholder='villagename' name='villagename' />
                <input key="3" type="text" placeholder='lover' onChange={(event) => { setlover(event.target.value);  }} name='lover' />
            </form>
        </div>
    )
}

export default Basics
