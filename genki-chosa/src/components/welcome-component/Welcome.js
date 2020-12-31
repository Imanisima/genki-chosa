import React from 'react';
import {Button} from '../button-component/Button';
import {Link} from 'react-router-dom';

import './Welcome.css';

function Welcome() {

	return (
		<div className="welcome-container">
			<h2>Genki Review</h2>
            <p>Which resource would you like to study from? </p>
            
			<div className="welcome-btns">
				<Link to="/genki1">
					<Button className="btns" buttonStyle="btn--primary" button-size="btn--large">GENKI 1 <i className="fas fa-feather-alt"/> </Button>
				</Link>

				<Link to="/genki2">
					<Button className="btns" buttonStyle="btn--outline" button-size="btn--large">GENKI 2 <i className="fas fa-feather-alt"/> </Button>
				</Link>

			</div>
			
		</div>
	);
}

export default Welcome;