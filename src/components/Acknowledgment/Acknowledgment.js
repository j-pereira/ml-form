import React, { Component } from 'react';
import faccamp from '../../img/faccamp.png';

class Acknowledgment extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
        }
    }

    render(){
        return (
            <div> 
                <div className="mt-5 mb-2 page-title">
                    Mulheres Literais
                </div>
                
                <div className="text-center mt-2 p-2">
                    Obrigada!
                </div>
                <div className="mb-2 p-2"> 
                    <p className="p-2 text-center">Compartilhe o link dessa pesquisa com as mulheres que você conhece!</p>
                    <div className="float-center">
                        <div class="fb-share-button" data-href="https://www.google.com.br/" data-layout="button" data-size="small" data-mobile-iframe="false"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.google.com.br%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Compartilhar</a></div>    
                    </div>
                </div>
                <div className="text-center p-2">
                    <div className="form-group ml-3 mr-3">
                        <label htmlFor="email">
                            Dúvidas? Críticas? Sugestões? Me escreva um e-mail!
                        </label>
                        <a className="pl-2" href="mailto:mayara.fp@outlook.com?subject=Mulheres%20Literais%20-%20Feedback" target="_blank" ><i className="fas fa-at"></i></a>
                    </div>

                </div>
                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <div className="float-center text-center">
                            <a href="http://www.faccamp.br" target="_blank"> 
                                <img className="float-center" src={faccamp} width="100" height="30"/>
                            </a>
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
                
            </div>
        )
    }
}


export default Acknowledgment;