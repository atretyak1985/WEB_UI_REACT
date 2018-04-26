import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import {Category} from './category';


import {PlusToCard} from './plus_to_card.js';




import {GraphicCharts} from './graphic_charts';

import {Accounts} from './all_accounts';


//import image
import exercise1 from '../img/exercise1.png';
import exercise2 from '../img/exercise2.png';
import exercise3 from '../img/exercise3.png';



const cat = [
  {
    id: '0001',
    name: 'transport',
    image: exercise1,
    transactions: [],
    notes: '',
    coins: 10
  },
  {
    id: '0002',
    name: 'restaurants',
    image: exercise2,
    transactions: [],
    coins: 10
  },
  {
    id: '0003',
    name: 'cafe',
    image: exercise3,
    transactions: [],
    coins: 10
  },
  {
    id: '0004',
    name: 'fun',
    image: exercise1,
    transactions: [],
    coins: 10
  },
  {
    id: '0005',
    name: 'food',
    image: exercise1,
    transactions: [],
    coins: 10
  }






];








const accounts = [
  {
    name: 'VISA classic',
    accounts_coins: 1000
  },
  {
    name: 'VISA gold',
    accounts_coins: 5000
  },
  {
    name: 'MASTERCARD gold',
    accounts_coins: 2000
  },
  {
    name: 'MASTERCARD classic',
    accounts_coins: 2000
  }


];










export class Categories extends Component {





  constructor(props) {
    super(props);
    this.state = {
      allCategories: cat,
      allAccounts: accounts,


      //for addTransation
      nameIsEmpty: true,
      idIsEmpty: true,

      // for addNewAccountName
      newAccountNameIsEmpty: true,


      showHideAllinputs: false,
      showFormNewAccount: false,
      showFormNewCat: false,
      showFormNewTRANSACTION: false

    };

    // bind this for component functions
    this.onBtnClickPLUStoCard = this.onBtnClickPLUStoCard.bind(this);
    this.onBtnClickShowHideADD_DELL = this.onBtnClickShowHideADD_DELL.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onIdChange = this.onIdChange.bind(this);
    this.onBtnClickDellAcc = this.onBtnClickDellAcc.bind(this);
    this.onBtnClickDellCat = this.onBtnClickDellCat.bind(this);
    this.onNameAccountChange = this.onNameAccountChange.bind(this);
    this.onBtnShowHideAccountForm = this.onBtnShowHideAccountForm.bind(this);
    this.onBtnClickAddAcoount = this.onBtnClickAddAcoount.bind(this);
    this.onBtnShowHideForm = this.onBtnShowHideForm.bind(this);
    this.onBtnClick = this.onBtnClick.bind(this);
    this.catSearch = this.catSearch.bind(this);
    this.onBtnShowHideTRANSACTION = this.onBtnShowHideTRANSACTION.bind(this);
    this.onBtnTransactionsClick = this.onBtnTransactionsClick.bind(this);





  }
  // END of constructor









  // -------------------------------------------------for PLUS to CARD

