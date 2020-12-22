import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isAddRecipeFormDisplayed: false,
      recipes: [],
      newRecipeName: ""
    }
  }

  toggleAddRecipeForm = () => {
    this.setState(
      { isAddRecipeFormDisplayed: !this.state.isAddRecipeFormDisplayed }
    );
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    // name = 'newRecipeInstructions' OR 'newRecipeName'

    this.setState({
      [name]: value,
    })
  }

  submitRecipe = (e) => {
    e.preventDefault();

    if (this.state.newRecipeName !== "") {
      this.state.recipes.push({
        name: this.state.newRecipeName,
        instructions: this.state.newRecipeInstructions,
      })

    this.setState({newRecipeName: ""})
    this.toggleAddRecipeForm()
    }
  }

  render() {
    const addNewRecipeForm = <form id="recipe-form" onSubmit={this.submitRecipe}>
      <label htmlFor="newRecipeName">Recipe name: </label>
      <input type="text" name="newRecipeName" onChange={this.handleChange} />
      <label htmlFor="newRecipeInstructions">Instructions: </label>
      <textarea name="newRecipeInstructions" placeholder="write recipe instructions here..." onChange={this.handleChange} />
      <input type="submit" />
    </form>

    const addRecipeButton = <button id="add-recipe" onClick={this.toggleAddRecipeForm}>Add Recipe</button>

    return (
      <div className="App" >
        <header className="App-header">
          My Recipes
        </header>
        {
          this.state.isAddRecipeFormDisplayed
            ? addNewRecipeForm
            : addRecipeButton
        }
        {
          this.state.recipes !== undefined &&
            this.state.recipes.length > 0
            ? <ul>
              { this.state.recipes.map(recipe => {
                  return <li key={recipe.name}>{recipe.name}</li>
                })
              }
            </ul>
            : <p>There are no recipes to list.</p>
        }
      </div>
    );
  }
}

export default App;
