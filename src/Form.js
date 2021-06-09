import React, { useState } from 'react';
import axios from 'axios';
import Message from './Message';

function Form(props) {
    const [userName, setUsername] = useState('');
    const [msg, setMsg] = useState('');

    function handleChange(e) {
        setMsg('')
        e.preventDefault();
        setUsername(e.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const resp = await axios.get(`https://api.github.com/users/${userName}`)
            .then((resp) => {
                props.onSubmit(resp.data)
            }).catch((err) => {
                setMsg(`${userName} not valid. Please enter a valid user name`)
            })
        setUsername('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" value={userName}></input>
                <button>add card</button>
            </form>
            <Message name={msg} />
        </div>

    )
}

export default Form;