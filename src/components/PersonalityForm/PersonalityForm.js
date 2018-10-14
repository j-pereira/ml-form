import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Alternative from '../PersonalityForm/Alternative'
import config from '../../config/personalityQuestions'

class PersonalityForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            page: 0,
            q0: '',
            q1: '',
            q2: '',
            q3: '',
            q4: '',
            q5: '',
            q6: '',
            q7: '',
            q8: '',
            q9: '',
            q10: '',
            q11: '',
            q12: '',
            q13: '',
            q14: '',
            q15: '',
            q16: '',
        }
    }

    getPersonalityQuestions(){
        return config.personalityQuestions;
    }

    endFormButton(){
        return (
            <button 
                type="submit" 
                className="btn btn-primary float-right mb-4"
                onClick={(event) => {this.props.next(event, 'personalityForm', this.state)}}>
                Resultado
            </button>
        )
    }

    saveQuestion(event, value){
        //event.preventDefault();
        let newState = this.state;
        newState['q'.concat(this.state.page)] = value;
        this.setState( newState );
    }

    goToNextPage(event){
        //event.preventDefault();
        if (this.state['q'.concat(this.state.page)] !== ''){
            let newState = this.state;
            let newPage = this.state.page +1;
            newState.page = newPage;
            this.setState( newState );
        } else {
            alert("Questão obrigatória.");
        }
    }

    componentDidMount() {
        ReactDOM.findDOMNode(this).scrollTop = 0
    }

    componentDidUpdate() {
        ReactDOM.findDOMNode(this).scrollTop = 0
    }


    render(){
        
        const personalityQuestion = this.getPersonalityQuestions();

        let question = personalityQuestion[this.state.page].title;
        let alternatives = personalityQuestion[this.state.page].alternatives.map(a => {
            return (
                <Alternative question={this.state.page} checked={this.state['q'.concat(this.state.page)]} option={a.option} value={a.value} saveValue={this.saveQuestion.bind(this)} />
            )
        });

        let button = <button 
                        type="submit" 
                        className="btn btn-primary float-right mb-4"
                        onClick={(event) => {this.goToNextPage(event)}}>
                        Próximo
                    </button>
        if (this.state.page === 16) {
            button = this.endFormButton();
        }
    
        return (
            <div> 
                <div className="mt-5 mb-5 page-title">
                    Teste de Personalidade
                </div>
                <div className="mb-3">
                    <div className="pt-2 pl-3 pr-3 pb-3 border-bottom border-info rounded-0 mb-3"> 
                        {question} <label className="text-danger pl-2"> * </label>
                    </div>
                    {alternatives}
                    
                </div>
                {button}
            </div>
        )
    }


}

export default PersonalityForm;