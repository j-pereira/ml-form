import React from 'react';
import img_bruxa_monte_cordova from '../../img/bruxa_monte_cordova.png'
import img_doida_candal from '../../img/doida_candal.png'
import img_viuvinha from '../../img/viuvinha.jpg'
import img_luciola from '../../img/luciola.jpg'
import img_mulher_30_anos from '../../img/mulher_30_anos.jpg'
import img_madame_bovary from '../../img/madame_bovary.jpg'
import img_mem_pos_bras_cubas from '../../img/mem_pos_bras_cubas.jpg'
import img_primo_basilio from '../../img/primo_basilio.jpg'
import img_dom_casmurro from '../../img/dom_casmurro.jpg'
import img_quincas_borba from '../../img/quincas_borba.jpg'
import img_nda from '../../img/nda.jpg'

const profile = (props) => {
    const books = props.books();
    const schools = props.schools();

    let profileDescription = books[props.p.book].description.split("|");
    let schoolDescription = schools[books[props.p.book].school].description.split("|");

    let renderPD = profileDescription.map(paragraph => {
        return ( <p>{paragraph}</p> )
    });
    let renderSD = schoolDescription.map(paragraph => {
        return ( <p>{paragraph}</p> )
    });

    let img;
    if (props.p.book === 'bruxa_monte_cordova')
        img = img_bruxa_monte_cordova
    else if (props.p.book === 'doida_candal')
        img = img_doida_candal
    else if (props.p.book === 'viuvinha')
        img = img_viuvinha
    else if (props.p.book === 'luciola')
        img = img_luciola
    else if (props.p.book === 'mulher_30_anos')
        img = img_mulher_30_anos
    else if (props.p.book === 'madame_bovary')
        img = img_madame_bovary
    else if (props.p.book === 'mem_pos_bras_cubas')
        img = img_mem_pos_bras_cubas
    else if (props.p.book === 'primo_basilio')
        img = img_primo_basilio
    else if (props.p.book === 'dom_casmurro')
        img = img_dom_casmurro
    else if (props.p.book === 'quincas_borba')
        img = img_quincas_borba
    else if (props.p.book === 'nda')
        img = img_nda

    return (
        <div className="pl-2 pr-2">
            <div className="page-title mb-3"> {books[props.p.book].woman} {books[props.p.book].title} </div> 
            <div className="row mb-3">
                <div className="col-sm-1 col-md-2 col-lg-3">
                </div>
                <div className="col-sm-11 col-md-10 col-lg-9">
                    <div className="text-secondary text-right font-italic pr-2"> {books[props.p.book].part} </div>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <img src={img} alt={books[props.p.book].title} height="300em" width="215em" className="pl-4 pt-2 p-4"/>
                </div>
                <div className="col-sm-12 col-md-8 col-lg-8">
                    <div className="text-justify p-2"> {renderPD} </div>
                </div>
            </div> 

            <div className="mt-4 text-center school-result"> {schools[books[props.p.book].school].title} </div>
            <div className="text-justify p-3"> {renderSD} </div>
        </div>
    )
}

export default profile;