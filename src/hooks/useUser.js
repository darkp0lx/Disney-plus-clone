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
  const SignInFacebook = () => {
    const auth = getAuth()
    signInWithPopup(auth, providerFacebook)
      .then(result => {
        // The signed-in user info.
        const user = result.user

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result)
        const accessToken = credential.accessToken

        // ...
      })
      .catch(error => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.email
        // The AuthCredential type that was used.
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
    SignInFacebook
  }
}
