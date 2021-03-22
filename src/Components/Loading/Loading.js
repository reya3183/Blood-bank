import { CircularProgress, makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
  loadingRoot: {
    margin: 'auto',
  },
  loadingStyle: {
    color: '#D32026',
  },
});
const Loading = () => {
  const classes = useStyles();
  return (
    <div className={classes.loadingRoot}>
      <CircularProgress className={classes.loadingStyle} />
    </div>
  );
};

export default Loading;
