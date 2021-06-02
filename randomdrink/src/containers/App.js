import React, { Component } from 'react';
import './App.css';
import Button from '../components/button';


class App extends Component {
  constructor() {
    super()
    this.state = {
      drink: null,
      alcoholic: null,
      glass: null,
      instructions: null,
      ingredient1: null,
      ingredient2: null,
      ingredient3: null,
      ingredient4: null,
      ingredient5: null,
      ingredient6: null,
      ingredient7: null,
      ingredient8: null,
      ingredient9: null,
      ingredient10: null,
      ingredient11: null,
      ingredient12: null,
      ingredient13: null,
      ingredient14: null,
      ingredient15: null,
      measure1: null,
      measure2: null,
      measure3: null,
      measure4: null,
      measure5: null,
      measure6: null,
      measure7: null,
      measure8: null,
      measure9: null,
      measure10: null,
      measure11: null,
      measure12: null,
      measure13: null,
      measure14: null,
      measure15: null,
      image: null
    };
  }

  componentDidMount() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(data => this.setState({ drink: data.drinks[0].strDrink, 
      alcoholic: data.drinks[0].strAlcoholic, 
      glass: data.drinks[0].strGlass,
      instructions: data.drinks[0].strInstructions,
      ingredient1: data.drinks[0].strIngredient1,
      ingredient2: data.drinks[0].strIngredient2,
      ingredient3: data.drinks[0].strIngredient3,
      ingredient4: data.drinks[0].strIngredient4,
      ingredient5: data.drinks[0].strIngredient5,
      ingredient6: data.drinks[0].strIngredient6,
      ingredient7: data.drinks[0].strIngredient7,
      ingredient8: data.drinks[0].strIngredient8,
      ingredient9: data.drinks[0].strIngredient9,
      ingredient10: data.drinks[0].strIngredient10,
      ingredient11: data.drinks[0].strIngredient11,
      ingredient12: data.drinks[0].strIngredient12,
      ingredient13: data.drinks[0].strIngredient13,
      ingredient14: data.drinks[0].strIngredient14,
      ingredient15: data.drinks[0].strIngredient15,
      measure1: data.drinks[0].strMeasure1,
      measure2: data.drinks[0].strMeasure2,
      measure3: data.drinks[0].strMeasure3,
      measure4: data.drinks[0].strMeasure4,
      measure5: data.drinks[0].strMeasure5,
      measure6: data.drinks[0].strMeasure6,
      measure7: data.drinks[0].strMeasure7,
      measure8: data.drinks[0].strMeasure8,
      measure9: data.drinks[0].strMeasure9,
      measure10: data.drinks[0].strMeasure10,
      measure11: data.drinks[0].strMeasure11,
      measure12: data.drinks[0].strMeasure12,
      measure13: data.drinks[0].strMeasure13,
      measure14: data.drinks[0].strMeasure14,
      measure15: data.drinks[0].strMeasure15,
      image: data.drinks[0].strDrinkThumb
    }));
  }

  render() {
    const { drink } = this.state;
    const { alcoholic } = this.state;
    const { glass } = this.state;
    const { instructions } = this.state;
    const { ingredient1 } = this.state;
    const { ingredient2 } = this.state;
    const { ingredient3 } = this.state;
    const { ingredient4 } = this.state;
    const { ingredient5 } = this.state;
    const { ingredient6 } = this.state;
    const { ingredient7 } = this.state;
    const { ingredient8 } = this.state;
    const { ingredient9 } = this.state;
    const { ingredient10 } = this.state;
    const { ingredient11 } = this.state;
    const { ingredient12 } = this.state;
    const { ingredient13 } = this.state;
    const { ingredient14 } = this.state;
    const { ingredient15 } = this.state;
    const { measure1 } = this.state;
    const { measure2 } = this.state;
    const { measure3 } = this.state;
    const { measure4 } = this.state;
    const { measure5 } = this.state;
    const { measure6 } = this.state;
    const { measure7 } = this.state;
    const { measure8 } = this.state;
    const { measure9 } = this.state;
    const { measure10 } = this.state;
    const { measure11 } = this.state;
    const { measure12 } = this.state;
    const { measure13 } = this.state;
    const { measure14 } = this.state;
    const { measure15 } = this.state;
    const { image } = this.state;
    return (
      <div className='tc f3 bckgrnd white'>
        <div className='f1'>{drink}</div>
        <img className='h5 pa2 b--black dib br3 ma2 grow bw2 shadow-5' alt='drink' src={image}/>
        <div>
          <h4>Type:</h4> 
          <p>{alcoholic}</p>
        </div>
        <div>
          <h4>Glass:</h4>
          <p>{glass}</p>
        </div>
        <div>
          <h2>Instructions:</h2> 
          <p>{instructions}</p>
        </div>
        <div>
        <h2>Ingredients:</h2>
          <ul>
        <li>{ingredient1} - {measure1}</li>
        <li>{ingredient2} - {measure2}</li>
        <li>{ingredient3} - {measure3}</li>
        <li>{ingredient4} - {measure4}</li>
        <li>{ingredient5} - {measure5}</li>
        <li>{ingredient6} - {measure6}</li>
        <li>{ingredient7} - {measure7}</li>
        <li>{ingredient8} - {measure8}</li>
        <li>{ingredient9} - {measure9}</li>
        <li>{ingredient10} - {measure10}</li>
        <li>{ingredient11} - {measure11}</li>
        <li>{ingredient12} - {measure12}</li>
        <li>{ingredient13} - {measure13}</li>
        <li>{ingredient14} - {measure14}</li>
        <li>{ingredient15} - {measure15}</li>
          </ul> 
        </div>
        <div>
        <Button></Button>
        </div>
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
