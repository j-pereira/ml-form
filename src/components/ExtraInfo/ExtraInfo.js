import React, { Component } from 'react'
import ReactDOM from 'react-dom';

class ExtraInfo extends Component {

    constructor(props){
        super(props);
        this.state = {
            q1: '',
            q2: '',
            q3: '',
            q4: '',
            q5: ''
        }
    }

    changeValueHandler = (attribute, value) => {
        let newState = this.state;
        newState[attribute] = value;
        this.setState( newState );
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    componentDidUpdate() {
        ReactDOM.findDOMNode(this).scrollTop = 0
    }

    render(){
    
        return (
            <div className="pt-5"> 
                <div className="mb-5 page-title">
                    Informações extras
                </div>
                <div className="mb-3">
                    <div className="p-2"> 
                        <div class="form-group">
                            <label htmlFor="q1">
                                1. Para você, como é o perfil que a sociedade espera das mulheres?
                            </label>
                            <textarea class="form-control" 
                                id="q1" 
                                rows="3" cols="12"
                                onChange={(event) => {this.changeValueHandler('q1', event.target.value)}}></textarea>
                        </div>
                    </div>
                    <div className="p-2"> 
                        <div class="form-group">
                            <label htmlFor="q2">
                                2. Você se encaixa neste perfil? Caso contrário, como você se sente por não se encaixar perfeitamente neste perfil?
                            </label>
                            <textarea class="form-control"
                                id="q2" 
                                rows="3" cols="12"
                                onChange={(event) => {this.changeValueHandler('q2', event.target.value)}}></textarea>
                        </div>
                    </div>
                    <div className="p-2"> 
                        <div class="form-group">
                            <label htmlFor="q3">
                                3. Quais as principais discriminações/injustiças que você sofre por ser mulher?
                            </label>
                            <textarea class="form-control"
                                id="q3" 
                                rows="3" cols="12"
                                onChange={(event) => {this.changeValueHandler('q3', event.target.value)}}></textarea>
                        </div>
                    </div>
                    <div className="p-2"> 
                        <div class="form-group">
                            <label htmlFor="q4">
                                4. Qual a maior diferença social entre mulheres e homens?
                            </label>
                            <textarea class="form-control"
                                id="q4" 
                                rows="3" cols="12"
                                onChange={(event) => {this.changeValueHandler('q4', event.target.value)}}></textarea>
                        </div>
                    </div>
                    <div className="p-2"> 
                        <div class="form-group">
                            <label htmlFor="q5">
                                5. Você acha que tivemos grandes avanços na situação da mulher desde o século XIX?
                            </label>
                            <textarea class="form-control" 
                                id="q5" 
                                rows="3" cols="12"
                                onChange={(event) => {this.changeValueHandler('q5', event.target.value)}}></textarea>
                        </div>
                    </div>
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary float-right mb-4"
                    onClick={(event) => {this.props.next(event, 'extraInfo', this.state)}}>
                    Próximo
                </button> 
            </div>
        )
    }


}

export default ExtraInfo;