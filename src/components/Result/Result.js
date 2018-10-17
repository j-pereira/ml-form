import React, { Component } from 'react';
import ReactDOM from 'react-dom';   
import Profile from '../Result/Profile';
import config from '../../config/personalityQuestions';
import FirebaseService from "../../services/firebaseServices";

class Result extends Component {

    getBooks(){
        return config.books;
    }

    getSchools(){
        return config.schools;
    }

    componentDidMount() {
        ReactDOM.findDOMNode(this).scrollTop = 0
    }

    render(){
        let result = {
            bruxa_monte_cordova: 0,
            doida_candal: 0,
            viuvinha: 0,
            luciola: 0,
            mulher_30_anos: 0,
            madame_bovary: 0,
            mem_pos_bras_cubas: 0,
            primo_basilio: 0,
            dom_casmurro: 0,
            quincas_borba: 0,
            nda: 0,
            nsco: 0
        };
    
        let weight = [3, 4, 4, 5, 3, 4, 3, 4, 3, 6, 3, 4, 3, 7, 4, 3, 3];
        let profileResult = 'empty';

        if (this.props.form.personalInfo !== undefined && this.props.form.extraInfo !== undefined && this.props.form.personalityForm !== undefined) {
            let personalityResult = this.props.form.personalityForm;
            delete personalityResult.page;
            delete personalityResult.newState;
            
            for (let i=0; i< Object.keys(personalityResult).length; i++) {
                let answer = personalityResult['q' + i.toString()].split("|")
                for (let j=0; j<answer.length; j++){
                    result[answer[j]] += weight[i];
                }
            }

            let resultBooks = [
                { book: 'bruxa_monte_cordova', value: result.bruxa_monte_cordova },
                { book: 'doida_candal', value: result.doida_candal},
                { book: 'viuvinha', value: result.viuvinha },
                { book: 'luciola', value: result.luciola },
                { book: 'mulher_30_anos', value: result.mulher_30_anos },
                { book: 'madame_bovary', value: result.madame_bovary },
                { book: 'mem_pos_bras_cubas', value: result.mem_pos_bras_cubas },
                { book: 'primo_basilio', value: result.primo_basilio },
                { book: 'dom_casmurro', value: result.dom_casmurro },
                { book: 'quincas_borba', value: result.quincas_borba },
                { book: 'nda', value: result.nda },
                { book: 'nsco', value: result.nsco }
            ];
            
            let greater = Math.max.apply(Math, resultBooks.map(function(o) { return o.value; }));
            let profile = [];
            for (let l=0; l<resultBooks.length; l++){
                if (resultBooks[l].value === greater)
                    profile.push(resultBooks[l]);
            }
            
            profileResult = profile.map(p => {
                return (
                    <Profile profile={p} books={this.getBooks()} schools={this.getSchools()} />
                )
            });
            

            console.log(this.props.form)
            console.log(result)

            const form = this.props.form;

            FirebaseService.pushData('forms', {
                extraInfo: form.extraInfo,
                personalInfo: form.personalInfo,
                personalityForm: form.personalityForm,
                result: result
            });
       }
    
        return (
            <div>
                <div className="mt-5 mb-5">
                    <div className="text-center mb-5">Você se identifica mais com:</div>
                    <div>{profileResult}</div>
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary float-right mb-4"
                    onClick={(event) => {this.props.next(event)}}>
                    Concluir
                </button>
            </div>
        )
    }


}

export default Result;