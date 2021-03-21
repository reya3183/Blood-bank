import logo from '../../images/149-1497912_blood-donation-up-donor-darah-logo-png__1_-removebg-preview.png';
import { Link } from 'react-router-dom';
import { Button, makeStyles } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import FeedbackIcon from '@material-ui/icons/Feedback';
import PostAddIcon from '@material-ui/icons/PostAdd';
const useStyles = makeStyles({
  image: {
    height: 'auto',
    maxWidth: '150px',
    margin: '0px auto',
  },
  btnStyle: {
    cursor: 'pointer',
    padding: '10px 20px',
    border: 'none',
    backgroundColor: 'transparent',
    color: 'black',
    boxShadow: 'none',
    fontSize: '.875rem',
    margin: '.5rem 0rem',
    '&:hover,&:focus,&:active,&:visited': {
      backgroundColor: 'transparent',
      color: '#D32026',
      boxShadow: 'none',
    },
  },
  iconStyle: {
    margin: '0px 10px',
  },
});

const Sidebar = () => {
  const classes = useStyles();
  return (
    <>
      <img className={classes.image} src={logo} alt='logo' />
      <h3>
        <span style={{ color: '#D32026' }}>Blood</span> Donation
      </h3>
      <Link to='/'>
        <Button className={classes.btnStyle} variant='contained'>
          <HomeIcon className={classes.iconStyle} />
          Home
        </Button>
      </Link>
      <br />
      <Link to='/profile'>
        <Button className={classes.btnStyle} variant='contained'>
          <PersonIcon className={classes.iconStyle} />
          Profile
        </Button>
      </Link>
      <br />
      <Link to='/request'>
        <Button className={classes.btnStyle} variant='contained'>
          <PostAddIcon className={classes.iconStyle} />
          Request
        </Button>
      </Link>
      <br />
      <Link to='/feedback'>
        <Button className={classes.btnStyle} variant='contained'>
          <FeedbackIcon className={classes.iconStyle} />
          Feedback
        </Button>
      </Link>
    </>
  );
};

export default Sidebar;
