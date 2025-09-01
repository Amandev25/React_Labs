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
function App() {
  

  return (
<div>
     <Person name="John Doe" age={30} />
     <Product name="Laptop" price={999.99} />
</div>
  )
}

export default App
