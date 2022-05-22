import React, { Component } from 'react';
import Layout from './Layout';
import { CountContextComponent } from './CountContext';
import { Route } from 'react-router-dom'
import AddCandidate from './Pages/AddCandidate';
import Home from './Home';
import Pending from './Pages/Pending';
import ViewDetails from './Pages/ViewDetails';
import ViewList from './Pages/ViewList';

export default class App extends Component {
    render() {
        return (
            <CountContextComponent>
                <Layout>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/addcandidate' component={AddCandidate} />
                    <Route exact path='/pending' component={Pending} />
                    <Route exact path='/viewdetails/:id' component={ViewDetails} />
                    <Route exact path='/viewList/:status' component={ViewList} />
                </Layout>
            </CountContextComponent >
        )
    }
}
