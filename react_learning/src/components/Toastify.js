import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Example() {
    let [show, setShow] = useState(true);

    useEffect(() => {
        if (show) {
            notify();
            setTimeout(() => {
                setShow(false);
            }, 2000);
        }
    }, [show]);

    function notify() {
        toast.success("Default Notification !", {
            position: "top-center",
            theme: "dark",
            draggable: "touch"
        });
    };

    return (
        <>
            <ToastContainer />
        </>
    );
}
