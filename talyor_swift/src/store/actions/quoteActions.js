import axios from 'axios';


export const fetchQuote = () => {
	return (dispatch) => {
		dispatch({ type: 'FETCH_QUOTE_START' });
		axios
			.get('https://api.taylor.rest/')
			.then((res) => {
				
				dispatch({ type: 'FETCH_QUOTE_SUCCESS', payload: res.data.quote });
			})
			.catch((err) => {
				
				dispatch({
					type: 'FETCH_QUOTE_FAILURE',
					payload: `Error ${err.response.status}: ${err.response.data}`,
				});
			});
	};
};
