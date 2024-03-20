import React, { useState } from 'react'

function Menu() {
    const [dot, setdot] = useState(false);
    console.log(dot)
    return (
        <div>
            <button onClick={() => { setdot(!dot) }}>menu</button>
            {/* {dot ? <ul><li>about us </li><li>conatcat</li><li>home</li><li>gallery</li> </ul> : &#9776} */}
            {dot ? (
                <ul>
                    <li>about us</li>
                    <li>contact</li>
                    <li>home</li>
                    <li>gallery</li>
                </ul>
            ) : (
                <span>&#9776;</span>
            )}

        </div>
    )
}

export default Menu
