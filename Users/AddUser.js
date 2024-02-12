import axios from 'axios';
import React,{useState} from 'react'
import {useHistory} from 'react-router-dom';


const AddUser = () => {

    let history=useHistory();
    const [user, setUser]=useState({
        name:"",
        email:'',
        username:''
    });
    const {name,email,username}=user;
    const onChangeHandle=(event)=>{
        console.log(event.target.value);
        setUser({...user,[event.target.name]:event.target.value})
    }
    const onSubmit= async(e)=>{
        e.preventDefault();
        const url="http://localhost:3003/users";
        await axios.post(url,user);
        history.push("/");
    }
    return (
        <>
        <div className='container mt-4'>
            <h3>Add User</h3>
            <form onSubmit={e=>onSubmit(e)}>
                <div class="row mb-1">
                    <label for="inputEmail3" class="col-form-label">Name :</label>
                    <div class="col-sm-6">
                        <input type="text" class="form-control" name="name" value={name} onChange={event=>onChangeHandle(event)}/>
                    </div>
                </div>
                <div class="row mb-1">
                    <label>Email</label>
                    <div class="col-sm-6">
                        <input type="text" class="form-control" name="email" value={email} onChange={event=>onChangeHandle(event)}/>
                    </div>
                </div>
                <div class="row mb-1">
                    <label>Username</label>
                    <div class="col-sm-6">
                        <input type="text" class="form-control" name="username" value={username} onChange={event=>onChangeHandle(event)} />
                    </div>
                </div>
                <button type="submit" class="btn btn-outline-primary mt-2">Add</button>
            </form>
            </div>
        </>
    )
}

export default AddUser;
