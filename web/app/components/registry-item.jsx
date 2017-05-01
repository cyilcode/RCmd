import React from 'react';

export default class RegistryItem extends React.Component {
	render() {
		let { Key, Value, index } = this.props;
		return (
			<tr>
				<th scope="row">{index}</th>
				<td>{Key}</td>
				<td>{Value}</td>
				<td style={{ width: '15%' }}>
					<button type="button" className="btn btn-outline-info btn-sm" style={{ marginRight: '5px' }}>Modify</button>
					<button type="button" className="btn btn-outline-danger btn-sm">Delete</button>
				</td>
			</tr>
		);
	}
};