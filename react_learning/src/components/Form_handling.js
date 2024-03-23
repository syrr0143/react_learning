import React, { useState } from 'react'
import '../App.css'
import Toastify from './Toastify'
function Form_handling() {
    let [userdata, setuserdata] = useState([]);
    let [Toast, setToast] = useState(false);
    let [formData, setFormData] = useState({
        username: '',
        email: '',
        url: '',
        income: ''
    });
    const getvalue = (event) => {
        let oldData = { ...formData };
        let inputName = event.target.name;
        let inputValue = event.target.value;
        oldData[inputName] = inputValue;
        setFormData(oldData)
    }
    const handlesubmit = (event) => {
        let currentformdata = {
            username: formData.username,
            email: formData.email,
            url: formData.url,
            income: formData.income
        }
        console.log(currentformdata);
        let filtered = userdata.filter((v) => {
            if (v.username) {
                console.log("there it is");
                return v; // Include the element in the filtered array
            }
            return false; // Exclude the element from the filtered array
        });

        
       if(filtered.length === 0){
        setFormData({
            username: '',
            email: '',
            url: '',
            income: ''
        });
        setuserdata([...userdata, currentformdata])
       }else{
        setToast(true);
       }
        event.preventDefault();
    }


    return (
        <div className='forms' >
            {Toast && <Toastify/>}

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">@</span>
                <input type="text" name='username' value={formData.username} onChange={getvalue} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>

            <div className="input-group mb-3">
                <input type="text" className="form-control" name='email' onChange={getvalue} value={formData.email} placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <span className="input-group-text" id="basic-addon2">@example.com</span>
            </div>

            <label htmlFor="basic-url" className="form-label">Your vanity URL</label>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
                <input type="text" className="form-control" name='url' onChange={getvalue} value={formData.url} id="basic-url" aria-describedby="basic-addon3" />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text">$</span>
                <input type="text" className="form-control" name='income' onChange={getvalue} value={formData.income} aria-label="Amount (to the nearest dollar)" />
                <span className="input-group-text">.00</span>
            </div>
            <button className='submit' onClick={handlesubmit}>submit</button>

            <div>
                im learning bro
            </div>

            <table className="table table-bordered border-primary">
                <thead>
                    <tr>
                        <td>username</td>
                        <td>email</td>
                        <td>url</td>
                        <td>income</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        userdata.map((val, index) => {
                            return (
                                <tr key={index}>
                                    <th>{val.username}</th>
                                    <td>{val.email}</td>
                                    <td>{val.url}</td>
                                    <td>{val.income}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Form_handling
