import React from 'react';
import Header from './component/header/header';
// import hearor from './component/heroesection/hearor';
// import product1 from './component/products/product1';
// import product2 from './component/prducts/product2';
import footer from './component/footer/footer';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
	render () {
  return (
	<Router>
    <div className="App">
	 <Header />
	 <Switch>
	 {/* <Route path="/" component={Hearor} /> */}
	
	 </Switch>
	 {/* <hearor /> */}
	 {/* <product1 /> */}
	 {/* <product2 /> */}
	 <footer />
    </div>
	</Router>
  );
}
}
export default App;
