import { Box, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signOut } from '../../redux-state/userSlice';
import Axios from '../../utils/Axios';
import Layout from '../layout/Layout';

function UserPage() {
  const [error, setError] = useState();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [favoriteProducts, setFavoriteProducts] = useState();

  useEffect(() => {
    if (!user) {
      navigate('/sign-in');
    }
  });

  // Fetch the user favorite products
  useEffect(() => {
    if (user) {
      Axios.get('/user-favorites')
        .then((response) => setFavoriteProducts(response.data.userFavorites));
    }
  }, [user]);

  if (!user) {
    return 'redirecting';
  }

  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      await Axios.get('/sign-out');
      dispatch(signOut());
      setError(undefined);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <Layout>
      {error && <Box><Typography>{error}</Typography></Box>}
      <Box mb={4}>
        <Typography>
          Hi
          {' '}
          {user.firstName}
          !
        </Typography>
      </Box>
      <Box>
        <Button variant="contained" onClick={handleSignOut}>Sign out</Button>
      </Box>
      {favoriteProducts && favoriteProducts.map((product) => (
        <Box>
          <Box><Typography>{product.title}</Typography></Box>
          <Box><Typography>{product.price}</Typography></Box>
        </Box>
      ))}
    </Layout>
  );
}

export default UserPage;
