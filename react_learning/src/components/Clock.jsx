import React, { useState, useEffect } from 'react';

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    console.log(time.toLocaleTimeString().split(':')[0])
    const options = { hour12: false };
    const times = time.toLocaleTimeString().split(':');
    return (
        <>

            <div className='date'>
                <div className='box'>{time.toLocaleDateString()}</div>
                <div className='box' >{times[0]}:{times[1]}:{times[2]}</div>
            </div>
        </>
    )
}

export default Clock
