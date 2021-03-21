import { Card, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar';

const useStyles = makeStyles({
  cardRoot: {
    maxWidth: '20rem',
    height: '22rem',
    padding: '0rem 2rem',
  },
  pic: {
    height: '10rem',
    marginLeft: '4rem',
  },
  group: {
    float: 'right',
    color: '#D32026',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    border: '1px solid #D32026',
    borderRadius: '50%',
    padding: '5px',
  },
  headline: {
    color: '#D32026',
    fontFamily: 'Lato, sans-serif',
    fontSize: '1.3rem',
    textAlign: 'center',
    marginBottom: '1.5rem',
  },
  headlineReq: {
    color: '#D32026',
    fontFamily: 'Lato, sans-serif',
    fontSize: '1.3rem',
  },
  name: {
    color: '#4A4A4A',
    fontWeight: 'bold',
    fontSize: '1.3rem',
  },
  info: {
    color: '#ACACAC',
    margin: '20px 0px',
  },
  paperStyle: {
    width: '30rem',
    height: 'auto',
    padding: '1rem 2.5rem',
    marginBottom: '2rem',
  },
  acceptBtn: {
    padding: '3px 8px',
    backgroundColor: '#D32026',
    borderRadius: '25px',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    '&:disabled': {
      backgroundColor: 'gray',
      color: 'white',
    },
  },
});

const Profile = () => {
  const classes = useStyles();
  const { profileData, setProfileData } = useContext(UserContext);
  useEffect(() => {
    fetch('https://api.npoint.io/8de9743b4c771e3b9d0c')
      .then((res) => res.json())
      .then((data) => setProfileData(data));
  }, []);

  const { name, pic, group, info, donations, requests } = profileData;

  const handleClick = (reqDate, e) => {
    const btn = e.target;
    const date1 = new Date(donations[0].donationDate);
    const date2 = new Date(reqDate);
    const total_seconds = Math.abs(date2 - date1) / 1000;
    const days_difference = Math.floor(total_seconds / (60 * 60 * 24));

    if (days_difference < 90) {
      btn.disabled = true;
      btn.innerHTML = 'Not allow!';
      alert('Sorry! You can not donate blood within next 3 months/90days!');
    } else {
      btn.innerHTML = 'Allow!';
      btn.style.backgroundColor = 'green';
      alert('Wow! you can donate!');
    }
  };
  return (
    <div style={{ backgroundColor: '#F6F7F9' }}>
      <Container>
        <Grid container spacing={2}>
          <Grid
            item
            md={3}
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
              display: 'flex',
              marginTop: '3rem',
              justifyContent: 'space-around',
            }}
            item
            md={9}
          >
            <Card className={classes.cardRoot}>
              <img className={classes.pic} src={pic} alt='user-pic' />
              <p>
                <span className={classes.name}>{name}</span>
                <span className={classes.group}>{group}</span>
              </p>
              <p className={classes.info}>{info}</p>
            </Card>
            <div
              style={{
                display: 'flex',
                flexFlow: 'column wrap',
              }}
            >
              <Paper className={classes.paperStyle} elevation={3}>
                <h3 className={classes.headline}>Donations</h3>
                {donations &&
                  donations.map((item, index) => (
                    <div
                      style={{
                        display: 'flex',
                        flexFlow: 'row wrap',
                        gap: '8rem',
                      }}
                      key={index}
                    >
                      <div>
                        <p>{item.donationDate}</p>
                      </div>
                      <div style={{ marginBottom: '.875rem' }}>
                        <p style={{ color: '#4A4A4A', fontWeight: 'bold' }}>
                          {item.address}
                        </p>
                        <p style={{ fontSize: '.885rem' }}>{item.amount}</p>
                      </div>
                    </div>
                  ))}
              </Paper>
              <Paper className={classes.paperStyle} elevation={3}>
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <h3 className={classes.headlineReq}>Requests</h3>
                  <span style={{ color: '#4A4A4A' }}>
                    Check your donation approval!
                  </span>
                </div>

                {requests &&
                  requests.map((data, index) => (
                    <div
                      style={{
                        display: 'flex',
                        flexFlow: 'row wrap',
                        gap: '8rem',
                      }}
                      key={index}
                    >
                      <div>
                        <p>{data.requestDate}</p>
                      </div>
                      <div style={{ marginBottom: '.875rem' }}>
                        <p style={{ color: '#4A4A4A', fontWeight: 'bold' }}>
                          {data.address}
                        </p>
                        <p style={{ fontSize: '.885rem' }}>{data.amount}</p>
                        <button
                          className={classes.acceptBtn}
                          onClick={(e) => handleClick(data.requestDate, e)}
                        >
                          accept
                        </button>
                      </div>
                    </div>
                  ))}
              </Paper>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Profile;
