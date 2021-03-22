import { makeStyles, Paper, Container, Grid } from '@material-ui/core';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Loading from '../Loading/Loading';
import Sidebar from '../Sidebar/Sidebar';
const useStyles = makeStyles({
  paperStyle: {
    maxWidth: '13rem',
    padding: '20px',
    margin: '1rem 2rem',
  },
  details: {
    padding: '5px 8px',
    border: 'none',
    borderRadius: '15px',
    color: 'white',
    cursor: 'pointer',
    backgroundColor: '#D32026',
  },
  group: {
    color: '#D32026',
    fontWeight: 'bold',
    border: '1px solid #D32026',
    borderRadius: '50%',
    padding: '7px',
  },
  address: {
    color: 'gray',
    fontSize: '1rem',
    fontWeight: '400',
    fontFamily: 'Montserrat,sans-serif',
  },
  headline: {
    color: '#4A4A4A',
    fontFamily: 'Lato, sans-serif',
    fontSize: '1.3rem',
    margin: '1rem 0rem',
  },
});

const Notification = () => {
  const classes = useStyles();
  const { requestData, profileData } = useContext(UserContext);
  const userAddress = profileData.address;
  const newCollection = requestData.filter(
    (item) => item.Address === userAddress
  );

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
            <h3 className={classes.headline}>Your Nearby Area's Requests</h3>
            {newCollection.length !== 0 ? (
              <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
                {newCollection.map((item) => (
                  <Paper
                    key={item.id}
                    className={classes.paperStyle}
                    elevation={3}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexFlow: 'row wrap',
                        gap: '4rem',
                      }}
                    >
                      <span className={classes.address}>{item.Address}</span>
                      <span className={classes.group}>{item.group}</span>
                    </div>

                    <Link to='/request'>
                      <button className={classes.details}>Details</button>
                    </Link>
                  </Paper>
                ))}
              </div>
            ) : (
              <Loading></Loading>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Notification;
