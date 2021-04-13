const SIDE_MENU_OPEN = 'sideMenu/SIDE_MENU_OPEN';
const SIDE_MENU_CLOSE = 'sideMenu/SIDE_MENU_CLOSE';

export const sideMenuOpen = () => ({ type: SIDE_MENU_OPEN });
export const sideMenuClose = () => ({ type: SIDE_MENU_CLOSE });

const initialState = {
  open: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIDE_MENU_OPEN:
      return {
        open: true
      };
    case SIDE_MENU_CLOSE:
      return {
        open: false
      };
    default:
      return state;
  }
};

export default reducer;
