import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';

const Pending = () => {
    const [candidates, setCandidates] = useState();
    useEffect(() => {
        const getCandidates = async () => {
            const { data } = await axios.get('api/registration/getbytype', 0);
            setCandidates(data);
        }
        getCandidates();
    }, [])
    return (
        <div className='container col-md-8 offset-2 mt-3'>
          <table className='table table-hover table-striped table-bordered '>
                <thead>
                    <tr>
                        <th>View Details</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {candidates && candidates.map((c) =>
                        <tr key= {c.id}>
                            <td><Link to={`/viewdetails/${c.id}`}>View Details</Link></td>
                            <td>{c.firstName}</td>
                            <td>{c.lastName}</td>
                            <td>{c.email}</td>
                            <td>{c.phoneNumber}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default Pending;