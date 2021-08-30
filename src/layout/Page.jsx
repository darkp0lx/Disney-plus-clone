import { Header } from '../components/Header/Header'
import { Footer } from '../components/Home/Footer'
import { useStateValue } from '../store/StateProvider'
import { Login } from './Login'
export function Page ({ children }) {
  const [{ user }, dispatch] = useStateValue()
  console.log(user, 'userdd')
  return (
    <>
      {!user ? (
        <>
          <Header />
          {children}
          <Footer />
        </>
      ) : (
        <Login />
      )}
    </>
  )
}