  onBtnClickPLUStoCard (e) {
    e.preventDefault();

    if(!(ReactDOM.findDOMNode(this.selectOption).value )){
        return console.log('try select card from select options');
    }

    console.log('ReactDOM.findDOMNode(this.selectOption).value===>',
    ReactDOM.findDOMNode(this.selectOption).value);

    // prepare data for change this.state.allAccounts
    let stateJSON_ACCOUNT = JSON.parse(JSON.stringify(this.state.allAccounts));
    console.log('stateJSON_ACCOUNT --->', stateJSON_ACCOUNT);

    let filterJSON_ACCOUNT = stateJSON_ACCOUNT.filter(
      (el) => ( el.name == ReactDOM.findDOMNode(this.selectOption).value )
    );

    console.log('filterJSON_ACCOUNT --->', filterJSON_ACCOUNT);
    console.log('filterJSON_ACCOUNT[0] --->', filterJSON_ACCOUNT[0]);



    console.log('filterJSON_ACCOUNT[0].accounts_coins--> ', filterJSON_ACCOUNT[0].accounts_coins);
    // filterJSON_ACCOUNT[0].accounts_coins
    filterJSON_ACCOUNT[0].accounts_coins = filterJSON_ACCOUNT[0].accounts_coins
    +
    (
      ReactDOM.findDOMNode(this.inputElem).value ?
              parseInt(ReactDOM.findDOMNode(this.inputElem).value)
              :
              0
    );
    console.log('filterJSON_ACCOUNT[0].accounts_coins--> ', filterJSON_ACCOUNT[0].accounts_coins);

    console.log('ReactDOM.findDOMNode(this.inputElem).value',
      ReactDOM.findDOMNode(this.inputElem).value
    );



    // create new arr for our state
    let allAccounts = stateJSON_ACCOUNT.map(
      (e) => {
        if (e.name == filterJSON_ACCOUNT[0].name) {
          // console.log(e.name);
           return Object.assign( e, JSON.parse(JSON.stringify(filterJSON_ACCOUNT[0])) );
        } else {
          // console.log('nothing found');
          return e
        }
      }
    );

    console.log('allAccounts --->', allAccounts);

    this.setState({
      allAccounts: allAccounts
    });


  }
  //---------------------------------------------  END for Plus to CARD














  // -----------------------------------------------Show Hide all butons and inputs


  onBtnClickShowHideADD_DELL(e) {
    e.preventDefault();

    console.log('working');

    this.setState({
      showHideAllinputs: this.state.showHideAllinputs ? false : true
    }
    , () => (   console.log( 'this.state.showHideAllinputs --->',this.state.showHideAllinputs)   )
  );


  }

  //-----------------------------------------------END of Show Hide all butons and inputs

















  //----------------------------------------- functions for check add category inputs




  onNameChange(e) {

    let stateFilters = this.state.allCategories.filter(
      (val) => ( val.name === e.target.value )
    );
    console.log(stateFilters);
    console.log(stateFilters.length);




    if ( (e.target.value.trim().length > 0)
      &&

      (
        stateFilters.length === 0

      )

    ) {
      this.setState({nameIsEmpty: false})
    } else {
      this.setState({nameIsEmpty: true})
    }


  }






  onIdChange(e) {

    let stateFilters = this.state.allCategories.filter(
      (val) => ( val.id === e.target.value )
    );
    console.log(stateFilters);
    console.log(stateFilters.length);




    if ( (e.target.value.trim().length > 0)
      &&

      (
        stateFilters.length === 0

      )

    ) {
      this.setState({idIsEmpty: false})
    } else {
      this.setState({idIsEmpty: true})
    }


  }




  //----------------------------------------- END functions for check add category inputs











  // -----------------------------------------------DELL ACCOUNT

  onBtnClickDellAcc(e) {
    e.preventDefault();


    let stateJSON_Dell_Account = JSON.parse(JSON.stringify(this.state.allAccounts));

    console.log('stateJSON_Dell_Account   ---->', stateJSON_Dell_Account);

    console.log(ReactDOM.findDOMNode(this.refs.dell_acccount).value);

    let filterJSON_Dell_Acc = stateJSON_Dell_Account.filter(
      (el) => ( el.name !==  ReactDOM.findDOMNode(this.refs.dell_acccount).value )
    );

    console.log('filterJSON_Dell_Acc ---> ', filterJSON_Dell_Acc  );

    this.setState({
      allAccounts: filterJSON_Dell_Acc
    }
    , () => (console.log('this.state.allAccounts --->', this.state.allAccounts))
  );







  }
  // -----------------------------------------------END of DELL ACCOUNT






  // -----------------------------------------------DELL CATEGORY

