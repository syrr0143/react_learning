import React, { useState } from 'react';
import data from './tab_content';

function Tabbig() {
    let [open, setOpen] = useState(data[0]);
    const activate = (index) => {
        setOpen(index)
    }
    return (
        <div>

            <h1 style={{ textAlign: "center" }}>Cricketer Details</h1>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>

                {data.map((e, index) => {
                    return (
                        <div key={index} style={{ margin: "0 10px" }}>
                            <ul style={{ listStyleType: "none", padding: " 5rem 5rem" }}>
                                <li key={index}><button className={open === index ? 'active' : 'notactive'} onClick={() => { activate(index) }} style={{ borderRadius: "1rem", padding: "1rem", width: "15rem" }}>{e.title}</button></li>
                                <p className={open === index ? '' : 'closed'} >{e.content}</p>
                            </ul>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Tabbig;
