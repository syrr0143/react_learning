import React, { useEffect, useState, useRef } from 'react'
import hide from '../image/hide_password.png'
function Password() {
    let [visible, setVisible] = useState(false);
    console.log(visible);

    return (
        <div>
            <form action="">
                <input type={!visible ? "text" : "password"} name="password" id="userpass" />
                <button className='btnvisible' onClick={(e) => { setVisible(!visible); e.preventDefault() }}>{visible ? "show" : "hide"}</button>
            </form>
        </div>
    )
}

export default Password
