import React from 'react';
import './Pokemon.css';

import { Card } from 'react-bootstrap';
const Pokemon = (props) => {
	const about = props.details;
	return (
		<div>
			<div className="card">
				<Card>
					<Card.Img variant="top" src={about.image} />
					<Card.Body>
						<Card.Title>{about.name}</Card.Title>
						{Object.entries(about['base']).map((item) => <p>{`${item[0]}:${item[1]}`}</p>)}
					</Card.Body>
				</Card>
			</div>
		</div>
	);
};

export default Pokemon;
