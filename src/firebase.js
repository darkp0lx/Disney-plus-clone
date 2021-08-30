// Firebase App (the core Firebase SDK) is always required and must be listed first
import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider } from 'firebase/auth'
import { FacebookAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCgABTo35R9uI2fCUjzbj2rIqkLXtwT0yc',
  authDomain: 'disney-plus-e2b53.firebaseapp.com',
  projectId: 'disney-plus-e2b53',
  storageBucket: 'disney-plus-e2b53.appspot.com',
  messagingSenderId: '545720646970',
  appId: '1:545720646970:web:c7b087511af740f586a403'
}
const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
const providerFacebook = new FacebookAuthProvider()

export { firebaseApp, provider, providerFacebook }
