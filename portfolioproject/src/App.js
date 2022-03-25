import logo from './logo.svg';
import './App.css'
import MenuApp from './components/MenuItem';
import Menu from './components/MenuItem';
import MenuItem from './components/MenuItem';
import stylesheet from './components/stylesheet';
import { Component } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react'
import './style.css'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' />
      </Switch>
    </Router>
    </>
  );
}

class App extends Component {
  render() {
    return(
      <div className='App'>
          <Stylesheet primary={false}/>
      </div>
    )
  }
}

const data =
  [
    {
      "menuName": "Dinner",
      "menuItems": [
        {
          "itemId": 1,
          "itemPrice": "12",
          "itemName": "Lasagne",
          "itemDescription": "Meat and cheese layered between house-made pasta with bell peppers and onions."
        },
        {
          "itemId": 2,
          "itemPrice": "10",
          "itemName": "Cheese Ravioli",
          "itemDescription": "Cheese-filled ravioli served with house red sauce."
        },
        {
          "itemId": 3,
          "itemPrice": "14",
          "itemName": "Chicken Parmesan",
          "itemDescription": "Breaded chicken topped with marinara sauce and lots of cheese served over house made spaghetti."
        }
      ]
    },
    {
      "menuName": "Dessert",
      "menuItems": [
        {
          "itemId": 45,
          "itemPrice": "10",
          "itemName": "Chocolate Lava Cake",
          "itemDescription": "Dark chocolate molten lava cake. Serves 2-3."
        },
        {
          "itemId": 47,
          "itemPrice": "8",
          "itemName": "Tiramisu",
          "itemDescription": "Layers of espresso-soaked ladyfingers and marscarpone cream topped with cocoa and espresso powder."
        },
        {
          "itemId": 49,
          "itemPrice": "5",
          "itemName": "Cannolis",
          "itemDescription": "Three flaky pastries enclosing a rich, ricotta filling dotted with decadent chocolate chips."
        },
        {
          "itemId": 50,
          "itemPrice": "5",
          "itemName": "Cappuccino",
          "itemDescription": "Steamed milk with two ristretto shots of espresso."
        }
      ]
    }
  ]
  


function App() {
  //let menuItem = data [0].menuItems[0]
  return (
    <MenuApp data={data} /> 
  );
}

export default App;


