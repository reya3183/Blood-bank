import { Card, Container, Grid } from '@material-ui/core';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar';

const Profile = () => {
  const { profileData, setProfileData } = useContext(UserContext);
  useEffect(() => {
    fetch('https://api.npoint.io/8de9743b4c771e3b9d0c')
      .then((res) => res.json())
      .then((data) => setProfileData(data));
  }, []);

  const { name, pic, group, info, donations, requests } = profileData;
  console.log(profileData.donations);
  return (
    <Container style={{ marginTop: '3rem' }}>
      <Grid container spacing={2}>
        <Grid item md={3}>
          <Sidebar></Sidebar>
        </Grid>
        <Grid
          style={{
            display: 'flex',
            marginTop: '3rem',
            justifyContent: 'space-between',
          }}
          item
          md={9}
        >
          <Card>
            <h1>helo</h1>
            <h1>{name}</h1>
          </Card>
          <Card>
            {donations && donations.map((a) => <span>{a.amount}</span>)}
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
