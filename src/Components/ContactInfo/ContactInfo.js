import { Container, Grid, makeStyles } from '@material-ui/core';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';
import logo from '../../images/149-1497912_blood-donation-up-donor-darah-logo-png__1_-removebg-preview.png';
const useStyles = makeStyles({
  image: {
    height: 'auto',
    maxWidth: '150px',
    marginTop: '3rem',
  },
  red: {
    color: '#D32026',
  },
  headline: {
    color: '#0E0E0E',
    fontFamily: 'Lato, sans-serif',
    fontSize: '1.8rem',
    marginTop: '3rem',
  },
  labelStyle: {
    display: 'block',
    marginTop: '15px',
  },
  inputStyle: {
    padding: '10px 50px',
    borderRadius: '15px',
    border: 'none',
    backgroundColor: '#EDF0F5',
    '&:focus': {
      outline: 'none',
    },
  },
  nextStyle: {
    textAlign: 'center',
    padding: '15px 110px',
    borderRadius: '15px',
    border: 'none',
    backgroundColor: '#D32026',
    color: 'white',
    fontSize: '.875rem',
    marginBottom: '20px',
  },
  textStyle: {
    marginTop: '3rem',
    fontSize: '1.8rem',
    fontFamily: 'Montserrat, sans-serif',
    color: '#6F6F6F',
  },
});

const ContactInfo = () => {
  const classes = useStyles();
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();

  const handleBlur = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    history.push(`/extra`);
  };

  return (
    <Container style={{ textAlign: 'center' }}>
      <Grid container direction='row' justify='center' alignItems='flex-start'>
        <Grid item xs={12} sm={6} md={6}>
          <img src={logo} alt='logo' className={classes.image} />
          <h1>
            <span className={classes.red}>Blood</span> Donation
          </h1>
          <p className={classes.textStyle}>
            Please provide your <span className={classes.red}>available</span>{' '}
            contact No and additional information of your{' '}
            <span className={classes.red}>Present</span> address.
          </p>
        </Grid>
        <Grid style={{ color: '#6F6F6F' }} item xs={12} sm={6} md={6}>
          <h2 className={classes.headline}>Contact Information</h2>
          <form onSubmit={handleSubmit}>
            <label className={classes.labelStyle}>
              Contact No
              <br />
              <input
                type='text'
                name='contact'
                onBlur={handleBlur}
                className={classes.inputStyle}
                required
              />
            </label>
            <label className={classes.labelStyle}>
              Alternative Contact No
              <br />
              <input
                type='text'
                name='alternate'
                onBlur={handleBlur}
                className={classes.inputStyle}
                required
              />
            </label>
            <label className={classes.labelStyle}>
              Union
              <br />
              <input
                type='text'
                name='union'
                onBlur={handleBlur}
                className={classes.inputStyle}
                required
              />
            </label>
            <label className={classes.labelStyle}>
              Post Office
              <br />
              <input
                type='text'
                name='post'
                onBlur={handleBlur}
                className={classes.inputStyle}
                required
              />
            </label>
            <label className={classes.labelStyle}>
              Police Station
              <br />
              <input
                type='text'
                name='station'
                onBlur={handleBlur}
                className={classes.inputStyle}
                required
              />
            </label>
            <label className={classes.labelStyle}>
              District
              <br />
              <input
                type='text'
                name='district'
                onBlur={handleBlur}
                className={classes.inputStyle}
                required
              />
            </label>
            <br />
            <input
              className={classes.nextStyle}
              type='submit'
              value='Next'
            ></input>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactInfo;
