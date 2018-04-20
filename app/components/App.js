var React = require('react');
var Popular = require('./Popular');
var {BrowserRouter, Route, Switch} = require('react-router-dom');
var Nav = require('./Nav');
var Home = require('./Home');
var Battle = require('./Battle');
var Results = require('./Results');

class App extends React.Component {

	render() {
		return (

			<BrowserRouter>

				<div className="container">
					<Nav/>

					<Switch>
						<Route exact path='/' component={Home}/>
						<Route exact path='/battle' component={Battle}/>
						<Route exact path='/battle/results' component={Results}/>
						<Route path='/popular' component={Popular}/>
						<Route render={function () {
							return <p>Not found</p>
						}}/>
					</Switch>

				</div>

			</BrowserRouter>
		)
	}

}

module.exports = App;