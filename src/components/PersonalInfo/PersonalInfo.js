import React, { Component } from 'react'
import ReactDOM from 'react-dom';

class PersonalInfo extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            age: '',
            rent: '',
            scolarity: '',
            region: '',
            religion: '',
            sexualOrientation: '',
            maritalStatus: '',
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
    

    render(){
    
        return (
            <div className="pt-5"> 
                <div className="mb-5 page-title">
                    Informações pessoais  
                </div>
                <div className="mb-3">
                    <div className="p-2"> 
                        <div className="row mb-2"> 
                            <div className="col-sm-12 col-md-6 col-lg-6 mb-4"> 
                                <label>Nome: </label><label className="text-danger pl-2"> * </label>
                                <input type="text" 
                                    class="form-control" 
                                    placeholder="Digite seu nome"
                                    onChange={(event) => {this.changeValueHandler('name', event.target.value)}} />
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6 mb-4">
                                <label>E-mail: </label><label className="text-danger pl-2"> * </label>
                                <input type="email" 
                                    class="form-control" 
                                    placeholder="Digite seu e-mail"
                                    onChange={(event) => {this.changeValueHandler('email', event.target.value)}} />
                            </div>  
                          
                        </div>
                              
                        <label>1. Qual a sua idade? </label><label className="text-danger pl-2"> * </label>
                        <div className="form-check mb-2">
                            <label className="form-check-label p-1">
                                <input className="form-check-input" 
                                    type="radio" 
                                    name="age" 
                                    id="age" 
                                    value="15-20" 
                                    onChange={(event) => {this.changeValueHandler('age', event.target.value)}} />
                                15 - 20
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <label className="form-check-label p-1">
                                <input className="form-check-input" 
                                    type="radio" 
                                    name="age" 
                                    id="age" 
                                    value="21-20" 
                                    onChange={(event) => {this.changeValueHandler('age', event.target.value)}} />
                                21 - 30
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <label className="form-check-label p-1">
                                <input className="form-check-input" 
                                    type="radio" 
                                    name="age" 
                                    id="age" 
                                    value="31-40" 
                                    onChange={(event) => {this.changeValueHandler('age', event.target.value)}} />
                                31 - 40
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <label className="form-check-label p-1">
                                <input className="form-check-input"
                                    type="radio" 
                                    name="age" 
                                    id="age" 
                                    value="41-50" 
                                    onChange={(event) => {this.changeValueHandler('age', event.target.value)}} />
                                41 - 50
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <label className="form-check-label p-1">
                                <input className="form-check-input"
                                    type="radio" 
                                    name="age" 
                                    id="age" 
                                    value="51-60" 
                                    onChange={(event) => {this.changeValueHandler('age', event.target.value)}} />
                                51 - 60
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <label className="form-check-label p-1">
                                <input className="form-check-input" 
                                    type="radio" 
                                    name="age" 
                                    id="age" 
                                    value=">60" 
                                    onChange={(event) => {this.changeValueHandler('age', event.target.value)}} />
                                Mais de 60
                            </label>
                        </div>
                    </div>

                    <div className="p-2"> 
                        <label>2. Qual a sua renda familiar?</label><label className="text-danger pl-2"> * </label>
                        <div className="form-check mb-2">
                            <label className="form-check-label p-1">
                                <input className="form-check-input"
                                    type="radio" 
                                    name="rent" 
                                    id="rent" 
                                    value="<=1" 
                                    onChange={(event) => {this.changeValueHandler('rent', event.target.value)}} />
                                Até 1 salário mínimo
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <label className="form-check-label p-1">
                                <input className="form-check-input"
                                    type="radio" 
                                    name="rent" 
                                    id="rent"  
                                    value="1<x<=3" 
                                    onChange={(event) => {this.changeValueHandler('rent', event.target.value)}} />
                                De 1 a 3 salários mínimos 
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <label className="form-check-label p-1">
                                <input className="form-check-input"
                                    type="radio" 
                                    name="rent" 
                                    id="rent" 
                                    value="4<x<=6"
                                    onChange={(event) => {this.changeValueHandler('rent', event.target.value)}} />
                                De 4 a 6 salários mínimos
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <label className="form-check-label p-1">
                                <input className="form-check-input"
                                    type="radio" 
                                    name="rent" 
                                    id="rent" 
                                    value="7<x<=9"
                                    onChange={(event) => {this.changeValueHandler('rent', event.target.value)}} />
                                De 7 a 9 salários mínimos
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <label className="form-check-label p-1">
                                <input className="form-check-input"
                                    type="radio" 
                                    name="rent" 
                                    id="rent" 
                                    value=">9"
                                    onChange={(event) => {this.changeValueHandler('rent', event.target.value)}} />
                                Mais de 9 salários mínimos
                            </label>
                        </div>
                    </div>

                    <div className="p-2"> 
                        <label>3. Qual o seu nível escolar?</label><label className="text-danger pl-2"> * </label>
                        <div className="form-check mb-2">
                            <label className="form-check-label p-1">
                                <input className="form-check-input"
                                    type="radio" 
                                    name="scolarity" 
                                    id="scolarity" 
                                    value="Fundamental 1 completo"
                                    onChange={(event) => {this.changeValueHandler('scolarity', event.target.value)}} />
                                Fundamental I completo
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <label className="form-check-label p-1">
                                <input className="form-check-input"
                                    type="radio" 
                                    name="scolarity" 
                                    id="scolarity" 
                                    value="Fundamental 2 completo"
                                    onChange={(event) => {this.changeValueHandler('scolarity', event.target.value)}} />
                                Fundamental II completo 
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <label className="form-check-label p-1">
                                <input className="form-check-input"
                                    type="radio" 
                                    name="scolarity" 
                                    id="scolarity" 
                                    value="Ensino médio completo"
                                    onChange={(event) => {this.changeValueHandler('scolarity', event.target.value)}} />
                                Ensino Médio completo
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <label className="form-check-label p-1">
                                <input className="form-check-input" 
                                    type="radio" 
                                    name="scolarity" 
                                    id="scolarity" 
                                    value="Ensino superior completo"
                                    onChange={(event) => {this.changeValueHandler('scolarity', event.target.value)}} />
                                Ensino superior completo
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <label className="form-check-label p-1">
                                <input className="form-check-input"
                                    type="radio" 
                                    name="scolarity" 
                                    id="scolarity" 
                                    value="Pós graduação"
                                    onChange={(event) => {this.changeValueHandler('scolarity', event.target.value)}} />
                                Pós-Graduação
                            </label>
                        </div>
                    </div>

                    <div className="p-2"> 
                        <label>4. Qual sua região?</label><label className="text-danger pl-2"> * </label>
                        <div className="form-check mb-2">
                            <label className="form-check-label p-1">
                                <input className="form-check-input"
                                    type="radio" 
                                    name="region" 
                                    id="region" 
                                    value="Norte"
                                    onChange={(event) => {this.changeValueHandler('region', event.target.value)}} />
                                Norte
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <label className="form-check-label p-1">
                                <input className="form-check-input"
                                    type="radio" 
                                    name="region" 
                                    id="region" 
                                    value="Nordeste"
                                    onChange={(event) => {this.changeValueHandler('region', event.target.value)}} />
                                Nordeste 
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <label className="form-check-label p-1">
                                <input className="form-check-input"
                                    type="radio" 
                                    name="region" 
                                    id="region" 
                                    value="Centro-Oeste"
                                    onChange={(event) => {this.changeValueHandler('region', event.target.value)}} />
                                Centro-Oeste
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <label className="form-check-label p-1">
                                <input className="form-check-input" 
                                    type="radio" 
                                    name="region" 
                                    id="region" 
                                    value="Sudeste"
                                    onChange={(event) => {this.changeValueHandler('region', event.target.value)}} />
                                Sudeste
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <label className="form-check-label p-1">
                                <input className="form-check-input" 
                                    type="radio" 
                                    name="region" 
                                    id="region" 
                                    value="Sul"
                                    onChange={(event) => {this.changeValueHandler('region', event.target.value)}} />
                                Sul
                            </label>
                        </div>
                    </div>

                    <div className="p-2"> 
                        <label>5. Qual a sua religião?</label><label className="text-danger pl-2"> * </label>
                        <div className="form-check mb-2">
                            <label className="form-check-label p-1">
                                <input className="form-check-input" 
                                    type="radio" 
                                    name="religion" 
                                    id="religion" 
                                    value="Católica"
                                    onChange={(event) => {this.changeValueHandler('religion', event.target.value)}} />
                                Católica
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <label className="form-check-label p-1">
                                <input className="form-check-input" 
                                    type="radio" 
                                    name="religion" 
                                    id="religion" 
                                    value="Evangélica"
                                    onChange={(event) => {this.changeValueHandler('religion', event.target.value)}} />
                                Evangélica
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <label className="form-check-label p-1">
                                <input className="form-check-input" 
                                    type="radio" 
                                    name="religion" 
                                    id="religion" 
                                    value="Espírita"
                                    onChange={(event) => {this.changeValueHandler('religion', event.target.value)}} />
                                Espírita
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <label className="form-check-label p-1">
                                <input className="form-check-input" 
                                    type="radio" 
                                    name="religion" 
                                    id="religion" 
                                    value="Umbanda"
                                    onChange={(event) => {this.changeValueHandler('religion', event.target.value)}} />
                                Umbanda
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <label className="form-check-label p-1">
                                <input className="form-check-input" 
                                    type="radio" 
                                    name="religion" 
                                    id="religion" 
                                    value="Ateu"
                                    onChange={(event) => {this.changeValueHandler('religion', event.target.value)}} />
                                Ateu
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <label className="form-check-label p-1">
                                <input className="form-check-input" 
                                    type="radio" 
                                    name="religion" 
                                    id="religion" 
                                    value="Outras"
                                    onChange={(event) => {this.changeValueHandler('religion', event.target.value)}} />
                                Outras
                            </label>
                        </div>
                    </div>

                    <div className="p-2"> 
                        <label>6. Qual a sua orientação sexual?</label><label className="text-danger pl-2"> * </label>
                        <div className="form-check mb-2">
                            <label className="form-check-label p-1">
                                <input className="form-check-input" 
                                    type="radio" 
                                    name="sexualOrientation" 
                                    id="sexualOrientation" 
                                    value="Heterossexual"
                                    onChange={(event) => {this.changeValueHandler('sexualOrientation', event.target.value)}} />
                                Heterossexual
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <label className="form-check-label p-1">
                                <input className="form-check-input" 
                                    type="radio" 
                                    name="sexualOrientation" 
                                    id="sexualOrientation" 
                                    value="Homossexual"
                                    onChange={(event) => {this.changeValueHandler('sexualOrientation', event.target.value)}} />
                                Homossexual
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <label className="form-check-label p-1">
                                <input className="form-check-input" 
                                    type="radio" 
                                    name="sexualOrientation" 
                                    id="sexualOrientation" 
                                    value="Bissexual"
                                    onChange={(event) => {this.changeValueHandler('sexualOrientation', event.target.value)}} />
                                Bissexual
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <label className="form-check-label p-1">
                                <input className="form-check-input" 
                                    type="radio" 
                                    name="sexualOrientation" 
                                    id="sexualOrientation" 
                                    value="Outros"
                                    onChange={(event) => {this.changeValueHandler('sexualOrientation', event.target.value)}} />
                                Outros
                            </label>
                        </div>
                    </div>

                    <div className="p-2"> 
                        <label>7. Qual seu estado civil?</label><label className="text-danger pl-2"> * </label>
                        <div className="form-check mb-2">
                            <label className="form-check-label p-1">
                                <input className="form-check-input" 
                                    type="radio" 
                                    name="maritalStatus" 
                                    id="maritalStatus" 
                                    value="Solteira"
                                    onChange={(event) => {this.changeValueHandler('maritalStatus', event.target.value)}} />
                                Solteira
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <label className="form-check-label p-1">
                                <input className="form-check-input" 
                                    type="radio" 
                                    name="maritalStatus" 
                                    id="maritalStatus" 
                                    value="Casada"
                                    onChange={(event) => {this.changeValueHandler('maritalStatus', event.target.value)}} />
                                Casada
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <label className="form-check-label p-1">
                                <input className="form-check-input" 
                                    type="radio" 
                                    name="maritalStatus" 
                                    id="maritalStatus" 
                                    value="Viúva"
                                    onChange={(event) => {this.changeValueHandler('maritalStatus', event.target.value)}} />
                                Viúva
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <label className="form-check-label p-1">
                                <input className="form-check-input" 
                                    type="radio" 
                                    name="maritalStatus" 
                                    id="maritalStatus" 
                                    value="Separada/Divorciada"
                                    onChange={(event) => {this.changeValueHandler('maritalStatus', event.target.value)}} />
                                Separada/Divorciada
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <label className="form-check-label p-1">
                                <input className="form-check-input" 
                                    type="radio" 
                                    name="maritalStatus" 
                                    id="maritalStatus" 
                                    value="União estável"
                                    onChange={(event) => {this.changeValueHandler('maritalStatus', event.target.value)}} />
                                União estável
                            </label>
                        </div>
                    </div>


                </div>
                <div>
                    <button 
                        type="submit" 
                        className="btn btn-primary float-right mb-4"
                        onClick={(event) => {this.props.next(event, 'personalInfo', this.state)}}>
                        Próximo
                    </button>
                </div>
            </div>
        )
    }


}

export default PersonalInfo;