import { Container, Grid, makeStyles } from '@material-ui/core';
import { handleSignOut } from '../Registration/registerManager';
import Sidebar from '../Sidebar/Sidebar';

const useStyles = makeStyles({});

const Home = () => {
  const classes = useStyles();
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
          ></Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
