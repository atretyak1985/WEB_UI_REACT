import React, { Component } from 'react';


export class GraphicCharts extends Component {


  constructor(props) {
    super(props);
    this.state = {
      xShowHideChart: false
    };
  }




  onBtnxShowHideChartClick(e) {
    e.preventDefault();

    this.setState({
      xShowHideChart: this.state.xShowHideChart ? false : true
    }
    , () => ( console.log('this.state.xShowHideChart ---->', this.state.xShowHideChart) )

    );


  } // END of onBtnxShowHideChartClick





  onBtnShowChartsClick(e) {
    e.preventDefault();









    const CHARTS_BARS = document.getElementById("charts_bars");
    console.log('CHARTS_BARS -----> ', CHARTS_BARS);

    const CHARTS_TORT = document.getElementById("charts_tort");
    console.log('CHARTS_TORT -----> ', CHARTS_TORT);


    console.log('this.props.information ----->', this.props.information );





  //----------------------------------------- info for CATEGORY pie chart

  let propsJson = JSON.parse(JSON.stringify(this.props.information));
  console.log('propsJson ---> ', propsJson);

  // let chartLabels = [];
  // let chartData = [];

  let chartLabels = propsJson.map( i => i.name );
  let chartData = propsJson.map( i => i.coins );

  // let chartLabels = this.props.information.map( i => i.name );
  // let chartData = this.props.information.map( i => i.coins );
  console.log('chartLabels----> ', chartLabels);
  console.log('chartData-------> ', chartData);


  //----------------------------END of info for CATEGORY pie chart








  //------------------------------------- info for ACCOUNTS bar chart

  let props_Account_Json = JSON.parse(JSON.stringify(this.props.acc_info));
  console.log('props_Account_Json ---> ', props_Account_Json);

  // let chartLabels = [];
  // let chartData = [];

  let chartLabelsAccounts = props_Account_Json.map( i => i.name );
  let chartDataAccounts = props_Account_Json.map( i => i.accounts_coins );

  // let chartLabels = this.props.information.map( i => i.name );
  // let chartData = this.props.information.map( i => i.coins );
  console.log('chartLabelsAccounts----> ', chartLabelsAccounts);
  console.log('chartDataAccounts-------> ', chartDataAccounts);




  //------------------------------------- END of info for ACCOUNTS bar chart







  let xChartsBars = new Chart(CHARTS_BARS, {
                  type: 'bar',
                  data: {
                      // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                      labels: chartLabelsAccounts,

                      datasets: [{
                          label: '# ',
                          data: chartDataAccounts,
                          backgroundColor: [
                              'rgba(255, 99, 132, 0.2)',
                              'rgba(54, 162, 235, 0.2)',
                              'rgba(255, 206, 86, 0.2)',
                              'rgba(75, 192, 192, 0.2)',
                              'rgba(153, 102, 255, 0.2)',
                              'rgba(255, 159, 64, 0.2)'
                          ],
                          borderColor: [
                              'rgba(255,99,132,1)',
                              'rgba(54, 162, 235, 1)',
                              'rgba(255, 206, 86, 1)',
                              'rgba(75, 192, 192, 1)',
                              'rgba(153, 102, 255, 1)',
                              'rgba(255, 159, 64, 1)'
                          ],
                          borderWidth: 1
                      }]
                  },
                  options: {
                      scales: {
                          yAxes: [{
                              ticks: {
                                  beginAtZero:true
                              }
                          }]
                      }
                  }
                });






    let xChartsTort = new Chart(CHARTS_TORT,{
                    type: 'pie',
                    data: {
                        // labels: [
                        //     "Red",
                        //     "Blue",
                        //     "Yellow"
                        // ],
                        labels: chartLabels,

                        datasets: [
                            {
                                // data: [300, 50, 100],
                                data: chartData,
                                backgroundColor: [
                                    "#FF6384",
                                    "#36A2EB",
                                    "#FFCE56",

                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                hoverBackgroundColor: [
                                    "#FF6384",
                                    "#36A2EB",
                                    "#FFCE56",

                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ]
                            }]
                    },
                    // options: options
                });









  } // END of onBtnShowChartsClick()






























  render() {




    return (
      <div>
        {/* <h4>Hello from GraphicCharts</h4> */}

        <button
          onClick={this.onBtnShowChartsClick.bind(this)}
          >
            UPDATE CHARTS
        </button>

        <button
          onClick={this.onBtnxShowHideChartClick.bind(this)}
          >
          CHARTS SHOW | HIDE
        </button>





        <div className={'div_canvas_a' + (this.state.xShowHideChart ? '' : ' none') }>
          <div
            // className={ (this.state.xShowHideChart ? '' : 'none') }
            >
            <canvas
              id="charts_bars"
              width="400"
              height="400">

              </canvas>
          </div>

          <div
            // className={ (this.state.xShowHideChart ? 'none' : '') }
            >
            <canvas
              id="charts_tort"
              width="400"
              height="400">

              </canvas>
          </div>
        </div>

      </div>
    );
  }
}
