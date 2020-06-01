import React, { Component } from 'react';

import Navbar from '../Navbar/Navbar';
import nurses from '../../Assets/nurses.png';

import logo from '../../Assets/logo.png';

import './Message.css';

class Message extends Component {

    facebookHandler = () => {
        window.open("https://web.facebook.com/arabwomenjo/");
    }

    officialWebsiteHandler = () => {
        window.open("https://www.awo.org.jo/");
    }
    render() {
        return(
            <div>
                <Navbar />
                <div id="container-fluid">
                    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel"> AWO جمعية النساء العربيات</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body text-center">
                                <h6>شكراً لك على رسالتك</h6>
                                <img src="https://img.icons8.com/officel/50/000000/hearts.png" id="heart"/>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <img src={nurses} />
                            <h5 className="text-center">لكل شخص في خط دفاعنا الأول، لكل شخص في كادرنا الطبي</h5>
                            <h4 className="text-center"></h4>
                            <h3 className="text-center">شكرا من القلب</h3>
                            <img src="https://img.icons8.com/dusk/64/000000/like.png"/>
                        </div>
                        <div className="col">
                            <img className="mb-4" src="https://img.icons8.com/color/48/000000/jordan-circular.png"/>
                            <h4 className="text-center">اجعل وقتك في البيت مصدر للتعلم والابداع</h4>
                            <h4 className="text-center">بقائك في المنزل يحمينا جميعاً، واحرصوا على نشر المعاومات الصحيحة</h4>
                            <h4 className="text-center mb-4">#AWO</h4>
                            <img className="mb-2" src={logo} width="80px" height="80px" />
                            <h6>جمعية النساء العربيات</h6>
                            <h4>للتواصل معنا</h4>
                            <div className="social-media">
                                <div className="fb-share-button" 
                                    data-href="https://awo-d36e9.web.app/message#container-fluid" 
                                    data-layout="button" data-size="large">
                                </div>
                                <i className="fab fa-facebook-f" onClick={this.facebookHandler}></i>
                                <small onClick={this.officialWebsiteHandler}>موقعنا الرسمي</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Message;