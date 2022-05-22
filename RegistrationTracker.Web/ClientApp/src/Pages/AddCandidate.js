import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom';
import useForm from '../Hooks/useForm';
import { useCounts } from '../CountContext';


const AddCandidate = () => {

    const [formData, setFormData] = useForm({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        notes: ''
    })
    const history = useHistory();
    const { updateCounts } = useCounts();

    const onFormSubmit = async e => {
        e.preventDefault();
        await axios.post('api/registration/addcandidate', formData);
        updateCounts();
        history.push('/pending');
    }

    return (
        <div className='row mt-2'>
            <div className='container jumbotron col-md-5'>
                <form onSubmit={onFormSubmit}>
                    <h3>Add Candidate</h3>
                    <input type='text' onChange={setFormData} className='form-control mt-3' value={formData.firstName} placeholder='First Name' name='firstName'></input>
                    <input type='text' onChange={setFormData} className='form-control mt-3' value={formData.lastName} placeholder='Last Name' name='lastName'></input>
                    <input type='tel' onChange={setFormData} className='form-control mt-3' value={formData.phoneNumber} placeholder='Phone Number' name='phoneNumber'></input>
                    <input type='email' onChange={setFormData} className='form-control mt-3' value={formData.email} placeholder='Email' name='email'></input>
                    <textarea rows='4' onChange={setFormData} className='form-control mt-3' value={formData.notes} placeholder='Notes' name='notes'></textarea>
                    <button className='btn btn-primary mt-3 ml-2'>Submit</button>
                </form>
            </div>
        </div>
    )
}
export default AddCandidate;