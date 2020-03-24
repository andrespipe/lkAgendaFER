import { StoreState } from '../types';

const INITIAL_STATE: StoreState.User = {
    sessionId: '',
    userEmail: '',
    userId: '',
};

const user = (state: StoreState.User = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'get_user':
      return {...state, user: action.payload };
    
    default: return state;
  }
}

export default user;
