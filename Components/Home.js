import axios from 'axios';
import React, {useEffect,useState}from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        loadUsers();
    },[]);

    const loadUsers= async()=>{
        const url="http://localhost:3003/users";
        const result= await axios.get(url)
        setUsers(result.data.reverse());
        // console.log(result.data.reverse());
    }
    const deleteUser= async (id)=>{
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
    }

    return (
        <div>
            <p className='p text-center text-danger'>For viewing the Output first you have to Start JSON SERVER</p>
            <table className="table bordered shadow">
                <thead>
                    <tr className='text-center'>
                        <th scope="col">S No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Username</th>
                        <th scope='col' colSpan='3' >Action</th>
                    </tr>
                </thead>
                <tbody>
                {users.map((res,index)=> 
                   <tr key={index} className='text-center'>
                        <th scope="row">{index+1}</th>
                        <td>{res.name}</td>
                        <td>{res.email}</td>
                        <td>{res.username}</td>
                        <td>
                            <Link className='btn btn-outline-primary btn-sm mr-2' to={`/user/view/${res.id}`}> View</Link>
                            <Link className='btn btn-outline-info btn-sm mx-2' to={`/user/edit/${res.id}`}> Edit</Link>
                            <button className='btn btn-outline-danger btn-sm mr-2' onClick={()=>deleteUser(res.id)}> Delete</button>
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default Home
