import React from 'react';

let RegistryItem = React.createClass({
    render: function () {
        let {Key, Value} = this.props;
        return (
            <tr>
		        <th scope="row">1</th>
		        <td>{Key}</td>
		        <td>{Value}</td>
		        <td style={{width: '15%'}}>
		        	<button type="button" className="btn btn-outline-info btn-sm" style={{marginRight: '5px'}}>Modify</button>
		        	<button type="button" className="btn btn-outline-danger btn-sm">Delete</button>
		        </td>
		    </tr>
        );
    }
});

module.exports = RegistryItem;