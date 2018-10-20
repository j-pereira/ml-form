import React, { Component } from 'react'
import faccamp from '../../img/faccamp.png'

class Home extends Component {

    render(){

    
        return (
            <div className=""> 
                <div className="mt-5 mb-2 page-title">
                    Mulheres Literais
                </div>
                <div className="text-center pl-5 pr-5 font-italic subtitle">
                    Análise comparativa do perfil feminino no Romantismo e Realismo em convergência com o perfil contemporâneo
                </div>
                <div className="row mt-4">
                    <div className="col-sm-2 col-md-2 col-lg-2"></div>
                    <div className="col-sm-8 col-md-8 col-lg-8">
                        <div className="mt-4 mb-4 text-center"> 
                            <p>Olá, mulher! <br/>
                            Este questionário tem duração de aproximadamente 30 minutos e se você sair ou atualizar a página, perderá todo seu progresso. 
                            Temos por objetivo descobrir quem você é na literatura realista ou romântica através de um teste de personalidade. Então se ajeita e bora começar!</p>
                        </div>
                    </div>
                    <div className="col-sm-2 col-md-2 col-lg-2">
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col">
                        <button 
                            type="submit" 
                            className="btn btn-primary float-right mb-4 mt-4 mr-3"
                            onClick={(event) => {this.props.next(event)}}>
                            Começar
                        </button>
                    </div>
                </div>
                
                <div className="float-center text-center pb-1">
                    <small>© Mulheres Literais - 1.0</small>
                </div>
                <div className="float-center text-center pb-1">
                    <small>
                        <a className="pl-2" href="mailto:mayara.fp@outlook.com?subject=Mulheres%20Literais%20-%20Reporte%20Problema" target="_blank" >Teve algum problema? Reporte aqui</a>
                    </small>
                </div>
                <div className="row pb-1">
                    <div className="col"></div>
                    <div className="col">
                        <div className="float-center text-center">
                            <a href="http://www.faccamp.br" target="_blank"> 
                                <img className="float-center" alt="Unifaccamp"src={faccamp} width="100" height="30"/>
                            </a>
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        )
    }


}

export default Home;