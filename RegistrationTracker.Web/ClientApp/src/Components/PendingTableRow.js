import React from 'react';
import { Link } from 'react-router-dom';

const PendingTableRow = ({candidate: {firstName, lastName, email, phoneNumber, id}}) =>{
    return (
        <tr>
            <td><Link to={`/viewdetails/${id}`}>View Details</Link></td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{email}</td>
            <td>{phoneNumber}</td>
        </tr>
    )
}
export default PendingTableRow;