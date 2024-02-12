import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';

const Userlist = () => {
    const [users, setUsers] = useState([]);
    const [showperpage, setShowperpage] = useState(2)
    const [pagination, setPagination] = useState({
        start: 0,
        end: showperpage
    });
    const onPaginationChange = (start, end) => {
        setPagination({ start: start, end: end });
    };

    const loadusers = async () => {
        const url = "https://reqres.in/api/users?page=2";
        const result = await axios.get(url);
        setUsers(result.data.data);
        console.log(result.data.data);
    }
    useEffect(() => {
        loadusers();
    }, []);
    return (
        <>
        <h3 className='text-center'>User List</h3>
        <hr/>
        <table className="table bordered shadow">
            
            <thead>
                <tr>
                    <th scope="col">S No</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Profile</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user, index) =>
                        <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                            <td><img src={user.avatar} alt=''/></td>

                        </tr>)
                }

            </tbody>
        </table>
        <Pagination showPerPage={showperpage} onPaginationChange={onPaginationChange} total={12} />
        </>
    )
}

export default Userlist;
