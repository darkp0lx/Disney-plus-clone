import { actionTypes } from '../store/reducer'
import { useStateValue } from '../store/StateProvider'

export const useFavorites = film => {
  const [{ favorites }, dispatch] = useStateValue()

  const AddToFavorites = () => {
    dispatch({
      type: actionTypes.ADD_FAVORITES,
      favorite: film
    })
  }
  const DeleteToFavorites = () => {
    dispatch({
      type: actionTypes.DELETE_FAVORITES,
      favorite: film
    })
  }
  const isFavorite = () => {
    const isFavorite = favorites.find(movie => movie.id === film.id)
    return isFavorite ? true : false
  }

  return {
    favorites,
    AddToFavorites,
    DeleteToFavorites,
    isFavorite
  }
}
