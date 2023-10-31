import { Link, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import BlogPage from "./pages/BlogPage"
import ContactPage from "./pages/ContactPage"
import NotFound from "./pages/NotFound"
import ProductsPage from "./pages/ProductsPage"
import ProductDetailPage from "./pages/ProductDetailPage"
import EffectSample from "./effect/EffectSample"
import EffectDependency from "./effect/EffectDependency"
import CategoryPage from "./apiOperations/CategoryPage"
import CustomersPage from "./apiOperations/CustomersPage"
import CustomerDetailPage from "./apiOperations/CustomerDetailPage"
import AddCategory from "./apiOperations/AddCategory"

function App() {


  // return <EffectDependency/>

  return <>
    <nav>
      <ul style={{display:'flex', justifyContent:'space-between'}}>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/categories'>Categories</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/customers'>Customers</Link></li>
        <li><Link to='/addcategory'>Add Category</Link></li>

        {/* <li><a href="/products">Products - 2</a></li>
        <li><a href="/effectsample">Effect Sample</a></li> */}



      </ul>
    </nav>

    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/products" element={<ProductsPage/>} />
        <Route path="/effectsample" element={<EffectSample/>} />
        <Route path="/categories" element={<CategoryPage/>} />
        <Route path="/customers" element={<CustomersPage/>} />
        <Route path="/customers/:id" element={<CustomerDetailPage/>} />
        <Route path="/addcategory" element={<AddCategory/>} />

        {/* :id url içerisindeki parametreyi temsil eder */}
        <Route path="/products/:id" element={<ProductDetailPage/>} />
        <Route path="*" element={<NotFound/>} />
    </Routes>


    <footer>Site Footer</footer>
  </>

}

export default App