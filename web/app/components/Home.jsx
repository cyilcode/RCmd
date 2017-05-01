import React from 'react';
import RegistryList from 'registry-list'
import AddEditModal from 'add-edit-modal';
import Error from 'error';

import { connect } from 'react-redux';

class Home extends React.Component {
    render() {
        const { registryItems } = this.props;
        if (registryItems.state === 'busy') {
            return <div>Loading...</div> // TODO: Maybe put a spinner here or sth
        }

        if (registryItems.state === 'success') {
            return (
                <div className="container" style={{ marginTop: '3rem' }}>
                    <div className="row">
                        <RegistryList registryItems={registryItems.items} />
                    </div>
                    <div className="row">
                        <button type="button"
                            style={{ marginBottom: '1rem' }}
                            className="btn btn-outline-success btn-block"
                            data-toggle="modal"
                            data-target="#myModal">Add a new command</button>
                    </div>

                    <AddEditModal />
                </div>
            );
        }

        if (registryItems.state === 'error') {
            return (
                <Error reason={registryItems.reason} />
            );
        }
    }
};

export default connect((state) => {
    return {
        registryItems: state.registryItems
    };
})(Home);