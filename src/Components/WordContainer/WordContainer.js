import React, { Component } from 'react';

import './WordContainer.css';

class WordContainer extends Component {

    render() {
        return(
            <div className="card bg-light mb-3" id="myWord">
                <div className="card-body">
                    <h5 className="card-title">{this.props.word}</h5>
                </div>
            </div>
        )
    }
}

export default WordContainer;