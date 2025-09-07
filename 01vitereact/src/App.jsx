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
import StyleCard from './StyleCard.jsx'
import ProfileCard  from '../ProfileCard.jsx'
import IconComponent from './components/IconComponent.jsx'
import EventDemo from './components/EventDemo.jsx'
import Counter from './Counter.jsx'
import TodoList from './TodoList.jsx'
import Profile from './profile.jsx'
import ShoppingList from './ShoppingList.jsx'
import Other from './other.jsx'
import MyPortal from './components/MyPortal.jsx'
import Toast from './components/Toast.jsx'
import {useState} from 'react';
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
   const [isToastVisible, setIsToastVisible] = useState(false);

  return (
<section>
  {/* <Password isValid={true} /> ,
  <Weather />
  <Cart />
  <UserStatus />
  <Greeting timeofday={"morning"} />
  {/* <StyleCard /> */}
  {/* <ProfileCard />

  <IconComponent  />
  <EventDemo  /> */}
  

<MyPortal>
  <h2> Hello! I'm Being rendered In the portal-root div!!</h2>
</MyPortal>
     <h1>Toast Notification Example</h1>
      <p>Click the button below to show a message.</p>

      {/* Disable the button while the toast is visible to prevent spamming */}
      <button onClick={() => setIsToastVisible(true)} disabled={isToastVisible}>
        Show Toast
      </button>

      {/* We use conditional rendering to show the Toast component */}
      {isToastVisible && (
        <Toast onClose={() => setIsToastVisible(false)}>
          Success! Your action was completed. ✅
        </Toast>
      )}
  
</section>
  )
}

export default App
