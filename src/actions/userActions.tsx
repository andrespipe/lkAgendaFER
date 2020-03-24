
export const getUser = () => (dispatch) => {
  dispatch({
    type: 'get_user',
    payload: {
      sessionId: 'sessionId',
      userEmail: 'userEmail',
      userId: 'userId',
    }
  });
};
