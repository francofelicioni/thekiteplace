import { BrowserRouter, Routes, Route } from "react-router-dom";
import Announcement from "../components/Announcement";
import Cart from "../components/Cart";
import CartContextProvider from "../components/CartContext";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import ItemDetailContainer from "../components/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import ScrollToTop from "../components/ScrollToTop";


        function Home() {
          return (
              <CartContextProvider>
              <BrowserRouter>
              <ScrollToTop />
                  <Announcement/>
                  <Navbar/>
                  <Routes>
                      <Route path ='/' element={<ItemListContainer/>} />
                      <Route path='/category/:idCategory' element={<ItemListContainer />}/>
                      <Route path='/item/:idItem' element={<ItemDetailContainer />}/>
                      <Route path='/cart' element={<Cart/>}/>
                  </Routes>
                  <Categories/>
                  <Newsletter/>
                  <Footer/>
              </BrowserRouter>
              </CartContextProvider>
          )
        }

        export default Home;