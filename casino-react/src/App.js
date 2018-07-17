import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import {Button, Well} from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import './App.css';

class App extends Component {

  constructor(props) {
        super(props);
        this.state = {
            casino:'T',
            minBetD:0,
            minBetT:0,
            minBetE:0,

            bet19to36: 0,
            bet1to18: 0,
            betBlack: 0,
            betDozen1: 0,
            betDozen2: 0,
            betDozen3: 0,
            betEven: 0,
            betNumbers:[],
            betOdd: 0,
            betRed: 0,
            betRow1: 0,
            betRow2: 0,
            betRow3: 0,

            numRed:0,
            numBlack:0,
            num1to18:0,
            num19to36:0,
            numOdd:0,
            numEven:0,
            numRow1:0,
            numRow2:0,
            numRow3:0,
            numDozen1:0,
            numDozen2:0,
            numDozen3:0,
            minLosses:0,
            maxBet :0,
            history:[],
            money:0,

            test:10,
        }

    this.handleChange = this.handleChange.bind(this);
    this.handleTestChange = this.handleTestChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitTest = this.handleSubmitTest.bind(this);
    this.createNewGame = this.createNewGame.bind(this);

 }

  createNewGame(){
      axios.get( "http://localhost:3001/auth/jgtamura/roulette/restart").then(response => {
            console.log(response.data);
            this.setState({casino: response.data.casinoName, minBetD:response.data.minBetDouble,
                            minBetT:response.data.minBetTriple, minBetE:response.data.minBetEach});
          })
  }


  handleChange(event) {
   this.setState({value: event.target.value});
 }

 handleTestChange (event) {
    this.setState({ test: event.target.value });
  }

  handleSubmitTest(event) {
    console.log("Llega a handle event"+this.state.test);
      for(var i=0;i<parseInt(this.state.test);i++){
        var randomNum =  Math.floor(Math.random() * Math.floor(38));
        if(randomNum === 37){
          randomNum = '00';
        }
        axios.get( "http://localhost:3001/auth/jgtamura/roulette/addNumber/"+randomNum+"/111").then(response => {
              console.log(response);
              this.setState({bet19to36: response.data.bet19to36, bet1to18:response.data.bet1to18,
                             betBlack:response.data.betBlack, betRed:response.data.betRed,
                             betEven: response.data.betEven, betOdd:response.data.betOdd,
                             betDozen1: response.data.betDozen1, betDozen2:response.data.betDozen2,betDozen3:response.data.betDozen3,
                             betRow1: response.data.betRow1, betRow2:response.data.betRow2,betRow3:response.data.betRow3,
                             betNumbers: response.data.betNumbers,

                             num19to36: response.data.num19to36, num1to18:response.data.num1to18,
                             numBlack:response.data.numBlack, numRed:response.data.numRed,
                             numEven: response.data.numEven, numOdd:response.data.numOdd,
                             numDozen1: response.data.numDozen1, numDozen2:response.data.numDozen2,numDozen3:response.data.numDozen3,
                             numRow1: response.data.numRow1, numRow2:response.data.numRow2,numRow3:response.data.numRow3,
                             history: response.data.history,

                             minLosses:response.data.minLosses, maxBet :response.data.maxBet,money:response.data.money});
              this.forceUpdate();
            })
      }
    event.preventDefault();
  }
 handleSubmit(event) {
   if(parseInt(this.state.value) <= 36 &&  parseInt(this.state.value) >= 0){
     axios.get( "http://localhost:3001/auth/jgtamura/roulette/addNumber/"+this.state.value+"/111").then(response => {
           console.log(response);
           this.setState({bet19to36: response.data.bet19to36, bet1to18:response.data.bet1to18,
                          betBlack:response.data.betBlack, betRed:response.data.betRed,
                          betEven: response.data.betEven, betOdd:response.data.betOdd,
                          betDozen1: response.data.betDozen1, betDozen2:response.data.betDozen2,betDozen3:response.data.betDozen3,
                          betRow1: response.data.betRow1, betRow2:response.data.betRow2,betRow3:response.data.betRow3,
                          betNumbers: response.data.betNumbers,

                          num19to36: response.data.num19to36, num1to18:response.data.num1to18,
                          numBlack:response.data.numBlack, numRed:response.data.numRed,
                          numEven: response.data.numEven, numOdd:response.data.numOdd,
                          numDozen1: response.data.numDozen1, numDozen2:response.data.numDozen2,numDozen3:response.data.numDozen3,
                          numRow1: response.data.numRow1, numRow2:response.data.numRow2,numRow3:response.data.numRow3,
                          history: response.data.history,

                          minLosses:response.data.minLosses, maxBet :response.data.maxBet,money:response.data.money});
           this.forceUpdate();
         })
   }
   else{
     alert("Incorrect. Must be a number between 0 and 36");
   }

   event.preventDefault();
 }



