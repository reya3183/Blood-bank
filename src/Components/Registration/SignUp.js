import React, { useContext, useState } from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import { UserContext } from '../../App';
import logo from '../../images/149-1497912_blood-donation-up-donor-darah-logo-png__1_-removebg-preview.png';
import {
  createUserWithEmailAndPassword,
  initializeFramework,
} from './registerManager';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
  image: {
    height: 'auto',
    maxWidth: '300px',
    marginTop: '8rem',
  },
  red: {
    color: '#D32026',
  },
  headline: {
    color: '#0E0E0E',
  },
  labelStyle: {
    display: 'block',
    marginTop: '15px',
  },
  inputStyle: {
    padding: '15px 40px',
    borderRadius: '15px',
    border: 'none',
    backgroundColor: '#EDF0F5',
    '&:focus': {
      outline: 'none',
    },
  },
  loginStyle: {
    textAlign: 'center',
    padding: '15px 110px',
    borderRadius: '15px',
    border: 'none',
    backgroundColor: '#D32026',
    color: 'white',
    fontSize: '.875rem',
    marginBottom: '20px',
  },
});
const SignUp = () => {
  const classes = useStyles();
  initializeFramework();

  const { user, setUser } = useContext(UserContext);
  const [createUser, setCreateUser] = useState(true);
  const history = useHistory();
  // const [user, setUser] = useState({
  //   signedIn: true,
  //   name: '',
  //   email: '',
  //   error: '',
  //   success: false,
  // });

  const handleBlur = (e) => {
    let fieldValid = true;
    if (e.target.name === 'email') {
      fieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === 'password') {
      const passwordNumber = e.target.value.length > 6;
      const passwordValid = /\d{1}/.test(e.target.value);
      fieldValid = passwordNumber && passwordValid;
    }
    if (fieldValid) {
      const newUser = { ...user };
      newUser[e.target.name] = e.target.value;
      setUser(newUser);
    }
  };

  const handleSubmit = (e) => {
    if (createUser && user.email && user.password) {
      createUserWithEmailAndPassword(user.name, user.email, user.password).then(
        (res) => {
          setUser(res);
          history.push(`/group`);
        }
      );
    }
    e.preventDefault();
  };

  return (
    <Container style={{ textAlign: 'center' }}>
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item xs={12} sm={6} md={6}>
          <img src={logo} alt='logo' className={classes.image} />
          <h1>
            <span className={classes.red}>Blood</span> Donation
          </h1>
        </Grid>
        <Grid style={{ color: '#6F6F6F' }} item xs={12} sm={6} md={6}>
          <h2 className={classes.headline}>Let's know about Yourself</h2>
          <form onSubmit={handleSubmit}>
            <label className={classes.labelStyle}>
              Name
              <br />
              <input
                type='text'
                name='name'
                onBlur={handleBlur}
                className={classes.inputStyle}
                required
              />
            </label>
            <label className={classes.labelStyle}>
              Email
              <br />
              <input
                type='email'
                name='email'
                onBlur={handleBlur}
                className={classes.inputStyle}
                required
              />
            </label>
            <label className={classes.labelStyle}>
              Password
              <br />
              <input
                type='password'
                name='password'
                onBlur={handleBlur}
                className={classes.inputStyle}
                required
              />
            </label>
            <br />
            <input
              className={classes.loginStyle}
              type='submit'
              value='Login'
            ></input>
          </form>
          <p style={{ color: 'red' }}>{user.error}</p>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUp;
