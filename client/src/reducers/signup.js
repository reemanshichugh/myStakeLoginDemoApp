export default (state = {}, action) => {
    switch (action.type) {
        
     case 'SIMPLE_ACTION':
        const credentials = action.payload;
        console.log(credentials, 'credentialscredentialscredentials')
      return {
        ...state, 
        credentials,
      }
     default:
      return state
    }
   }

//  import { fromJS } from 'immutable';
// // import { SET_TRUSTEE_ATTACHEDPDF_STATUS } from '../constants';

// const initialState = fromJS({
//  email: '',
// });

// function emailReducer(state = initialState, action) {
//  switch (action.type) {
//    case "SIMPLE_ACTION":
//      return state
//        .set('email', action.email);
//    default:
//      return state;
//  }
// }

// export default emailReducer;