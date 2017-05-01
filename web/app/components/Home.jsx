import React from 'react';
import RegistryList from 'registry-list'
import AddEditModal from 'add-edit-modal';

export default class Home extends React.Component {
    render() {
        return (
            <div className="container" style={{ marginTop: '3rem' }}>
                <div className="row">
                    <RegistryList />
                </div>
                <div className="row">
                    <button type="button" style={{ marginBottom: '1rem' }} className="btn btn-outline-success btn-block" data-toggle="modal" data-target="#myModal">Add a new command</button>
                </div>

                <AddEditModal />
            </div>
        );
    }
};