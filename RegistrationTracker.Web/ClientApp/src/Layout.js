import React from 'react';
import { Link } from 'react-router-dom';
import { UseCounts } from './CountContext';

const Layout = ({children}) => {
    const {counts: {pending, confirmed, declined}} = UseCounts();
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" to='/'>Registration</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <Link className="nav-link text-light" to='/'>Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to='/addcandidate'>Add Candidate</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to='/pending'>Pending <span>({pending})</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to='/viewList/confirmed'>Confirmed <span>({confirmed})</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to='/viewList/declined'>Declined <span>({declined})</span></Link>
                        </li>
                    </ul>
                </nav>
            </header>
{children}
        </div>
    )
}
export default Layout;