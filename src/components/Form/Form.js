import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Home from '../Home/Home'
import PersonalInfo from '../PersonalInfo/PersonalInfo'
import ExtraInfo from '../ExtraInfo/ExtraInfo'
import PersonalityForm from '../PersonalityForm/PersonalityForm'
import Result from '../Result/Result'
import Acknowledgment from '../Acknowledgment/Acknowledgment'

class Form extends Component {

    constructor(props){
        super(props)
        this.state = {
            step: 0,
            personalInfo: {},
            extraInfo: {},
            personalityForm: {}
        }
    }

    saveChangesAndGoToNextPage(event, attribute, obj){
        //event.preventDefault();
        if (Object.values(obj).every(x => (x !== '')) || this.state.step === 2){
            let newState = this.state;
            let newStep = this.state.step +1;
            newState[attribute] = obj;
            newState.step = newStep;
            this.setState( newState );   
        } else {
            alert("Todos os campos são obrigatórios.");
        }
    }

    goToNextPage(event){
        //event.preventDefault();
        let newStep = this.state.step + 1;
        this.setState({ step: newStep });
    }

    componentDidMount() {
        ReactDOM.findDOMNode(this).scrollTop = 0
    }

    componentDidUpdate() {
        ReactDOM.findDOMNode(this).scrollTop = 0
    }


    render(){

        let page;
        if (this.state.step === 0)
            page = <Home next={this.goToNextPage.bind(this)} />
        else if (this.state.step === 1)
            page = <PersonalInfo next={this.saveChangesAndGoToNextPage.bind(this)} />
        else if (this.state.step === 2)
            page = <ExtraInfo next={this.saveChangesAndGoToNextPage.bind(this)} />
        else if (this.state.step === 3)
            page = <PersonalityForm next={this.saveChangesAndGoToNextPage.bind(this)}  />
        else if (this.state.step === 4)
            page = <Result form={this.state} next={this.goToNextPage.bind(this)} />
        else if (this.state.step === 5)
            page = <Acknowledgment />
        

        return (
            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-1 col-lg-2"></div>
                    <div className="col-12 col-sm-12 col-md-10 col-lg-8 content">
                        {page}
                    </div>
                    <div className="col-12 col-sm-12 col-md-1 col-lg-2"></div>
                </div>
            </div>
        )
    }


}

export default Form;