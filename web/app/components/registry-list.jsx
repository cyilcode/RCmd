import React from 'react';
import RegistryItem from 'registry-item'
import { connect } from 'react-redux';

let RegistryList = React.createClass({
    render: function () {
        let { registryItems } = this.props;
        let mapTodos = () => {
            if (registryItems.length === 0) {
                <RegistryItem key='No key' Key='No key' Value='Found'/>
            }

            return registryItems.map((item) => {
                return (
                    <RegistryItem key={item.Key} {...item}/>
                );
            });
        };

        return (
                <table className="table table-bordered table-hover">
                    <thead className="thead table-info">
				        <tr>
					        <th>#</th>
					        <th>Command Shortcut</th>
					        <th>Path</th>
					        <th>Actions</th>
				        </tr>
			        </thead>
                    <tbody>
                        {mapTodos()}
                    </tbody>
                </table>
        );
    }
});

export default connect((state) => {
    return {
        registryItems: state.registryItems
    };
})(RegistryList);