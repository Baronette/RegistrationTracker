import React, { useState, useEffect } from 'react';
import axios from "axios";
import {useParams, useLocation} from 'react-router-dom';

const ViewList = () => {
    const [candidates, setCandidates] = useState();
    const [viewNotes, setViewNotes] = useState(true)
    const location = useLocation();
    const {status} = useParams()
    
    useEffect(() => {
        const getCandidates = async () => {
            const { data } = await axios.get(`api/registration/getbytype?status=${status}`);
            setCandidates(data);
        }
        getCandidates();
    },[location])

    return (
        <div className='container col-md-8 offset-2 mt-3'>
            <button className='btn btn-primary mb-3' onClick={() => setViewNotes(!viewNotes)}>Toggle Notes</button>
            <table className='table table-hover table-striped table-bordered '>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        {viewNotes && <th>Notes</th>}
                    </tr>
                </thead>
                <tbody>
                    {candidates && candidates.map((c) => <tr key={c.id}>
                        <td>{c.firstName}</td>
                        <td>{c.lastName}</td>
                        <td>{c.email}</td>
                        <td>{c.phoneNumber}</td>
                        {viewNotes && <td>{c.notes}</td>}
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default ViewList;