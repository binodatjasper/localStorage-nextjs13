'use client';
import { useState } from "react";

export default function Home() {
    const [user, setUser] = useState({});
    const userDetail = {
        name: 'Binod RD',
        email: 'binod@gmail.com',
        phone: 9843779778,
        contact: {
            address: 'Hattiban',
            city: 'Lalitpur',
            country: 'Nepal'
        }
    }

    const setLocalStorage = (data: any) => {
        localStorage.setItem('user', JSON.stringify(data));
    }

    const getLocalStorage = () => {
        let getUser: any = localStorage.getItem('user');
        if (getUser) {
            setUser(JSON.parse(getUser));
        }
    }

    const clearLocalStorage = () => {
        localStorage.clear();
        setUser({});
    }

    return (
        <div className="container">
            <br />
            <h1>User Details</h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.contact?.address}</td>
                        <td>{user.contact?.city}</td>
                        <td>{user.contact?.country}</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <button onClick={() => setLocalStorage(userDetail)} className="btn btn-success">
                Set LocalStorage
            </button>
            <span>&nbsp;&nbsp;</span>
            <button onClick={getLocalStorage} className="btn btn-primary">
                Get LocalStorage
            </button>
            <span>&nbsp;&nbsp;</span>
            <button onClick={clearLocalStorage} className="btn btn-danger">
                Clear LocalStorage
            </button>
        </div>
    )
}
