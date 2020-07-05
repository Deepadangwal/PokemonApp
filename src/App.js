import React, { useState,createContext } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Pokemon from './Components/Card/Pokemon';
import SearchBar from './Components/SearchBar/SearchBar';
import pokemons from './pokemons.json';
import { Row, Col } from 'react-bootstrap';
import FilterSideBar from './Components/Filter/FilterSideBar';
export const MyContext = createContext(null)
function App() {
	const [ myPokemons, setPokemons ] = useState(pokemons);
	return (
		<MyContext.Provider value={{myPokemons,setPokemons}}>
		<div className="App">
			<Header />
			<SearchBar />
			<div>
				<Row>
					<Col sm={12} lg={9}>
						<Row>
							{myPokemons.map((item) => (
								<Col lg={3} xs={12} sm={6} md={4}>
									<Pokemon details={item} />
								</Col>
							))}
						</Row>
					</Col>
					<Col lg={3}>
						<FilterSideBar />
					</Col>
				</Row>
			</div>
		</div>
		</MyContext.Provider>
	);
}

export default App;
