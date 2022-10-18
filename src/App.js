import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CartPage from './components/pages/CartPage';
import CreateProductPage from './components/pages/CreateProductPage';
import HomePage from './components/pages/HomePage';
import SignInPage from './components/pages/SignInPage';
import UserPage from './components/pages/UserPage';
import UserRegistrationPage from './components/pages/UserRegistrationPage';
import ShoppingCartContextProvider from './context/shoppingCartContext';
import CustomThemeProvider from './CustomThemeProvider';
import store from './redux-state/store';
import './resetStyles.css';

function App() {
  return (
    <Provider store={store}>
      <CustomThemeProvider>
        <ShoppingCartContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/user" element={<UserPage />} />
              <Route path="/sign-in" element={<SignInPage />} />
              <Route path="/register-user" element={<UserRegistrationPage />} />
              <Route path="/create-product" element={<CreateProductPage />} />
              <Route
                path="/cart"
                element={(
                  <CartPage />
                  )}
              />
            </Routes>
          </BrowserRouter>
        </ShoppingCartContextProvider>
      </CustomThemeProvider>
    </Provider>
  );
}

export default App;
