import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import { useCounts } from '../CountContext';

const ViewDetails = () => {
    const { id } = useParams();
    const history = useHistory();
    const { updateCounts } = useCounts();
    const [candidate, setCandidate] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        notes: '',
        status: ''
    }, [])
    const { firstName, lastName, phoneNumber, email, notes, status } = candidate;

    useEffect(() => {
        const getCandidate = async () => {
            const { data } = await axios.get(`api/registration/getcandidate?id=${id}`);
            setCandidate(data);
        }
        getCandidate();
    }, [])
    const onUpdateStatusClicked = async (status) => {
        await axios.post('api/registration/updatastatus', { status, id });
        history.push(`/viewlist/${status}`);
        updateCounts();
    }
    return (
        <div className='container col-md-5'>
            <div className='card card-body bg-light mt-3'>
                <h4>Name: {firstName} {lastName}</h4>
                <h4>Email: {email}</h4>
                <h4>Phone: {phoneNumber}</h4>
                <h4>Status: {status}</h4>
                <h4>Notes: {notes}</h4>
                <div className='row mt-2'>
                    <button onClick={() => onUpdateStatusClicked('confirmed')} className='btn btn-primary col-md-3 ml-4 '>Confirm</button>
                    <button onClick={() => onUpdateStatusClicked('declined')} className='btn btn-danger col-md-3 ml-2'>Decline</button>
                </div>
            </div>
        </div>
    )
}
export default ViewDetails;