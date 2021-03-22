import { Container, Grid, makeStyles, Paper } from '@material-ui/core';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ReplyIcon from '@material-ui/icons/Reply';
import './Home.css';
import Loading from '../Loading/Loading';
import FeedBack from '../FeedBack/FeedBack';

const useStyles = makeStyles({
  paperStyle: {
    padding: '20px',
  },
  iconDiv: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  reviewText: {
    color: '#4A4A4A',
    fontSize: '12px',
    fontFamily: 'Montserrat,sans-serif',
    margin: '5px 0px',
  },
  iconStyle: {
    color: '#D32026',
    cursor: 'pointer',
    '&:hover': {
      color: '#4A4A4A',
    },
  },
  headline: {
    color: '#0E0E0E',
    fontFamily: 'Lato, sans-serif',
    fontSize: '1.5rem',
    marginBottom: '1.5rem',
  },
  emailStyle: {
    display: 'flex',
    justifyContent: 'flex-end',
    fontFamily: 'Lato, sans-serif',
    color: '#D32026',
    marginBottom: '1rem',
  },
});

const Home = () => {
  const classes = useStyles();
  const { reviewData, setReviewData, user } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://api.npoint.io/e21bb21472e0628064f8')
      .then((res) => res.json())
      .then((data) => {
        setReviewData(data);
        setLoading(false);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
              marginTop: '1rem',
              padding: '3rem',
            }}
            item
            xs={9}
          >
            <h3 className={classes.headline}>Reviews</h3>
            <p className={classes.emailStyle}>{user.email}</p>
            {loading ? (
              <Loading></Loading>
            ) : (
              <Slider {...settings}>
                {reviewData.map((item) => (
                  <Paper
                    key={item.id}
                    className={classes.paperStyle}
                    elevation={3}
                  >
                    <h3>{item.name}</h3>
                    <p className={classes.reviewText}>{item.review}</p>
                    <div className={classes.iconDiv}>
                      <ThumbUpAltIcon className={classes.iconStyle} />
                      <ReplyIcon className={classes.iconStyle} />
                    </div>
                  </Paper>
                ))}
              </Slider>
            )}
            <FeedBack></FeedBack>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
