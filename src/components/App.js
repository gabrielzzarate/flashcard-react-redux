import React from 'react';
import Sidebar from './Sidebar';
import Toolbar from './Toolbar';
import { connect } from 'react-redux';

/* react "pure" component */

const mapStateToProps = (props, { params: { deckId } }) => ({
	deckId
});
const App = ({ deckId, children }) => {
	return (<div className='app'>
			<Toolbar deckId={deckId} />
			<Sidebar />
			<h1>Deck {deckId}</h1>
			{children}
		</div>);
};

export default connect(mapStateToProps)(App);
