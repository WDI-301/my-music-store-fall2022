import {
  Box, Button, TextField, Typography,
} from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { sampleUserData } from '../../mockData';
import { signIn, signOut } from '../../redux-state/userSlice';
import Axios from '../../utils/Axios';
import Layout from '../layout/Layout';

function SignInPage() {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const [error, setError] = useState();
  console.log('error: ', error);

  const [signInForm, setSignInForm] = useState({
    email: '',
    password: '',
  });

  const onSubmit = async () => {
    // call the back end with the credentials data
    const response = await Axios.post('/sign-in', { credentials: signInForm });

    // insert the response user into the state
    const fetchedUser = response.data.user;

    dispatch(signIn(fetchedUser));
  };

  const handleSignOut = async () => {
    try {
      await Axios.get('/sign-out');
      dispatch(signOut());
      setError(undefined);
    } catch (e) {
      setError(e.message);
    }
  };

  if (user) {
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
      </Layout>
    );
  }

  return (
    <Layout>
      {error && <Box><Typography>{error}</Typography></Box>}
      <Box mb={4}>
        <Typography>Sign In</Typography>
      </Box>
      <Box mb={4}>
        <TextField
          id="email"
          label="Email"
          value={console.log('signInForm.email: ', signInForm.email) || signInForm.email}
          onChange={(event) => setSignInForm({ ...signInForm, email: event.target.value })}
        />
      </Box>
      <Box mb={4}>
        <TextField
          id="password "
          label="Password"
          type="password"
          value={signInForm.password}
          onChange={(event) => setSignInForm({ ...signInForm, password: event.target.value })}
        />
      </Box>
      <Box>
        <Button variant="contained" onClick={onSubmit}>Sign In</Button>
      </Box>
      <Box py={2}>
        <Link to="/register-user">
          <Typography sx={{ textDecoration: 'underline' }}>
            Register new account
          </Typography>
        </Link>
      </Box>
    </Layout>
  );
}

export default SignInPage;
