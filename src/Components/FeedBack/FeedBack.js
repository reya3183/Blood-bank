import { Card, makeStyles } from '@material-ui/core';
import { useContext } from 'react';
import { UserContext } from '../../App';

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
    margin: '5px',
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
    // console.log(user);
    alert('Your review is published!');
    e.preventDefault();
    e.target.reset();
  };
  return (
    <div style={{ marginTop: '3rem' }}>
      <form style={{ maxWidth: '25rem' }} onSubmit={handleSubmit}>
        <h3 className={classes.headline}>Give Your Valuable Review!</h3>
        <Card>
          <textarea
            name='feedback'
            cols='33'
            rows='5'
            onBlur={handleBlur}
            className={classes.textAreaStyle}
            required
          />
        </Card>
        <br />
        <input type='submit' value='Publish' className={classes.publishStyle} />
      </form>
    </div>
  );
};

export default FeedBack;
