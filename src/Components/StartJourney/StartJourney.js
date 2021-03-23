import { Button, Container, Grid, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router';

import logo from '../../images/149-1497912_blood-donation-up-donor-darah-logo-png__1_-removebg-preview.png';
const useStyles = makeStyles({
  image: {
    height: 'auto',
    maxWidth: '9rem',
    marginTop: '8rem',
  },
  red: {
    color: '#D32026',
  },
  nextStyle: {
    cursor: 'pointer',
    textAlign: 'center',
    padding: '.975rem 8rem',
    borderRadius: '25px',
    border: 'none',
    backgroundColor: '#D32026',
    color: 'white',
    fontSize: '.875rem',
    margin: '2rem 0rem',
    '&:hover,&:focus': {
      backgroundColor: '#D32026',
      color: 'white',
    },
  },
});
const StartJourney = () => {
  const classes = useStyles();
  const history = useHistory();
  const handleClick = () => {
    history.push('/home');
  };
  return (
    <Container style={{ textAlign: 'center' }}>
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          {/* logo */}
          <img src={logo} alt='logo' className={classes.image} />
          <h1>
            <span className={classes.red}>Blood</span> Donation
          </h1>

          <Button
            onClick={handleClick}
            className={classes.nextStyle}
            type='submit'
          >
            Start Journey
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default StartJourney;
