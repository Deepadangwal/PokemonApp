import React,{useContext} from 'react';
import {MyContext} from '../../App.js'
import pokemons from '../../pokemons.json'

const SearchBar = () => {
	const {myPokemons,setPokemons} =useContext(MyContext)
	const Search=(event)=>{
		setPokemons([...pokemons.filter(item=>item.name.includes(event.target.value))])
	}
	return (
		<div>
			<div className="search">
				<input type="text" onChange={Search} placeholder="Search your favourite pokemon" />
			</div>
		</div>
	);
};

export default SearchBar;
