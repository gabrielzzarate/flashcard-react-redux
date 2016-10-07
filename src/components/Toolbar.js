import React from 'react';
import { showAddDeck } from '../actions';
import { Link } from 'react-router';
import { connect } from 'react-router';

const Toolbar = ({ showAddDeck }) => {
	return (<div className='toolbar'>
		<div>
			<button onClick={showAddDeck}> + New Deck </button>
		</div>
	</div>);
};
