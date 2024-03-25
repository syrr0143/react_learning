import React, { useEffect, useState } from 'react'

function Useeffect() {
    let [count, setcount] = useState(0);
    useEffect(() => {
        console.log("useffect running")
    }, [count])
    return (
        <div>

            <button onClick={() => setcount(count + 1)}>{count}</button>
        </div>
    )
}

export default Useeffect
