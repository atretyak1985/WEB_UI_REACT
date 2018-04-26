

import React, { Component } from 'react';

import {Transactions} from './transactions';







export class Category extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };

    this.transactionsOnClick = this.transactionsOnClick.bind(this);
  }

  transactionsOnClick(e) {
    e.preventDefault();

    const visibleChanged = this.state.visible ? false : true;

    this.setState({
      visible: visibleChanged
    }, () => { console.log('this.state.visible changed to --->' + this.state.visible ); }
  );
  }

  render() {



    return (
      <li
        className=""
        onClick={this.transactionsOnClick}>

        <div className="category">
          <img className="category_image" src={this.props.image} width="50px" height="50px" alt="x" />

          <div className="category_info">

            <div className="category_name">
              {this.props.name}
            </div>

            <div className="category_coins">
              {this.props.coins}
            </div>

          </div>
        </div>

        <div className={'transactions_component'  + (this.state.visible ? '': ' none') }>
          <Transactions transactions={this.props.transactions} />
        </div>

      </li>
    );
  }
}
