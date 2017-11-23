import React, { Component } from 'react';

class Advert extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="advert">
                <div className="advert__inner">
                    <h1>AD</h1>
                    <p>So, you're interested in { this.props.relevance }..</p>
                </div>
            </div>
        )
    }
}

export default Advert;