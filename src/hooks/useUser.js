import { actionTypes } from '../store/reducer'
import { useStateValue } from '../store/StateProvider'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider
} from 'firebase/auth'

import { provider, providerFacebook } from '../firebase'

export const useUser = () => {
  const [{ user }, dispatch] = useStateValue()

  const signInGmail = () => {
    const auth = getAuth()
    signInWithPopup(auth, provider)
      .then(result => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        const user = result.user
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        const email = error.email
        const credential = GoogleAuthProvider.credentialFromError(error)
      })
    dispatch({
      type: actionTypes.SET_USER,
      user: auth.currentUser
    })
  }
  const signInFacebook = () => {
    const auth = getAuth()
    signInWithPopup(auth, providerFacebook)
      .then(result => {
        const user = result.user

        const credential = FacebookAuthProvider.credentialFromResult(result)
        const accessToken = credential.accessToken

        // ...
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        const email = error.email
        const credential = FacebookAuthProvider.credentialFromError(error)

        // ...
      })
    dispatch({
      type: actionTypes.SET_USER,
      user: auth.currentUser
    })
  }

  return {
    user,
    signInGmail,
    signInFacebook
  }
}
