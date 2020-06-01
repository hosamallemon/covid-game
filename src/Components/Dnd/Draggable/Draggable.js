import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Draggable.css';

class Draggable extends Component {

    componentDidMount() {
        document.body.style['overflowX'] = 'hidden';
    }

    drag = (e) => {
        e.dataTransfer.setData('transfer', e.target.id);
    }

    noAllowDrop = (e) => {
        e.stopPropagation();
    }

    divClicked = () => {
        var node = document.getElementById(this.props.id);
        document.getElementById("droppable").appendChild(node);
    }

    render() {
        return(
            <div 
                className="card bg-light mb-3 text-center" 
                draggable="true" onDragStart={this.drag} 
                onDragOver={this.noAllowDrop} 
                id={this.props.id}
                data-aos="fade-right"
                style={{margin: '5px'}}
                onClick={this.divClicked}
            >
                {this.props.children}
            </div>

        );
    }
}

Draggable.propTypes = {
    id: PropTypes.string,
    children: PropTypes.node
}

export default Draggable;