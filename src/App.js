import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CartPage from './components/pages/CartPage';
import HomePage from './components/pages/HomePage';
import SignInPage from './components/pages/SignInPage';
import ShoppingCartContextProvider from './context/shoppingCartContext';
import UserContextProvider from './context/userContext';
import CustomThemeProvider from './CustomThemeProvider';
import './resetStyles.css';

function App() {
  return (
    <CustomThemeProvider>
      <UserContextProvider>
        <ShoppingCartContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/user" element={<SignInPage />} />
              <Route
                path="/cart"
                element={(
                  <CartPage />
                )}
              />
            </Routes>
          </BrowserRouter>
        </ShoppingCartContextProvider>
      </UserContextProvider>
    </CustomThemeProvider>
  );
}

export default App;
