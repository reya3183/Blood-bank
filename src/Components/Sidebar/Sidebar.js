import logo from '../../images/149-1497912_blood-donation-up-donor-darah-logo-png__1_-removebg-preview.png';
import { Link } from 'react-router-dom';
import { Button, makeStyles } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import PostAddIcon from '@material-ui/icons/PostAdd';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useContext } from 'react';
import { UserContext } from '../../App';
const useStyles = makeStyles({
  image: {
    height: 'auto',
    maxWidth: '9rem',
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
    margin: '3px 0px',
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
  const { user, setSignedUser } = useContext(UserContext);
  const admin = user.email;
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column wrap',
        alignItems: 'center',
        marginTop: '3rem',
      }}
    >
      {/* logo */}
      <img className={classes.image} src={logo} alt='logo' />
      <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <span style={{ color: '#D32026' }}>Blood</span> Donation
      </h3>
      {/* sidebar */}
      <Link to='/home'>
        <Button className={classes.btnStyle} variant='contained'>
          <HomeIcon className={classes.iconStyle} />
          Home
        </Button>
      </Link>
      <Link to='/profile'>
        <Button className={classes.btnStyle} variant='contained'>
          <PersonIcon className={classes.iconStyle} />
          Profile
        </Button>
      </Link>
      <Link to='/request'>
        <Button className={classes.btnStyle} variant='contained'>
          <PostAddIcon className={classes.iconStyle} />
          Request
        </Button>
      </Link>
      <Link to='/notification'>
        <Button className={classes.btnStyle} variant='contained'>
          <NotificationsIcon className={classes.iconStyle} />
          Notification
        </Button>
      </Link>
      {/* only admin update */}
      {admin === 'admin@gmail.com' && (
        <Link to='/update'>
          <Button className={classes.btnStyle} variant='contained'>
            <SystemUpdateAltIcon className={classes.iconStyle} />
            Update
          </Button>
        </Link>
      )}
      {/* end admin update */}

      <br />
      <Button
        onClick={() => setSignedUser({})}
        className={classes.btnStyle}
        variant='contained'
      >
        <ExitToAppIcon className={classes.iconStyle} />
        SignOut
      </Button>
    </div>
  );
};

export default Sidebar;
