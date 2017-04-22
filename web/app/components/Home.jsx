import React from 'react';

let Home = React.createClass({
    render: function () {
        return (
            <div>
                <h3>REACT WORKS !</h3>
                <div className="alert alert-success" role="alert">
                    <strong>And bootstrap works too !</strong> You successfully read this important alert message.
                </div>
                <button type="button" className="btn btn-primary">Primary</button>
            </div>

        );
    }
});

module.exports = Home;