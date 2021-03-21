import { Card, Container, Grid, makeStyles } from '@material-ui/core';
import { useContext } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar';

const useStyles = makeStyles({
  headline: {
    color: '#0E0E0E',
    fontFamily: 'Lato, sans-serif',
    fontSize: '1.5rem',
    marginBottom: '1.5rem',
  },
  publishStyle: {
    float: 'right',
    cursor: 'pointer',
    textAlign: 'center',
    padding: '10px 30px',
    borderRadius: '25px',
    border: 'none',
    backgroundColor: '#D32026',
    color: 'white',
    fontSize: '.875rem',
    margin: '20px 0px',
  },
  textAreaStyle: {
    marginLeft: '30px',
    borderRadius: '15px',
    border: 'none',
    fontSize: '1.5rem',
    backgroundColor: 'transparent',
    '&:focus': {
      outline: 'none',
    },
  },
});

const FeedBack = () => {
  const classes = useStyles();
  const { user, setUser } = useContext(UserContext);
  const handleBlur = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };
  const handleSubmit = (e) => {
    console.log(user);
    e.preventDefault();
    e.target.reset();
  };
  return (
    <div style={{ backgroundColor: '#F6F7F9' }}>
      <Container>
        <Grid container spacing={2}>
          <Grid
            item
            xs={3}
            style={{
              backgroundColor: 'white',
              textAlign: 'center',
              paddingTop: '3rem',
            }}
          >
            <Sidebar></Sidebar>
          </Grid>
          <Grid
            style={{
              marginTop: '3rem',
              padding: '3rem',
            }}
            item
            xs={9}
          >
            <form style={{ width: '25rem' }} onSubmit={handleSubmit}>
              <h3 className={classes.headline}>Give Your Valuable Reviews!</h3>
              <Card>
                <textarea
                  name='feedback'
                  cols='30'
                  rows='5'
                  onBlur={handleBlur}
                  className={classes.textAreaStyle}
                  required
                />
              </Card>
              <br />
              <input
                type='submit'
                value='Publish'
                className={classes.publishStyle}
              />
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default FeedBack;
