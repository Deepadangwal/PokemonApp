import React from 'react';

const SearchBar = () => {
	return (
		<div>
			<div className="search">
				<input onChange={this.handleSearch} type="text" placeholder="Search your favourite pokemon" />
			</div>
		</div>
	);
};

export default SearchBar;
