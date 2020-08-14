import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { fetchQuote } from '../store/actions/quoteActions';
import { Card, CardImage, CardText, CardBody, CardTitle, Button } from 'reactstrap';

const KanyeQuote = (props) => {
	useEffect(() => {
		// call an action creator
		props.fetchQuote();
	}, []);

	
	return (
		<div>
            <Card  style={{ width: '40%', margin: '10%', marginLeft: '30%', padding: '20px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'  }}>
                <CardText>
                
			<h1>Taylor Swift Qoutes: </h1>

			{props.isFetching && (
				<Loader type="Hearts" color="#DB7093" height={100} width={100} />
			)}

		
			{props.quote && <h3>"{props.quote}"</h3>}

			{props.error && <p className="error">{props.error}</p>}
            </CardText>

			<Button style={{ width: '40%', marginLeft: '30%', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', background: '#FF0000'  }} onClick={props.fetchQuote}>Fetch A New Quote</Button>
            </Card>
		</div>
	);
};


const mapStateToProps = (state) => {
	console.log(state);
	return {
		quote: state.quotes.quote,
		isFetching: state.quotes.isFetching,
		error: state.quotes.error,
	};
};

export default connect(
	mapStateToProps,
	{ fetchQuote },
)(KanyeQuote);
