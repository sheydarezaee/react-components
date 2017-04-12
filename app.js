// STEP ONE 

// var GroceryList = () => (
//   <div>
//     <h2>My Grocery List</h2>
//     <GroceryListItem />
//   </div>
// );


// STEP TWO 
// var GroceryListItem = (props) => (
//   <ul>
//     <li>{props.groceryItems[0]}</li>
//     <li>{props.groceryItems[1]}</li>
//     <li>{props.groceryItems[2]}</li>
//   </ul>
// );

// var GroceryList = () => (
//   <div>
//     <h2>My Grocery List</h2>
//     <GroceryListItem groceryItems={['cucumber', 'kale', 'apple']}/> 
//   </div>
// );



// STEP THREE 


// var GroceryListItem = (props) => {


//  var onListItemCLick = (event) => {
//  	console.log('yes');
//  }


// return(
//   <ul>
//     <li onClick={onListItemCLick}>{props.groceryItems[0]}</li>
//     <li>{props.groceryItems[1]}</li>
//     <li>{props.groceryItems[2]}</li>
//   </ul>
//   );
// }

// // STEP FOUR 
// var App = () => (
//   <div>
//     <h2>My Grocery List</h2>
//     <GroceryList groceryItems={['cucumber', 'kale', 'apple']}/> 
//   </div>
// );

// class GroceryListItem extends React.Component {
//   constructor (props) {
//    super(props);
//   }
//   render() {
//   	return (
//   	  <li>{this.props.groceryItem}</li>
//     );
//   }
// }

// var GroceryList = (props) => (
//   <ul>
//     {props.groceryItems.map((groceryItem) => 
//       <GroceryListItem groceryItem={groceryItem} />
//     )}
//   </ul>
//   ); 

// STEP FIVE:

var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList groceryItems={['cucumber', 'kale', 'apple']}/> 
  </div>
);

class GroceryListItem extends React.Component {
  constructor (props) {
   super(props);
   this.state = {
      done: false
   };
  }
  onListItemHover (){
    this.setState({
      done: !this.state.done
    });
}

  render() {
  	var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

  	return (
  	  <li style = {style} onMouseEnter= {this.onListItemHover.bind(this)}>{this.props.groceryItem}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map((groceryItem) => 
      <GroceryListItem groceryItem={groceryItem} />
    )}
  </ul>
); 


ReactDOM.render(<App />, document.getElementById('app'));







































