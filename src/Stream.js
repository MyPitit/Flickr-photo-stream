import React from 'react';
import ReactDOM from 'react-dom';

var Stream = React.createClass({
    getInitialState: function() {
        return {
            items: []
        };
    },

    componentDidMount: function() {
        fetch(this.props.source, { mode: 'cors'})
        .then(response => console.log(response))
        // .then(response => response.json())
        // .then(items => console.log("Tinc un total de" + items))
        //.then(items => this.setState({items: items}))
    },

    render: function () {
        return (
            <div>
                {this.state.items}
            </div>
        );
    }
});

export default Stream;
