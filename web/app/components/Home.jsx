import React from 'react';
import RegistryList from 'registry-list'

let Home = React.createClass({
    render: function () {
        return (
            <div className="container" style={{marginTop: '3rem'}}>
                <div className="row">
                    <RegistryList />
                </div>
                <div className="row">
		            <button type="button" className="btn btn-outline-success btn-block" data-toggle="modal" data-target="#myModal">Add a new command</button>
		        </div>
            </div>
        );
    }
});

module.exports = Home;