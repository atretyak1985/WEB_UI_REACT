import React, { Component } from 'react';


export class Transactions extends Component {




  render() {


    const transactions_rend = this.props.transactions.length > 0 ?
                              this.props.transactions.map( (el, ind) => (
                                <li
                                  className='transactions_lis'
                                  key={ind}>
                                  <div className='transactions_coins_date'>

                                    <span>{el.t_a_coins}</span>
                                    <span>{el.date}</span>

                                  </div>
                                  <div className='transactions_notes'>
                                    {el.notes}
                                  </div>
                                </li>
                              ) )
                              :
                              (<li className='transactions_lis'>empty list nothing to show</li>);


    return (
      <div className="transactions">
        {/* <h5>Hello from Transactions</h5> */}
        {/* {this.props.transactions} */}
        <ul className='transactions_ul'>

          {/* {
            this.props.transactions.map( (el, ind) => (
              <li key={ind}>
                {el}
              </li>
            ) )
          } */}

          {transactions_rend}
        </ul>
      </div>
    );
  }
}
