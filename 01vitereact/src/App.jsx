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

import Toast from './components/Toast.jsx'
import BasicEffect from './components/BasicEffect.jsx'
import CounterEffect from './components/CounterEffect.jsx'
import ComponentA from './Context/ComponentA.jsx'
import ComponentC from './Context/ComponentC.jsx'
import ComponentB from './Context/ComponentB.jsx'
import {ComponentsContext} from './UserContext.jsx'
const ValidPassword =() => <h1>Valid Password</h1>
const InvalidPassword =() => <h1>Invalid Password</h1>

const Password = ({ isValid }) => {
    return isValid ? <ValidPassword /> : <InvalidPassword /> 
}




function App() {
  const name = "Aman Yadav"
  
  return (
<>
  {/* <Password isValid={true} /> ,
  <Weather />
  <Cart />
  <UserStatus />
  <Greeting timeofday={"morning"} />
  {/* <StyleCard /> */}
  {/* <ProfileCard />

  <IconComponent  />
  <EventDemo  /> */}
  <BasicEffect  />
  <CounterEffect />

  <ComponentsContext.Provider value={name}>
    <ComponentA/>
  </ComponentsContext.Provider>
  


</>
  )
}

export default App
