import React, { Component } from 'react';

class Transfer extends Component {
    state = {
        coinToTransfer:'0',
    }
       
    setCoins = (event) =>{
    // const coins = {...this.state.coinToTransfer, 
    //         coinToTransfer: event.target.value}    
    this.setState({coinToTransfer : event.target.value})
    }

    render(props) {
    const {coinToTransfer, max} = this.state
        return (
            <div>
                <h3>Want To Transfer Coins?</h3>
                <div>
                <input type="range" min="0" max={this.props.max} 
                            value={coinToTransfer}  onChange={this.setCoins}/> {coinToTransfer}
                </div>
                <button onClick={ () => this.props.onTransfer(this.state.coinToTransfer)} >
                    Transfer Money
                </button>
            </div>
        )
    }
}

export default Transfer