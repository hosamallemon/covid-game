import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import './Result.css';

class Result extends Component {

    state = {
        sentence: '',
        status: null,
        truth: null
    }

    componentDidMount() {
        const query = new URLSearchParams( this.props.location.search );
        let sen = '';
        let myStatus = null;
        let truth = null;
        
        for ( let param of query.entries() ) {
            // ['salad', '1']
            if (param[0] === 'sen') {
                sen = param[1];
            } else if(param[0] === 'status') {
                myStatus = param[1];
                this.setState({status: myStatus});
            } else if(param[0] === 'truth') {
                truth = param[1];
                this.setState({truth: truth});
            }
        }
        this.setState({sentence: sen});
    }

    playAgain = () => {
        this.props.history.replace('/start');
    }

    render() {

        let sentence = Math.floor((Math.random() * 14) + 1); 

        return(
            <div>
                <Navbar />
                <div className="container">
                    <div className="card bg-light mb-3">
                        <div className="card-header">Game of COVID-19</div>
                        <div className="card-body text-center">
                            <h5 className="card-title">{this.state.status}</h5>
                            <h3 className="card-text">{this.state.truth}</h3>
                        </div>
                    </div>
                    <button className="btn btn-primary" onClick={this.playAgain}>العب مجدداً</button>
                </div>
            </div>
        );
    }
}

export default Result;
