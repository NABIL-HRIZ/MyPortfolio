const initialState = {
    activeNav: 'home'
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ACTIVE_NAV':
        return { ...state, activeNav: action.payload };
      default:
        return state;
    }
  };
  
  export default reducer;
  