import {combineReducers} from 'redux';

const sweetsReducer = () => {
    return[
        { name: 'Nutella' , price: '4 JOD'},
        { name: 'Mars' , price: '2 JOD'},
        { name: 'bounty' , price: '3 JOD'},
        { name: 'twix' , price: '1 JOD'}
    ];
};

const selectedSweetsReducer = (selectedSweets= null, action) => {
    if(action.type==='SWEETS_SELECTED'){
        return action.payload;
    }
    return selectedSweets;
};

export default combineReducers({
    sweets: sweetsReducer,
    selectedSweets: selectedSweetsReducer
});