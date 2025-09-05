import Footer from './components/Footer.jsx'
import Greet from './components/Greet.jsx'
import Header from './components/Header.jsx'
import List from './components/list.jsx'
import List02 from './components/list02.jsx'
import MainContent from './components/MainContent.jsx'
import Person from './components/Person.jsx'
import ProductList from './components/ProductList.jsx'
import WelcomeMessage from './components/WelcomeMessage.jsx'
import Product from './components/Product.jsx'
import Test from './test.jsx'
import Weather from './components/Weather.jsx'
import UserStatus from './components/UserStatus.jsx'
import Greeting from './components/Greeting.jsx'

const ValidPassword =() => <h1>Valid Password</h1>
const InvalidPassword =() => <h1>Invalid Password</h1>

const Password = ({ isValid }) => {
    return isValid ? <ValidPassword /> : <InvalidPassword /> 
}

const Cart = () => {

  const items = ["wireless Earbuds" , "Bluetooth Speaker" , "Smartphone"]

  return (
    <div>
      <h2>Cart 🛒</h2>
      {items.length > 0 && <p>You have {items.length} items in your cart.</p>}
   
    <ul>
      <h3>Products</h3>
      {items.map((item ) => (
        <li key = {Math.random()}>
          {item}
        </li>
      ))}
    </ul>
   
   
   
   
    </div>
      
  )
}


function App() {
  

  return (
<section>
  <Password isValid={true} /> ,
  <Weather />
  <Cart />
  <UserStatus />
  <Greeting timeofday={"morning"} />
</section>
  )
}

export default App
