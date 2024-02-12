import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {useHistory,useParams} from 'react-router-dom';


const EditUser = () => {

    let history=useHistory();
    const {id}=useParams();
    // alert(id);
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
    useEffect(()=>{
        loadUsers();
    },[])
    const loadUsers=async()=>{
        const url=`http://localhost:3003/users/${id}`;
        const res= await axios.get(url);
        // console.log(res);
        setUser(res.data);
    }
    const onSubmit= async(e)=>{
        e.preventDefault();
        const url=`http://localhost:3003/users/${id}`;
        await axios.put(url,user);
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
                <button type="submit" class="btn btn-outline-info btn-block mt-2">Update</button>
            </form>
            </div>
        </>
    )
}

export default EditUser;