  onBtnClickDellCat(e) {
    e.preventDefault();

    let stateJSON_Dell_Cat = JSON.parse(JSON.stringify(this.state.allCategories));

    console.log('stateJSON_Dell_Cat   ---->', stateJSON_Dell_Cat);

    console.log(ReactDOM.findDOMNode(this.refs.dell_category).value);

    let filterJSON_Dell_Cat = stateJSON_Dell_Cat.filter(
      (el) => ( el.name !== ReactDOM.findDOMNode(this.refs.dell_category).value )
    );

    console.log('filterJSON_Dell_Cat ---> ', filterJSON_Dell_Cat  );

    this.setState({
      allCategories: filterJSON_Dell_Cat
    }
    , () => (console.log('this.state.allCategories --->', this.state.allCategories))
  );





  }
  // -----------------------------------------------END of DELL CATEGORY














  //------------------------------------------- check rules for add account inputs

  onNameAccountChange(e) {

    let stateFilters = this.state.allAccounts.filter(
      (val) => ( val.name === e.target.value )
    );
    console.log(stateFilters);
    console.log(stateFilters.length);




    if ( (e.target.value.trim().length > 0)
      &&

      (
        stateFilters.length === 0

      )

    ) {
      this.setState({newAccountNameIsEmpty: false})
    } else {
      this.setState({newAccountNameIsEmpty: true})
    }


  }



  //------------------------------------------- check rules for add account inputs













  onBtnShowHideAccountForm(e) {
    e.preventDefault();





    this.setState({
      showFormNewAccount: this.state.showFormNewAccount ? false : true
    }
    , () => (   console.log( 'this.state.showFormNewAccount --->',this.state.showFormNewAccount)   )
  );



  }

  //------------------------------------------------------ADD NEW ACCOUNT



  onBtnClickAddAcoount(e){
    e.preventDefault();
    // console.log( `this.state.allAccounts is ---> ${this.state.allAccounts}` );
    console.log('this.state.allAccounts is ---> ', this.state.allAccounts);
    console.log(this.state.allAccounts);



    let a = {

      name: ReactDOM.findDOMNode(this.refs.add_new_account_name).value.trim(),

      accounts_coins: ReactDOM.findDOMNode(this.refs.add_new_account_coins).value ?
              parseInt(ReactDOM.findDOMNode(this.refs.add_new_account_coins).value)
              :
              0

    };




    console.log(a);
    console.log(typeof(a));



    let addNewOneAccount = this.state.allAccounts.concat([ a ]);
    console.log(addNewOneAccount);




    this.setState({
      allAccounts: addNewOneAccount
    },
    () => (console.log('this.state.allAccounts is ---> ', this.state.allAccounts))

  );





  // -----------------------------clean our inputs atribute value and set it to empty

  let getInputs = document.getElementsByClassName('add_new_account_inputs');
  // console.log(getInputs);
  // console.log( 'typeof(getInputs)--->', typeof(getInputs));
  // console.log('getInputs.length -----> ', getInputs.length);

  // console.log(getInputs[0].value);
  // console.log(getInputs[1].value);


  for (var i = 0; i < getInputs.length; i++) {
    getInputs[i].value = '';

  }





  this.setState({newAccountNameIsEmpty: true});


  // -----------------------------END of clean our inputs atribute value and set it to empty







  }






//-------------------------------------------------END of ADD NEW ACCOUNT




















































  onBtnShowHideForm(e) {
    e.preventDefault();

    console.log(this);



    this.setState({
      showFormNewCat: this.state.showFormNewCat ? false : true
    }
    , ()  => (console.log( 'this.state.showFormNewCat', this.state.showFormNewCat ) )
  );



  }
  //--------------------- ADD NEW CATEGORY work with refs from form add category



