import { Container, Grid, makeStyles } from '@material-ui/core';
import { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../images/149-1497912_blood-donation-up-donor-darah-logo-png__1_-removebg-preview.png';
import { UserContext } from '../../App';
import {
  initializeFramework,
  resetPassword,
  signInWithEmailAndPassword,
} from './registerManager';

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
    marginTop: '7rem',
    color: '#0E0E0E',
    fontFamily: 'Lato, sans-serif',
    fontWeight: '900',
  },
  labelStyle: {
    display: 'block',
    marginTop: '15px',
  },
  logoStyle: {
    fontFamily: 'Lato, sans-serif',
    fontWeight: '900',
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
    borderRadius: '25px',
    border: 'none',
    backgroundColor: '#D32026',
    color: 'white',
    fontSize: '.875rem',
    marginBottom: '20px',
  },
  linkStyle: {
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#0E0E0E',
  },
  forgetBtn: {
    backgroundColor: 'Transparent',
    border: 'none',
    overflow: 'hidden',
    outline: 'none',
    cursor: 'pointer',
    color: '#6F6F6F',
    fontSize: '.875rem',
    '&:hover': {
      color: '#D32026',
    },
  },
});
const SignIn = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };
  // const [user, setUser] = useState({
  //   signedIn: true,
  //   name: '',
  //   email: '',
  //   password: '',
  //   error: '',
  //   success: false,
  // });

  initializeFramework();
  const { user, setUser, setSignedUser } = useContext(UserContext);

  const handleBlur = (e) => {
    let fieldValid = true;
    if (e.target.name === 'email') {
      fieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }

    if (e.target.name === 'password') {
      const passwordNumber = e.target.value.length > 6;
      const passwordValid = /\d{1}/.test(e.target.value);
      fieldValid = passwordValid && passwordNumber;
    }
    if (fieldValid) {
      const newUser = { ...user };
      newUser[e.target.name] = e.target.value;
      setUser(newUser);
    }
  };

  const handleSubmit = (e) => {
    if (user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password).then((res) => {
        setUser(res);
        setSignedUser(res);
        console.log(user);
        history.push(`/home`);
        // history.replace(from);
      });
    }
    e.target.reset();
    e.preventDefault();
  };

  return (
    <Container style={{ textAlign: 'center' }}>
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item xs={12} sm={6} md={6}>
          <img src={logo} alt='logo' className={classes.image} />
          <h1 className={classes.logoStyle}>
            <span className={classes.red}>Blood </span> Donation
          </h1>
        </Grid>
        <Grid style={{ color: '#6F6F6F' }} item xs={12} sm={6} md={6}>
          <h1 className={classes.headline}>Sign In</h1>
          <form onSubmit={handleSubmit}>
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
          <button
            className={classes.forgetBtn}
            onClick={() => resetPassword(user.email)}
          >
            Forget Password
          </button>
          <p>
            Don't have an account?
            <Link to='/signup' className={classes.linkStyle}>
              SignUp
            </Link>
          </p>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignIn;
