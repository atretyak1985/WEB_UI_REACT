import React, {Component} from 'react';



export class PlusToCard extends Component {

  render(){


    return (
      <div className='top_div_a'>

        <select
          // name="select"
          className='plus_to_acccount'
          // ref='plus_to_acccount'

          ref={this.props.plus_to_acccount_Ref}

          >

          <option value="" disabled selected>Select CARD</option>
          {/* <option value="">Value 2</option> */}
          {/* <option value="">Value 3</option> */}


        {
          this.props.allAccounts.map( (elem, k) =>
            (
              <option
                key={k}
                value={elem.name}

                >
                  {elem.name}
                </option>
            )
          )
        }



        </select>


        <input
          // type='text'
          type='number'
          className='plus_to_account_input'
          // defaultValue=''
          placeholder='plus to card'

          // ref='plus_to_account_input'

          ref={this.props.plus_to_account_input_Ref}


        />




        <button

          onClick={this.props.onBtnClickPLUStoCard}

          >
            PLUS TO ACCOUNT
        </button>
      </div>

    );
  }
}