  onBtnClick(e){
    e.preventDefault();

    console.log('this.state.allCategories is ---> ', this.state.allCategories);
    console.log(this.state.allCategories);





    let a = {
      id: ReactDOM.findDOMNode(this.refs.add_new_cat__id).value,
      // name: ReactDOM.findDOMNode(this.refs.add_new_cat__name).value,
      name: ReactDOM.findDOMNode(this.refs.add_new_cat__name).value.trim(),
      image: exercise1,
      transactions: [],
      notes: ReactDOM.findDOMNode(this.refs.add_new_cat__notes).value.trim(),

      // coins: ReactDOM.findDOMNode(this.refs.add_new_cat__coins).value
      coins: ReactDOM.findDOMNode(this.refs.add_new_cat__coins).value ?
              parseInt(ReactDOM.findDOMNode(this.refs.add_new_cat__coins).value)
              :
              0

    };





    console.log(a);
    console.log(typeof(a));





    var addNewCat = this.state.allCategories.concat([ a ]);
    console.log(addNewCat);

    this.setState({
      allCategories: addNewCat
    },
    () => (console.log('this.state.allCategories is ---> ', this.state.allCategories))

  );





  // -----------------------------clean our inputs atribute value and set it to empty



  let getInputs = document.getElementsByClassName('add_new_cat_x');
  console.log(getInputs);



  console.log(getInputs[0].value);
  console.log(getInputs[1].value);
  console.log(getInputs[2].value);
  console.log(getInputs[3].value);


  for (var i = 0; i < getInputs.length; i++) {
    getInputs[i].value = '';

  }



  if ( getInputs[0].value == '') {
    this.setState({
      nameIsEmpty: true,
      idIsEmpty: true
    })
  }


  // -----------------------------END of clean our inputs atribute value and set it to empty




  }
    //--------------------------------- END of  ADD NEW CATEGORY and work with refs


































  //---------------------------------------------- function пошуку для категорій
  catSearch(event) {



      var searchIt = event.target.value.toLowerCase();

      var allCategories = cat.filter( (el) => {
          var searchValue = el.name.toLowerCase();
          return searchValue.indexOf(searchIt) !== -1;
      });

      // check what in allCategories
      console.log(allCategories);


      this.setState({
          allCategories: allCategories
      });



  }
  // ---------------------------------------------------End of catSearch






















