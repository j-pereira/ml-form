import React, { Component } from 'react'
import ReactDOM from 'react-dom'; 

class Alternative extends Component {

    constructor(props){
        super(props);
        this.state = {
            part: ''
        }
    }
    
    
    render(){

    
        return (
            <div> 
                <div className="form-check">
                    <label className="form-check-label p-2">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            id={this.props.value}
                            name={this.props.question} 
                            value={this.props.value} 
                            checked={this.props.checked === this.props.value}
                            onChange={(event) => {this.props.saveValue(event, event.target.value)}}
                        />
                        {this.props.option}
                    </label>
                </div>
                <div> 
                    {this.state.part}
                </div>
            </div>
        )
    }


}

export default Alternative;