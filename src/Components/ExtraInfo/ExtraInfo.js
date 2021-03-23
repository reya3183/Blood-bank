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
    marginTop: '8rem',
    marginBottom: '1.5rem',
  },
  labelStyle: {
    display: 'block',
    marginTop: '15px',
  },
  inputStyle: {
    padding: '15px 50px',
    borderRadius: '15px',
    border: 'none',
    backgroundColor: '#EDF0F5',
    '&:focus': {
      outline: 'none',
    },
  },
  dateStyle: {
    padding: '13px 70px',
    borderRadius: '15px',
    border: 'none',
    backgroundColor: '#EDF0F5',
    '&:focus': {
      outline: 'none',
    },
  },
  nextStyle: {
    textAlign: 'center',
    padding: '.975rem 8rem',
    borderRadius: '25px',
    border: 'none',
    backgroundColor: '#D32026',
    color: 'white',
    fontSize: '.875rem',
    margin: '2rem 0rem',
    cursor: 'pointer',
  },
  textStyle: {
    marginTop: '3rem',
    fontSize: '1.7rem',
    fontFamily: 'Montserrat, sans-serif',
    color: '#6F6F6F',
  },
});

const ExtraInfo = () => {
  const classes = useStyles();
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();

  const handleBlur = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };
  const handleChange = (e) => {
    const newUser = { ...user };
    newUser.birthdate = e.target.value;
    setUser(newUser);
  };
  const handleSubmit = (e) => {
    console.log(user);
    e.target.reset();
    e.preventDefault();
    history.push(`/start`);
  };
  return (
    <Container style={{ textAlign: 'center' }}>
      <Grid container direction='row' justify='center' alignItems='flex-start'>
        {/* logo and description */}
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img src={logo} alt='logo' className={classes.image} />
          <h1>
            <span className={classes.red}>Blood</span> Donation
          </h1>
          <p className={classes.textStyle}>
            Please provide your <span className={classes.red}>accurate</span>{' '}
            weight and Birth-date{' '}
          </p>
          <p style={{ fontSize: '1.3rem' }} className={classes.textStyle}>
            Minimum weight for donation:{' '}
            <span className={classes.red}>50kg</span>
          </p>
          <p
            style={{ marginTop: '0rem', fontSize: '1.3rem' }}
            className={classes.textStyle}
          >
            Minimum age for donation: <span className={classes.red}>18yrs</span>
          </p>
        </Grid>
        {/* info form */}
        <Grid style={{ color: '#6F6F6F' }} item xs={12} sm={12} md={6} lg={6}>
          <h2 className={classes.headline}>Additional Information</h2>
          <form onSubmit={handleSubmit}>
            <label className={classes.labelStyle}>
              Religion
              <br />
              <input
                type='text'
                name='religion'
                onBlur={handleBlur}
                className={classes.inputStyle}
                required
              />
            </label>
            <label className={classes.labelStyle}>
              Weight
              <br />
              <input
                type='text'
                name='weight'
                onBlur={handleBlur}
                className={classes.inputStyle}
                required
              />
            </label>
            <label className={classes.labelStyle}>
              Date of Birth
              <br />
              <input
                type='date'
                name='birthdate'
                onChange={handleChange}
                className={classes.dateStyle}
                min='1960-01-01'
                max='2022-12-31'
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
        {/*end info form */}
      </Grid>
    </Container>
  );
};

export default ExtraInfo;
