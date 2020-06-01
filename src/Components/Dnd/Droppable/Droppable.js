import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Droppable.css';

class Droppable extends Component {

    componentDidMount() {
        document.body.style['overflowX'] = 'hidden';
    }

    drop = (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('transfer');
        e.target.appendChild(document.getElementById(data));
    }

    allowDrop = (e) => {
        e.preventDefault();

    }

    render() {
        return(
            <div 
                className="mb-4"
                id="droppable"  
                onDrop = {this.drop} 
                onDragOver = {this.allowDrop}
                data-aos="fade-left"
            >
                {this.props.children}  
            </div>
        );
    }
}

Droppable.propTypes = {
    id: PropTypes.string,
    children: PropTypes.node
}

export default Droppable;