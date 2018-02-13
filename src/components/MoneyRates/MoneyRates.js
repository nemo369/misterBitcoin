import React, { Component } from 'react';
import './MoneyRates.css'

export default class MoneyRates extends Component {

    componentWillMount(){
        this.setState({rate:this.props.rate.dolar })
    }

    state = {
        coin: 'dolar',
        rate: 0,
        rotation:300
    }

    chooseRate = (coin, div,rate,rotation) => {
        this.setState({ coin, rate,rotation })
        let elRemove = document.querySelector('.clicked');
        elRemove.classList.remove('clicked')
        div.classList.add('clicked')
    }
    render() {
        const { rate } = this.props
        const { rotation } =  this.state;
        return (
            <section className="money-rate">
                <div className="money-container" style={{transform: `rotate(${rotation}deg)`}}>
                    <div className="button dolar clicked" 
                        onClick={(ev) => this.chooseRate('dolar', ev.target,rate.dolar, 300)}>{rate.dolar} $</div>
                    <div className="button bitcoin" 
                        onClick={(ev) => this.chooseRate('bitcoin', ev.target,rate.bitcoin, 240)}>{(rate.bitcoin * 1).toFixed(6)}</div>
                    <div className="button shekel"
                         onClick={(ev) => this.chooseRate('shekel', ev.target,rate.dolar * 24, 180)}>{rate.dolar * 24} 	₪</div>
                    <div className="button euro" 
                        onClick={(ev) => this.chooseRate('euro', ev.target, rate.dolar /3 ,120)}>{(rate.dolar / 3).toFixed(2)}€</div>
                    <div className="button pound" 
                        onClick={(ev) => this.chooseRate('pound', ev.target, rate.dolar*23, 60)}>{rate.dolar * 23} 	£</div>
                    <div className="button ethereum" 
                        onClick={(ev) => this.chooseRate('ethereum', ev.target,rate.dolar/2, 0)}>{(rate.bitcoin / 2).toFixed(5)} &</div>
                </div>
                <p className="rate">You Have {this.state.rate} {this.state.coin}</p>
            </section>
        )
    }
}

//  default MoneyRates;
