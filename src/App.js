import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CartPage from './components/pages/CartPage';
import HomePage from './components/pages/HomePage';
import SignInPage from './components/pages/SignInPage';
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
              <Route path="/user" element={<SignInPage />} />
              <Route path="/register-user" element={<UserRegistrationPage />} />
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
