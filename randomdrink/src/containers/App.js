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
    const { drink, 
            alcoholic, 
            glass,
            instructions,
            ingredient1,
            ingredient2,
            ingredient3,
            ingredient4,
            ingredient5,
            ingredient6,
            ingredient7,
            ingredient8,
            ingredient9,
            ingredient10,
            ingredient11,
            ingredient12,
            ingredient13,
            ingredient14,
            ingredient15,
            measure1,
            measure2,
            measure3,
            measure4,
            measure5,
            measure6,
            measure7,
            measure8,
            measure9,
            measure10,
            measure11,
            measure12,
            measure13,
            measure14,
            measure15,
            image
          } = this.state;
    return (
      <div className='tc f3 bckgrnd white'>
        <div className='f1 pa1 lobster'>{drink}</div>
        <img className='h5 pa2 b--black dib br3 ma2 grow bw2 shadow-5' alt='drink' src={image}/>
        <div>
          <h1 className='roboto'>Type:</h1> 
          <p>{alcoholic}</p>
        </div>
        <div>
          <h1 className='roboto'>Glass:</h1>
          <p>{glass}</p>
        </div>
        <div>
          <h1 className='roboto'>Instructions:</h1> 
          <p>{instructions}</p>
        </div>
        <div>
        <h1 className='roboto'>Ingredients:</h1>
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
