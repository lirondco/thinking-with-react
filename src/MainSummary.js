import React, {Component} from 'react';
import Summary from './Summary';


export default class MainSummary extends Component {
    render() {
        return (
            <section className="main__summary">
            <h2>Your cart</h2>
            <Summary 
            selected = {this.props.selected}
            USCurrencyFormat = {this.props.USCurrencyFormat}/>
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {this.props.USCurrencyFormat(this.props.total)}
              </div>
            </div>
            </section>
        )

    }
}

