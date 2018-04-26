import React, { Component } from 'react';


export class Accounts extends Component {
  render() {




    return (
      <div className='all_accounts_top_div'>
        {/* <h3>Hello from Acounts</h3> */}


        <ul className="all_accounts_ul">
          {
            this.props.account_info.map(
              (e, i) => (
                <li
                  key={i}
                  className='all_accounts_li'
                  >
                    <div className='all_accounts_name_coins'>
                      <span>{e.name}</span>
                      <span>{e.accounts_coins}</span>
                    </div>

                </li>
              )
            )
          }
        </ul>
      </div>
    );
  }
}
