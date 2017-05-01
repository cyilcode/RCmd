import React from 'react';
import RegistryItem from 'registry-item';

export default class RegistryList extends React.Component {
    render() {
        let { registryItems } = this.props;
        let mapItems = () => {
            if (registryItems === undefined) {
                return <RegistryItem key='No key' Key='No key' Value='No Found' />;
            }

            return registryItems.map((item, i) => {
                return (
                    <RegistryItem key={item.Key} {...item} index={++i} />
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
                    {mapItems()}
                </tbody>
            </table>
        );
    }
};