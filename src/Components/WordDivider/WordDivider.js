import React, { Component } from 'react';
import {withRouter, Route} from 'react-router-dom';
import Draggable from '../Dnd/Draggable/Draggable';
import Droppable from '../Dnd/Droppable/Droppable';
import Result from '../Result/Result';
import Navbar from '../Navbar/Navbar';

import './WordDivider.css';

class WordDivider extends Component {

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    componentDidMount() {
        let sen = Math.floor((Math.random() * 14) + 1); 
        let sentence = this.state[sen].text;
        let status = this.state[sen].status;
        let truth = this.state[sen].truth;
        let Mywords = [];

        Mywords = sentence.split("  ");
        Mywords = this.shuffleArray(Mywords);
        this.setState({sentence: sentence, words: Mywords, status: status, truth: truth});
    }

    state = {
        sentence: '',
        words: [],
        status: '',
        truth: '',
        1: {
            text: 'درجات  الحرارة المرتفعة  تقتل  فايروس كورونا',
            truth: 'انتشر الفايروس في المناطق الحارة و مناطق ذات مناخ رطب و البارد اي انه يمكن انتشاره في كافة الظروف الجوية',
            status: "خرافة"
          },
          2: {
            text: 'ينتقل الفيروس  عن طريق  ملامسة العين  والانف والفم',
            truth: 'نعم ينتقل الفايروس عن طريق المصافحة و ملامسة العينين و الانف و الفم',
            status: "حقيقة"
          },
          3: {
            text: 'مرضى القلب  والمدخنين  اكثر  عرضة  للاصابة  بفيروس كورونا',
            truth: 'الاشخاص الذين يعانون من حالات مرضية كامنة من الممكن أن تتفاقم مثل أمراض القلب هم أكثر عرضة للاصابة بالكورونا',
            status: "خرافة"
          },
          4: {
            text: 'المضادات الحيوية  فعالة  في  الوقاية  من الفيروس',
            truth: ' لا ، لا تقضي المضادات الحيوية على الفايروسات بل تقضي على الجراثيم فقط وفايروس الكورونا يعد من الفايروسات',
            status: "خرافة"
          },
          5: {
            text: 'الاصابة  بالفيروس  تؤدي  الى  الموت',
            truth: 'لا تؤدي الى الموت نسبة الوفيات بسبب فايروس كورونا 2% من اجمالي الاصابات ',
            status: "خرافة"
          },
          6: {
            text: 'الثوم  طعام صحي  ليس  له علاقة بفيروس كورونا',
            truth: 'الثوم طعام صحي وله خواص ضد البكتيريا لكن ليس له علاقة بفيروس كورونا',
            status: "حقيقة"
          },
          7: {
            text: 'استلام  الطرود  من الصين  قد  يصيبك  بالعدوى',
            truth: 'لا خطر  من الاشياء القادمة من الصين الفيروس  ليس له فاعلية طويلة',
            status: "خرافة"
          },
          8: {
            text: 'اغسل  نفسك  بالمطهرات  الكيميائية  لمنع  التعرض  للعدوى',
            truth: 'لا ، التعرض المباشر للمواد الكيميائية  أمر خطير يمكن  أن يكون،  قاتلا',
            status: "خرافة"
          },
          9: {
            text: 'الحيوانات الاليفة  يمكن  ان  تنقل  العدوى',
            truth: 'يوجد دراسة علمية تشير الى هذا الكلام لكن يفضل غسل الايدي عقب الامساك بالحيوانات الاليفة',
            status: "خرافة"
          },
          10: {
            text: 'لقاحات الالتهاب  الرئوي  تحمي  من  الاصابة  بكورونا',
            truth: 'لن تحمي هذه اللقاحات من فيروس كورونا الجديد بل لا يزال العلماء يسعون لتطوير لقاح جديد ضده',
            status: "خرافة"
          },
          11: {
            text: 'غسول  الفم  يحمي  من  الاصابة  بالفيروس',
            truth: 'الغسول يقتل ميكروبات معينة في الفم وليس له علاقة بكورونا',
            status: 'خرافة'
          },
          12: {
            text: 'من الجيد  وضع  كمامة  منزلية  الصنع  للوقاية',
            truth: 'معلومة غير صحيحة حيث انها غير مناسبة و تسبب صعوبة في التنفس ولا تعمل على الوقاية من الفايروس ',
            status: "خرافة"
          },
          13: {
            text: 'الحمى  من  اعراض  الاصابة  بالفيروس',
            truth: 'نعم ، ارتفاع درجة الحرارة عن المعدل الطبيعي أي الحمى نتيجة الاصابة بالمرض و يستخدم ميزان الحرارة كمؤشر لكشف الاعراض',
            status: "حقيقة"
          },
          14: {
            text: 'ارتداء  قفازات  في  الاماكن العامة  يحمي  من الاصابة',
            truth: 'لا ، المواظبة على غسل اليدين يوفر حماية اكثر من القفازات المطاطية التي قد تتلوث واذا لامست وجهك خلال ارتداها ستنقل المرض',
            status: "خرافة"
          },
          15: {
            text: 'غسل الانف  بالماء المالح  يمنع  الاصابة  بالفيروس',
            truth: 'منظمة الصحة العالمية تؤكد انه لايوجد اي دليل على ان محلول الملح يقتل فيروس كورونا الجديد',
            status: "خرافة"
          },
    }

    ResContinueHandler = () => {

        let answer = document.getElementById("droppable").innerText;
        if(answer === '') {
            alert("رتب الكلمات بأي شكل تراه مناسبا للتأكد من الإجابة");
        } else {
            const queryParams = [];
            queryParams.push("sen=" + this.state.sentence);
            queryParams.push("status=" + this.state.status);
            queryParams.push("truth=" +this.state.truth);
            
            const queryString = queryParams.join('&');
            this.props.history.push({
                pathname: '/result',
                search: '?' + queryString
            });
            
        }
    }

    tryGame = () => {
        window.location.reload(true);
    }

    render() {  
        const uuidv4 = require("uuid/v4");
        return(
            <div>
                <Navbar />
                <div className="container-fluid">
                    <h3 className="text-center">رتب الكلمات التالية حتى تحصل على جملة ذات معنى</h3>
                    <div className="row w-100 mb-4">
                    {this.state.words.map(word => (
                        <Draggable id={uuidv4()} tryGame={this.tryGame}>
                            <div className="card-body">
                                <h5 className="card-title">{word}</h5>
                            </div>
                        </Draggable>
                    ))}
                    </div>
                    <h6 className="text-center">رتب الكلمات داخل الصندوق</h6>
                    <Droppable />
                    <div className="row mb-4">
                        <div className="col">
                            <button className="btn btn-success" onClick={this.ResContinueHandler}>حقيقة</button>
                        </div>
                        <div className="col-5">
                            <button className="btn btn-secondary" onClick={this.tryGame}>تجربة جملة جديدة</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-danger" onClick={this.ResContinueHandler}>خرافة</button>
                        </div>
                    </div>
                    <h6 className="text-center">بأمكانك مشاركة رسالتنا لك مع اصدقائك عبر فيسبوك</h6>
                    <div className="fb-share-button" 
                        data-href="https://awo-d36e9.web.app/message#container-fluid" 
                        data-layout="button" data-size="large">
                    </div>
                </div>
            </div>
        )
        
    }
}

export default withRouter(WordDivider);