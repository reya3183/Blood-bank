import { Container, Grid, makeStyles } from '@material-ui/core';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';
import './BloodGroup.css';
import logo from '../../images/149-1497912_blood-donation-up-donor-darah-logo-png__1_-removebg-preview.png';
const useStyles = makeStyles({
  image: {
    height: 'auto',
    maxWidth: '150px',
    marginTop: '7rem',
  },
  red: {
    color: '#D32026',
  },
  headline: {
    color: '#0E0E0E',
    fontFamily: 'Lato, sans-serif',
    fontSize: '2rem',
    marginTop: '7rem',
  },
  textStyle: {
    marginTop: '3rem',
    fontSize: '1.5rem',
    fontFamily: 'Montserrat, sans-serif',
    color: '#6F6F6F',
  },
  inputStyle: {
    display: 'none',
  },
  groupName: {
    cursor: 'pointer',
    width: '3.5rem',
    height: '3.5rem',
    display: 'inline-block',
    border: '3px solid #D32026',
    borderRadius: '50%',
    margin: '10px',
    padding: '15px 0px',
  },
  nextStyle: {
    textAlign: 'center',
    padding: '.975rem 8rem',
    borderRadius: '25px',
    border: 'none',
    backgroundColor: '#D32026',
    color: 'white',
    fontSize: '.875rem',
    margin: '1.8rem 0px',
  },
  formStyle: {
    margin: '20px auto',
    maxWidth: '18rem',
  },
});

const BloodGroup = () => {
  const classes = useStyles();
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);
  const handleClick = (e) => {
    const newUser = { ...user };
    newUser.bloodGroup = e.target.value;
    setUser(newUser);
  };
  const handleSubmit = (e) => {
    e.target.reset();
    e.preventDefault();
    console.log(user);
    history.push(`/contact`);
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
            Your blood group need to be{' '}
            <span className={classes.red}>accurate</span>! If you don't know
            about it, please contact nearest clinic.
          </p>
        </Grid>
        {/* blood groups */}
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <h2 className={classes.headline}>What's Your Blood Group</h2>
          <form className={classes.formStyle} onSubmit={handleSubmit}>
            <label>
              <input
                className={classes.inputStyle}
                type='radio'
                name='myRadios'
                onClick={handleClick}
                value='A+'
              />
              <span className={classes.groupName}>A+</span>
            </label>
            <label>
              <input
                className={classes.inputStyle}
                type='radio'
                name='myRadios'
                onClick={handleClick}
                value='A-'
              />
              <span className={classes.groupName}>A-</span>
            </label>
            <label>
              <input
                className={classes.inputStyle}
                type='radio'
                name='myRadios'
                onClick={handleClick}
                value='B+'
              />
              <span className={classes.groupName}>B+</span>
            </label>
            <label>
              <input
                className={classes.inputStyle}
                type='radio'
                name='myRadios'
                onClick={handleClick}
                value='B-'
              />
              <span className={classes.groupName}>B-</span>
            </label>
            <label>
              <input
                className={classes.inputStyle}
                type='radio'
                name='myRadios'
                onClick={handleClick}
                value='O+'
              />
              <span className={classes.groupName}>O+</span>
            </label>
            <label>
              <input
                className={classes.inputStyle}
                type='radio'
                name='myRadios'
                onClick={handleClick}
                value='O-'
              />
              <span className={classes.groupName}>O-</span>
            </label>
            <label>
              <input
                className={classes.inputStyle}
                type='radio'
                name='myRadios'
                onClick={handleClick}
                value='AB+'
              />
              <span className={classes.groupName}>AB+</span>
            </label>
            <label>
              <input
                className={classes.inputStyle}
                type='radio'
                name='myRadios'
                onClick={handleClick}
                value='AB-'
              />
              <span className={classes.groupName}>AB-</span>
            </label>
            <input className={classes.nextStyle} type='submit' value='Next' />
          </form>
        </Grid>
        {/*end blood groups */}
      </Grid>
    </Container>
  );
};

export default BloodGroup;
