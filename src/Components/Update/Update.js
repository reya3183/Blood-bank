import { Card, Container, Grid, makeStyles } from '@material-ui/core';
import { useContext } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar';

const useStyles = makeStyles({
  root: {
    maxWidth: '32rem',
    height: 'auto',
    margin: '2rem',
  },
  formStyle: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
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
  updateStyle: {
    textAlign: 'center',
    padding: '15px 110px',
    borderRadius: '25px',
    border: 'none',
    backgroundColor: '#D32026',
    color: 'white',
    fontSize: '.875rem',
    margin: '2rem 0rem',
    cursor: 'pointer',
  },
});

const Update = () => {
  const classes = useStyles();
  const { donors, setDonors } = useContext(UserContext);
  const handleBlur = (e) => {
    const newDonor = { ...donors };
    newDonor[e.target.name] = e.target.value;
    setDonors(newDonor);
  };
  const handleChange = (e) => {
    const newDonor = { ...donors };
    newDonor[e.target.name] = e.target.value;
    setDonors(newDonor);
  };
  const handleSubmit = (e) => {
    console.log(donors);
    e.target.reset();
    e.preventDefault();
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
            <Card className={classes.root}>
              <form className={classes.formStyle} onSubmit={handleSubmit}>
                <label className={classes.labelStyle}>
                  Name
                  <br />
                  <input
                    type='text'
                    name='name'
                    onBlur={handleBlur}
                    className={classes.inputStyle}
                    required
                  />
                </label>
                <label className={classes.labelStyle}>
                  Email
                  <br />
                  <input
                    type='text'
                    name='email'
                    onBlur={handleBlur}
                    className={classes.inputStyle}
                    required
                  />
                </label>
                <label className={classes.labelStyle}>
                  Last Donation Date
                  <br />
                  <input
                    type='date'
                    name='lastDonation'
                    onChange={handleChange}
                    className={classes.dateStyle}
                    required
                  />
                </label>
                <br />
                <input
                  className={classes.updateStyle}
                  type='submit'
                  value='update'
                ></input>
              </form>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Update;