  render() {
    if(this.state.casino === 'T'){
      this.createNewGame();
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Casino T</h1>
        </header>
        {/**<h2 >Current location: {this.state.casino}</h2>
        <Button  onClick={() => {this.updateMinBetDoubles()}}>Update value</Button>*/}
        <row className="row">
          <h2 className="alignCenter">Min bet for doubles: {this.state.minBetD} </h2>
          <h2 className="alignCenter">Min bet for triples: {this.state.minBetT}</h2>
          <h2 className="alignCenter">Min bet individual: {this.state.minBetE} </h2>
          <h2 className="alignCenter">Money: {this.state.money} </h2>
        </row>


        <div>
          <br></br><br></br><br></br><br></br>
          <h2>Bets:</h2>
            <div>
            {this.state.history.length <= 10 &&
              <h1>You must enter at least 11 numbers to beggin</h1>}
            {this.state.bet19to36 !== 0 &&
              <h3>bet19to36: {this.state.bet19to36}</h3>}
            {this.state.bet1to18 !== 0 &&
              <h3>bet1to18: {this.state.bet1to18}</h3>}
            {this.state.betBlack !== 0 &&
                <h3>betBlack: {this.state.betBlack}</h3>}
            {this.state.betRed !== 0 &&
                <h3>betRed: {this.state.betRed}</h3>}
            {this.state.betOdd !== 0 &&
                <h3>betOdd: {this.state.betOdd}</h3>}
            {this.state.betEven !== 0 &&
                <h3>betEven: {this.state.betEven}</h3>}
            {this.state.betDozen1 !== 0 &&
                <h3>betDozen1: {this.state.betDozen1}</h3>}
            {this.state.betDozen2 !== 0 &&
                <h3>betDozen2: {this.state.betDozen2}</h3>}
            {this.state.betDozen3 !== 0 &&
                <h3>betDozen3: {this.state.betDozen3}</h3>}
            {this.state.betRow1 !== 0 &&
                <h3>betRow1: {this.state.betRow1}</h3>}
            {this.state.betRow2 !== 0 &&
                <h3>betRow2: {this.state.betRow2}</h3>}
            {this.state.betRow3 !== 0 &&
                <h3>betRow3: {this.state.betRow3}</h3>}

            {this.state.history.length > 10 &&
              <h3>Bet Numbers:{(this.state.betNumbers+"").split("").splice(0, 78)}</h3>}

            </div>
        </div>

        <form onSubmit={this.handleSubmit}>
          <label>
            New number:
            <input className="space" type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <div>
          <br></br><br></br><br></br><br></br>
          <h2>Statistics</h2>

          <h3 className="alignCenter">num1to18: {this.state.num1to18}</h3>
          <h3 className="alignCenter">num19to36: {this.state.num19to36}</h3>
          <h3 className="alignCenter">numBlack: {this.state.numBlack}</h3>
          <h3 className="alignCenter">numRed: {this.state.numRed}</h3>
          <h3 className="alignCenter">numOdd: {this.state.numOdd}</h3>
          <h3 className="alignCenter">numEven: {this.state.numEven}</h3>
          <h3 className="alignCenter">numDozen1: {this.state.numDozen1}</h3>
          <h3 className="alignCenter">numDozen2: {this.state.numDozen2}</h3>
          <h3 className="alignCenter">numDozen3: {this.state.numDozen3}</h3>
          <h3 className="alignCenter">numRow1: {this.state.numRow1}</h3>
          <h3 className="alignCenter">numRow2: {this.state.numRow2}</h3>
          <h3 className="alignCenter">numRow3: {this.state.numRow3}</h3>
          <h3 className="alignCenter">Min losses: {this.state.minLosses}</h3>
          <h3 className="alignCenter">Max Bet: {this.state.maxBet}</h3>

          <h3 className="alignCenter">History:{(this.state.history+"").split("")}</h3>

        </div>

        <form onSubmit={this.handleSubmitTest}>
          <label>Test:
          <input type="text" name="test" onChange={this.handleTestChange} /></label>
          <input type="submit" value="Submit" />
        </form>


      </div>
    );
  }
}

export default App;
