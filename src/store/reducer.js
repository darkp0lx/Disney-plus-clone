export const initialState = {
  user: null,
  favorites: [],
  films: []
}

export const actionTypes = {
  ADD_DATA: 'ADD_DATA',
  ADD_FAVORITES: 'ADD_FAVORITES',
  DELETE_FAVORITES: 'DELETE_FAVORITES',
  SET_USER: 'SET_USER'
}

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user
      }
    case actionTypes.ADD_DATA:
      return {
        ...state,
        films: action.films
      }
    case actionTypes.ADD_FAVORITES:
      const exist = state.favorites.find(item => item?.id == action.favorite.id)
      if (exist) {
        return {
          ...state
        }
      } else {
        return {
          ...state,
          favorites: [...state.favorites, action.favorite]
        }
      }

    case actionTypes.DELETE_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(item => item !== action.favorite)
      }
    default:
      return state
  }
}
export default reducer
