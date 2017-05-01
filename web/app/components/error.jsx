import React from 'react';

export default class Error extends React.Component {
    render() {
        const { reason } = this.props;
        return (
            <div>
                <h3>An error occured while trying to fetch the data</h3>
                <br />
                <h4>Reason: {reason}</h4>
            </div>
        );
    }
};