  onBtnShowHideTRANSACTION(e) {
    e.preventDefault();

    console.log(this);



    this.setState({
      showFormNewTRANSACTION: this.state.showFormNewTRANSACTION ? false : true
    }
    , ()  => (console.log( 'this.state.showFormNewTRANSACTION', this.state.showFormNewTRANSACTION ) )
  );



  }
  // ------------------------------------------------Add new TRANSACTION
  onBtnTransactionsClick(e) {
    e.preventDefault();






    let stateJSON_T_A = JSON.parse(JSON.stringify(this.state.allCategories));

    console.log('stateJSON_T_A---->', stateJSON_T_A);


    // test
    let filterJSON_T_A = stateJSON_T_A.filter(
      (el) => ( el.name == ReactDOM.findDOMNode(this.refs.select_cat_in_t_a_form).value )
    );

    console.log('filterJSON_T_A ---->',  filterJSON_T_A);

    console.log('filterJSON_T_A[0] ---->',  filterJSON_T_A[0]);


    // filterJSON_T_A[0].coins
    console.log('filterJSON_T_A[0].coins--->', filterJSON_T_A[0].coins);

    filterJSON_T_A[0].coins = filterJSON_T_A[0].coins
    +
    (
      ReactDOM.findDOMNode(this.refs.add_new_t_a_coins).value ?
              parseInt(ReactDOM.findDOMNode(this.refs.add_new_t_a_coins).value)
              :
              0
    );

    console.log('filterJSON_T_A[0].coins--->', filterJSON_T_A[0].coins);



    // push new transactions to array
    console.log('filterJSON_T_A[0].transactions --->', filterJSON_T_A[0].transactions);
    filterJSON_T_A[0].transactions.push(
      {
        t_a_coins:
        (
          ReactDOM.findDOMNode(this.refs.add_new_t_a_coins).value ?
                  parseInt(ReactDOM.findDOMNode(this.refs.add_new_t_a_coins).value)
                  :
                  0
        ),
        notes: ReactDOM.findDOMNode(this.refs.add_new_t_a_note).value.trim(),
        date: ReactDOM.findDOMNode(this.refs.add_new_t_a_date).value
      }
    );
    console.log('filterJSON_T_A[0].transactions --->', filterJSON_T_A[0].transactions);


    console.log('filterJSON_T_A[0] ---->',  filterJSON_T_A[0]);


    console.log('stateJSON_T_A ---> ',stateJSON_T_A);

    let allCategories = stateJSON_T_A.map(
      (e) => {
        if (e.name == filterJSON_T_A[0].name) {
          // console.log(e.name);
           return Object.assign( e, JSON.parse(JSON.stringify(filterJSON_T_A[0])) );
        } else {
          // console.log('nothing found');
          return e
        }
      }
    );







    // prepare data for change this.state.allAccounts
    let stateJSON_ACCOUNT = JSON.parse(JSON.stringify(this.state.allAccounts));
    console.log('stateJSON_ACCOUNT --->', stateJSON_ACCOUNT);

    let filterJSON_ACCOUNT = stateJSON_ACCOUNT.filter(
      (el) => ( el.name == ReactDOM.findDOMNode(this.refs.select_account_in_t_a_form).value )
    );

    console.log('filterJSON_ACCOUNT --->', filterJSON_ACCOUNT);
    console.log('filterJSON_ACCOUNT[0] --->', filterJSON_ACCOUNT[0]);



    console.log('filterJSON_ACCOUNT[0].accounts_coins--> ', filterJSON_ACCOUNT[0].accounts_coins);
    // filterJSON_ACCOUNT[0].accounts_coins
    filterJSON_ACCOUNT[0].accounts_coins = filterJSON_ACCOUNT[0].accounts_coins
    -
    (
      ReactDOM.findDOMNode(this.refs.add_new_t_a_coins).value ?
              parseInt(ReactDOM.findDOMNode(this.refs.add_new_t_a_coins).value)
              :
              0
    );
    console.log('filterJSON_ACCOUNT[0].accounts_coins--> ', filterJSON_ACCOUNT[0].accounts_coins);





    // create new arr for our state
    let allAccounts = stateJSON_ACCOUNT.map(
      (e) => {
        if (e.name == filterJSON_ACCOUNT[0].name) {
          // console.log(e.name);
           return Object.assign( e, JSON.parse(JSON.stringify(filterJSON_ACCOUNT[0])) );
        } else {
          // console.log('nothing found');
          return e
        }
      }
    );

    console.log('allAccounts --->', allAccounts);





    console.log('allCategories ---->', allCategories);

    this.setState({
      allCategories: allCategories,
      allAccounts: allAccounts
    });




    document.getElementsByClassName('add_new_t_a_note')[0].value = '';
    document.getElementsByClassName('add_new_t_a_coins')[0].value = '';










  }

// ------------------------------------------------ END of Add new TRANSACTION

























