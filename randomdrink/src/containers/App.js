import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      drink: null
    };
  }

  componentDidMount() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(data => this.setState({ drink: data.drinks[0].strDrink
       + " | "
       + "Glass: " 
       + data.drinks[0].strGlass }));
  }

  render() {
    const { drink } = this.state;
    return (
      <div>
        <div>Drink: {drink}</div>
      </div>
    );
  }
}

// class App extends Component {
//   state = {
//     loading: true,
//     drink: null
//   };

//   componentDidMount() {
//     const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
//     const response = fetch(url);
//     const data = response.json();
//     this.setState({ drink: data.results[1], loading: false });
//   }

//   render() {
//     return (
//       <div>
//         {this.state.loading || !this.state.drink ? (
//           <div>loading...</div>
//         ) : (
//           <div>
//             <div>{this.state.drink.strDrink}</div>
//             <img src={this.state.drink.strDrinkThumb}/>
//           </div>
//         )}
//         </div>
//       )
//   }
// }


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src='https://images.unsplash.com/photo-1570716893556-8cae2e541ba8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80' className="App-logo" alt="logo" />
//         <Card />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
