import React from 'react';
import './Container.css';
import { Row, Col } from 'react-bootstrap';
import pokemons from './pokemons.json';
import Header from './Components/Header/Header';
import Pokemon from './Components/Card/Pokemon';
import SearchBar from './Components/SearchBar/SearchBar';
class Container extends React.Component {
	state = {
		searchItem: ''
	};
	handleSearch = (e) => {
		this.setState({ searchItem: e.target.value });
	};
	render() {
		if (this.state.searchItem !== '') {
			return (
				<div>
					<Header />
					<SearchBar />
					<Row>
						{pokemons.filter((item) => item.name.includes(this.state.searchItem)).map((item) => (
							<Col lg={2}>
								<Pokemon details={item} />
							</Col>
						))}
					</Row>
				</div>
			);
		} else {
			return (
				<div>
					<div className="search">
						<h4>POKEMONPEDIA</h4>
						<input onChange={this.handleSearch} type="text" placeholder="Search your favourite pokemon" />
					</div>
					<Row>
						{pokemons.map((item) => (
							<Col lg={2}>
								<Pokemon details={item} />
							</Col>
						))}
					</Row>
				</div>
			);
		}
	}
}

export default Container;