  render() {

    console.log('this.state.allAccounts ---> ', this.state.allAccounts);



    let nameIsEmpty = this.state.nameIsEmpty;
    let idIsEmpty  = this.state.idIsEmpty;


    let todays = new Date();



    return (
      <div className="categories">
        {/* <h4>Hello from Categories</h4> */}








        {/* component GraphicCharts */}

        <GraphicCharts
          information={this.state.allCategories}
          acc_info={this.state.allAccounts} />

        {/* END of component GraphicCharts */}








        <button
          onClick={this.onBtnClickShowHideADD_DELL}
          >
          ADD | DELL
        </button>

        <div
          className={'editing_apps' + (this.state.showHideAllinputs ? '': ' none') }

          >





                  {/* div for PLUS to CARD */}

                  <PlusToCard
                    plus_to_acccount_Ref={el => this.selectOption = el}
                    plus_to_account_input_Ref={el => this.inputElem = el}

                    allAccounts={this.state.allAccounts}
                    onBtnClickPLUStoCard={this.onBtnClickPLUStoCard} />

                  {/* END of div PLUS to CARD */}















                  {/* div for DELL ACCOUNT */}
                  <div className='top_div_b'>

                    <select
                      // name="select"
                      className='dell_acccount'
                      ref='dell_acccount'
                      >

                      <option value="" disabled selected>Account to DELL</option>
                      {/* <option value="">Value 2</option> */}
                      {/* <option value="">Value 3</option> */}


                    {
                      this.state.allAccounts.map( (elem, k) =>
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




                    <button

                      onClick={this.onBtnClickDellAcc}

                      >
                        DELL ACCOUNT
                    </button>
                  </div>


                  {/*END of div for DELL ACCOUNT */}










                  {/* Form ADD NEW ACCOUNT */}

                  <div className='top_div_c'>

                    <button
                      className='btn_show_hide_form'
                      onClick={this.onBtnShowHideAccountForm}

                      >
                        New ACCOUNT
                    </button>

                    <div
                      className={'add_account' + (this.state.showFormNewAccount ? '': ' none') }
                      >



                      <form className="add_form">


                        <input

                          // value=''
                          type='text'
                          className='add_new_account_inputs'
                          // defaultValue=''
                          placeholder='account name'
                          ref='add_new_account_name'

                          onChange={this.onNameAccountChange}
                        />


                        <input
                          // type='text'
                          type='number'
                          className='add_new_account_inputs'
                          // defaultValue=''
                          placeholder='coins'
                          ref='add_new_account_coins'


                        />


                        <button
                          className='add_new_account_button'
                          onClick={this.onBtnClickAddAcoount}
                          ref='add_new_account_button'
                          disabled={this.state.newAccountNameIsEmpty}
                          >
                            ADD NEW ACCOUNT
                        </button>



                      </form>

                    </div>




                  </div>
                  {/* Form ADD NEW ACCOUNT */}


























                  {/* div for DELL CATEGORY */}
                  <div className="top_div_d">

                    <select
                      // name="select"
                      className='dell_category'
                      ref='dell_category'
                      >

                      <option value="" disabled selected>Select Category</option>
                      {/* <option value="">Value 2</option> */}
                      {/* <option value="">Value 3</option> */}


                    {
                      this.state.allCategories.map( (elem, k) =>
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




                    <button
                      // className='btn_add_new_cat'
                      onClick={this.onBtnClickDellCat}

                      >
                        DELL CATEGORY
                    </button>
                  </div>
                  {/* END of div for DELL CATEGORY */}












                  {/* Form ADD NEW CATEGORY */}

                  <div className='top_div_e'>

                    <button
                      className='btn_show_hide_form'
                      onClick={this.onBtnShowHideForm}
                      // ref='btn_show_hide_form'
                      // disabled={nameIsEmpty}
                      >
                        New Cat
                    </button>
                    {/* <AddCategory info={this.state.allCategories} /> */}
                    <div className={'add_category' + (this.state.showFormNewCat ? '': ' none') }>

                      <h3>Add Your New Category</h3>

                      <form className="add_form">


                        <input

                          // value='aaaaaa'
                          type='text'
                          className='add_new_cat_x'
                          // defaultValue=''
                          placeholder='new category'
                          ref='add_new_cat__name'

                          onChange={this.onNameChange}
                        />

                        <input
                          type='text'
                          className='add_new_cat_x'
                          // defaultValue=''
                          placeholder='id'
                          ref='add_new_cat__id'

                          onChange={this.onIdChange}
                        />

                        <input
                          type='text'
                          className='add_new_cat_x'
                          // defaultValue=''
                          placeholder='notes'
                          ref='add_new_cat__notes'


                        />

                        <input
                          // type='text'
                          type='number'
                          className='add_new_cat_x'
                          // defaultValue=''
                          placeholder='coins'
                          ref='add_new_cat__coins'


                        />











                        <button
                          className='btn_add_new_cat'
                          onClick={this.onBtnClick}
                          ref='btn_add_new_cat'
                          disabled={nameIsEmpty || idIsEmpty }
                          >
                            Add New Category
                        </button>



                      </form>

                    </div>

                  </div>

                  {/* END of FORm ADD NEW CATEGORY */}































                  {/* FORM  NEW TRANSACTION */}


                  <div className="top_div_f">

                    <button
                      // className='btn_show_hide_form'
                      onClick={this.onBtnShowHideTRANSACTION}
                      // ref='btn_show_hide_form'
                      // disabled={nameIsEmpty}
                      >
                        New TRANSACTION
                    </button>

                    <div
                      // className='add_transactions'
                      className={'add_transactions' + (this.state.showFormNewTRANSACTION ? '': ' none') }
                      >

                      <h3> TRANSACTION</h3>

                      <form className="add_new_transactions">

                        <input
                          type='number'
                          className='add_new_t_a_coins'
                          // defaultValue=''
                          placeholder='add amount'
                          ref='add_new_t_a_coins'


                        />




                        <input
                          type='datetime-local'
                          className='add_new_t_a_date'
                          // defaultValue='2017-06-01T08:30'
                          defaultValue={
                              todays.getFullYear() + '-'
                              + (  todays.getMonth() < 10 ? '0' : ''  ) + (todays.getMonth() + 1) + '-'
                              + (  todays.getDate() < 10 ? '0' : ''  ) + todays.getDate() + 'T'
                              + (  todays.getHours() < 10 ? '0' : ''  ) + todays.getHours() + ':'
                              + (  todays.getMinutes() < 10 ? '0' : ''  ) + todays.getMinutes()
                          }


                          // placeholder=''
                          ref='add_new_t_a_date'

                          // value="2017-06-01T08:30"


                        />




                        <select
                          name="select"
                          className='select_cat_in_t_a_form'
                          ref='select_cat_in_t_a_form'
                          >

                          <option value="" disabled selected>Select Category</option>
                          {/* <option value="">Value 2</option> */}
                          {/* <option value="">Value 3</option> */}


                        {
                          this.state.allCategories.map( (el, k) =>
                            (
                              <option
                                key={k}
                                value={el.name}

                                >
                                  {el.name}
                                </option>
                            )
                          )
                        }



                        </select>





                        <input
                          type='text'
                          className='add_new_t_a_note'
                          // defaultValue=''
                          placeholder='Add Note'
                          ref='add_new_t_a_note'


                        />





                        <select
                          name="sel_account"
                          className='select_account_in_t_a_form'
                          ref='select_account_in_t_a_form'
                          >

                          <option value="" disabled selected>Select Account</option>
                          {/* <option value="">Value 2</option> */}
                          {/* <option value="">Value 3</option> */}


                        {
                          this.state.allAccounts.map( (el, k) =>
                            (
                              <option
                                key={k}
                                value={el.name}

                                >
                                  {el.name}
                                </option>
                            )
                          )
                        }



                        </select>







                        <button
                          // className='btn_add_new_cat'
                          onClick={this.onBtnTransactionsClick}
                          // ref='btn_add_new_cat'
                          // disabled={nameIsEmpty || idIsEmpty }
                          >
                            TRANSACTION
                        </button>
                      </form>

                    </div>

                  </div>

                  {/* END of FORM  NEW TRANSACTION */}




                  <input
                    placeholder="search category"
                    type="text"
                    className="search-field"
                    onChange={this.catSearch} />

        </div>







        {/* div all Accounts */}

        <Accounts account_info={this.state.allAccounts} />

        {/* END of div all Accounts */}











        <ul className="categories_list">
          {

            // cat.map( (e, i) =>
            this.state.allCategories.map( (e, i) =>
            (
              <Category
                key={i}
                id={e.id}
                name={e.name}
                image={e.image}
                transactions={e.transactions}
                coins={e.coins}
              />
            )
           )
          }
        </ul>


















      </div>
    );
  }
}

// export default Categories;
