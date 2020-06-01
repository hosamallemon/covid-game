import React, { Component } from 'react';

import Navbar from '../Navbar/Navbar';

import './Rules.css';

class Rules extends Component {

   tryGame = () => {
       this.props.history.replace('/start');
   }

    render() {
        return(
            <div>
                <Navbar />
                <div id="myContainer" data-aos="fade-left">
                    <h6 className="display-4 text-center">Game of COVID-19 - طريقة اللعب<img src="https://img.icons8.com/dusk/44/000000/rules.png"/></h6>
                    <ul type="square mb-4">
                        <li className="text-right">في البداية، تظهر مجموعة كلمات مقسمة للمستخدم</li>
                        <li className="text-right">يجب على المستخدم ترتيب الكلمات للحصول على جملة مفهومة، وذلك عن طريق سحب الكلمات و وضعها داخل الصندوق</li>
                        <li className="text-right">يقوم المستخدم بالضغط على زر (حقيقة / خرافة) لمعرفة النتيجة</li>
                    </ul>
                    <div className="justify-content-center">
                        <button className="btn btn-primary" onClick={this.tryGame}>
                            تجربة اللعبة
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Rules;