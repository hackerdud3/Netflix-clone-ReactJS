import React from 'react';
import './App.css';
import Header from './Header'
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';


function App() {
	return (
		 <Router>
			
		<div className="app">
		   <Route path="/home">
			<Header/>
			</Route>
			<Route path ="/login">
				<Login/>
			</Route>
		 <Switch> 
		<Route path="/main">  
			<Nav />
			<Banner />
			<Row title="NETFLIX ORIGINALS" isLargeRow fetchUrl={requests.fetchNetflixOriginals} />
			<Row title="Trending" fetchUrl={requests.fetchTrending} />
			<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
			<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
			<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
		 </Route> 
		</Switch>	     
		</div>
		</Router>
	);
}

export default App;
