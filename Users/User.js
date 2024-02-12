import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link,useParams } from 'react-router-dom';


const User = () => {

    const [user, setUser]=useState({
        name:'',
        email:'',
        username:''
    });
    const {name,email,username}=user;
    const {id}=useParams();
    const loadData= async ()=>{
        const data=await axios.get(`http://localhost:3003/users/${id}`);
        setUser(data.data);
        console.log(data.data);

    }
    useEffect(()=>{
        loadData();
    },[]);

    return (
        <div>
            <Link to='/' className='btn btn-outline-info btn-sm mb-2 mt-3'>Back to Home</Link>
            <p className='display-6'>User : {id}</p>
            <hr/>
            <ul className='list-group w-50'>
                <li className='list-group-item'> Name : {name}</li>
                <li className='list-group-item'> Email : {email}</li>
                <li className='list-group-item'> Username : {username}</li>
            </ul>
        </div>
    )
}

export default User;
