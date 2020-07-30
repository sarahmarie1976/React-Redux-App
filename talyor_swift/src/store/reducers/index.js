import { combineReducers } from 'redux'; // this will combine all reducers if there is more then one
import { quotesReducer as quotes } from './quotesReducer';


export default combineReducers({
	quotes,
});
