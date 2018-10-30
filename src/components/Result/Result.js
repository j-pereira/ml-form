import React, { Component } from 'react';
import ReactDOM from 'react-dom';   
import Profile from '../Result/Profile';
import ProfileSchool from '../Result/ProfileSchool'
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
        window.scrollTo(0, 0);
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
        let resultPage = 'empty';
        let resultTile = 'empty';

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
                { book: 'bruxa_monte_cordova', value: result.bruxa_monte_cordova, school: 'romantism' },
                { book: 'doida_candal', value: result.doida_candal, school: 'romantism' },
                { book: 'viuvinha', value: result.viuvinha, school: 'romantism' },
                { book: 'luciola', value: result.luciola, school: 'romantism' },
                { book: 'mulher_30_anos', value: result.mulher_30_anos, school: 'realism' },
                { book: 'madame_bovary', value: result.madame_bovary, school: 'realism' },
                { book: 'mem_pos_bras_cubas', value: result.mem_pos_bras_cubas, school: 'realism' },
                { book: 'primo_basilio', value: result.primo_basilio, school: 'realism' },
                { book: 'dom_casmurro', value: result.dom_casmurro, school: 'realism' },
                { book: 'quincas_borba', value: result.quincas_borba, school: 'realism'} ,
                { book: 'nda', value: result.nda, school: 'nda' },
                { book: 'nsco', value: result.nsco, school: 'nsco' }
            ];
            
            let greater = Math.max.apply(Math, resultBooks.map(function(o) { return o.value; }));
            let profile = [];
            for (let l=0; l<resultBooks.length; l++){
                if (resultBooks[l].value === greater)
                    profile.push(resultBooks[l]);
            }
            

            //MULTIPLE PROFILES SUPPORT
            
            let profileResultBySchool = {
                romantism: [],
                realism: [],
                nda: []
            };
            for (let m=0; m<profile.length; m++) {
                profileResultBySchool[profile[m].school].push(profile[m])
            }
            //let resultPage = '';
            let profileResultRomantism = '';
            let profileResultRealism = '';
            let profileResultNda = '';
            if (profile.length > 1) {
                resultTile = "Você se identifica com mais de um perfil:"
                if (profileResultBySchool.romantism.length > 1) {
                    profileResultRomantism = <ProfileSchool profiles={profileResultBySchool.romantism} books={this.getBooks} schools={this.getSchools} />
                } else if (profileResultBySchool.romantism.length === 1) {
                    profileResultRomantism = <Profile p={profileResultBySchool.romantism[0]} books={this.getBooks} schools={this.getSchools} />
                } else {
                    profileResultRomantism = ''
                }

                if (profileResultBySchool.realism.length > 1) {
                    profileResultRealism = <ProfileSchool profiles={profileResultBySchool.realism} books={this.getBooks} schools={this.getSchools} />
                } else if (profileResultBySchool.realism.length === 1) {
                    profileResultRealism = <Profile p={profileResultBySchool.realism[0]} books={this.getBooks} schools={this.getSchools} />
                } else {
                    profileResultRealism = ''
                }

                if (profileResultBySchool.nda.length > 1) {
                    profileResultNda = <ProfileSchool profiles={profileResultBySchool.nda} books={this.getBooks} schools={this.getSchools} />
                }else if (profileResultBySchool.nda.length === 1) {
                    profileResultNda = <Profile p={profileResultBySchool.nda[0]} books={this.getBooks} schools={this.getSchools} />
                } else {
                    profileResultNda = ''
                }

                resultPage = <div><div>{profileResultRomantism}</div> <div>{profileResultRealism}</div> <div>{profileResultNda}</div></div>

            } else {
                resultTile = "Você se identifica mais com:"
                resultPage = <Profile p={profile[0]} books={this.getBooks} schools={this.getSchools} />
            }
            
    
            //SAVE FIREBASE
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
                    <div className="text-center mb-5">{resultTile}</div>
                    <div>{resultPage}</div>
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