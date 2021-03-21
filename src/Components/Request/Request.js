import { Card, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar';
const useStyles = makeStyles({
  root: {
    maxWidth: '32rem',
    height: '30rem',
    margin: '20px',
  },
  paperRoot: {
    display: 'flex',
    flexFlow: 'column wrap',
  },
  headline: {
    color: '#0E0E0E',
    fontFamily: 'Lato, sans-serif',
    fontSize: '1.8rem',
    textAlign: 'center',
  },
  formStyle: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
  },
  labelStyle: {
    display: 'block',
    marginTop: '10px',
    textAlign: 'center',
  },
  groupStyle: {
    marginLeft: '10px',
    padding: '8px 10px',
    borderRadius: '15px',
    border: 'none',
    backgroundColor: '#EDF0F5',
    '&:focus': {
      outline: 'none',
    },
  },
  relStyle: {
    marginLeft: '30px',
    padding: '8px 110px',
    borderRadius: '15px',
    border: 'none',
    backgroundColor: '#EDF0F5',
    '&:focus': {
      outline: 'none',
    },
  },
  DTStyle: {
    marginLeft: '10px',
    padding: '8px',
    borderRadius: '15px',
    border: 'none',
    backgroundColor: '#EDF0F5',
    '&:focus': {
      outline: 'none',
    },
  },
  publishStyle: {
    cursor: 'pointer',
    textAlign: 'center',
    padding: '8px 110px',
    borderRadius: '25px',
    border: 'none',
    backgroundColor: '#D32026',
    color: 'white',
    fontSize: '.875rem',
    margin: '20px 0px',
  },
  paperStyle: {
    width: '20rem',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
  },
});

const Request = () => {
  const classes = useStyles();
  const { request, setRequest } = useContext(UserContext);

  const [requestData, setRequestData] = useState([]);
  useEffect(() => {
    fetch('https://api.npoint.io/bd2bac5b1394b7859380')
      .then((res) => res.json())
      .then((data) => setRequestData(data));
  }, []);

  const handleBlur = (e) => {
    const newRequest = { ...request };
    newRequest[e.target.name] = e.target.value;
    setRequest(newRequest);
  };
  const handleChange = (e) => {
    const newRequest = { ...request };
    newRequest[e.target.name] = e.target.value;
    setRequest(newRequest);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };
  return (
    <div className={classes.gridRoot}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Sidebar></Sidebar>
          </Grid>
          <Grid
            style={{
              display: 'flex',
              marginTop: '3rem',
              justifyContent: 'space-between',
            }}
            item
            xs={9}
          >
            <Card className={classes.root}>
              <h3 className={classes.headline}>Request Form</h3>
              <form className={classes.formStyle} onSubmit={handleSubmit}>
                <label className={classes.labelStyle}>
                  Relationship with Patient
                  <br />
                  <input
                    type='text'
                    name='relation'
                    onBlur={handleBlur}
                    className={classes.relStyle}
                    required
                  />
                </label>
                <label className={classes.labelStyle}>
                  Blood Group
                  <br />
                  <input
                    type='text'
                    name='bloodGroup'
                    onBlur={handleBlur}
                    className={classes.groupStyle}
                    required
                  />
                </label>
                <label className={classes.labelStyle}>
                  Alternate number
                  <br />
                  <input
                    type='text'
                    name='alternate'
                    onBlur={handleBlur}
                    className={classes.groupStyle}
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
                    className={classes.groupStyle}
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
                    className={classes.groupStyle}
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
                    className={classes.groupStyle}
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
                    className={classes.groupStyle}
                    required
                  />
                </label>
                <label className={classes.labelStyle}>
                  Time
                  <br />
                  <input
                    type='time'
                    name='requestTime'
                    onChange={handleChange}
                    className={classes.DTStyle}
                    required
                  />
                </label>
                <label className={classes.labelStyle}>
                  Date
                  <br />
                  <input
                    type='date'
                    name='requestDate'
                    onChange={handleChange}
                    className={classes.DTStyle}
                    min='1960-01-01'
                    max='2022-12-31'
                    required
                  />
                </label>
                <br />
                <input
                  className={classes.publishStyle}
                  type='submit'
                  value='Publish'
                ></input>
              </form>
            </Card>

            <div className={classes.paperRoot}>
              <h3 className={classes.headline}>Blood Requests</h3>
              {requestData.map((item) => (
                <Paper
                  key={item.id}
                  className={classes.paperStyle}
                  elevation={3}
                >
                  <div className={classes.paperText}>
                    <p>{item.requestType}</p>
                    <p>{item.Address}</p>
                    <span>{item.date}</span>
                    <span>{item.time}</span>
                  </div>
                  <div>
                    <button>{item.stage}</button>
                    <p>
                      {item.group}
                      <span>{item.amount}</span>
                    </p>
                    <span>{item.relation}</span>
                  </div>
                </Paper>
              ))}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Request;