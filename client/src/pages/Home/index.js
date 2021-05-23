import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundImage: `url(${'/images/home/sherlock_wall.png'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  container: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
  },
  contentsBox: {
    display: 'flex',
    backgroundColor: 'white',
    width: '80vw',
    maxWidth: '768px',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  menuButton: {
    display: 'flex',
    maxWidth: '250px',
    maxHeight: '250px',
    minWidth: '150px',
    minHeight: '150px',
    width: '28vw',
    height: '28vh',
    backgroundColor: 'white',
    margin: '70px 40px',
    border: '4px solid #E2B063',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  menuImg: {
    marginBottom: '20px',
    minHeight: '80px',
    minWidth: '80px',
    maxHeight: '100px',
    maxWidth: '100px',
    height: '10vh',
    width: '10vw',
  },
  menuTitle: {
    fontSize: '1.3vw',
    color: '#29303A',
    // margin: '20px',
  },
}));

function MenuButton(data) {
  const classes = useStyles();
  return (
    <div className={classes.menuButton}>
      <img className={classes.menuImg} alt="" src={data.imgUrl} />

      <div className={classes.menuTitle}>{data.menuName}</div>
    </div>
  );
}

function Home() {
  const classes = useStyles();
  const sherlockImg = `/images/home/home_sherlock.png`;
  const watsonImg = `/images/home/home_watson.png`;
  const bakerImg = `/images/home/home_baker.png`;
  const moriartyImg = `/images/home/home_moriarty.png`;

  const sherlockMenuName = '셜록의 돋보기';
  const watsonMenuName = '왓슨의 믹스매치';
  const bakerMenuName = '베이커가의 옷장';
  const moriartyMenuName = '모리아티의 솔루션';

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.contentsBox}>
          <div>
            <Link to="/analysis_clothes" style={{ textDecoration: 'none' }}>
              <MenuButton imgUrl={sherlockImg} menuName={sherlockMenuName} />
            </Link>
            <Link to="/closet" style={{ textDecoration: 'none' }}>
              <MenuButton imgUrl={bakerImg} menuName={bakerMenuName} />
            </Link>
          </div>
          <div>
            <Link to="/analysis_color" style={{ textDecoration: 'none' }}>
              <MenuButton imgUrl={watsonImg} menuName={watsonMenuName} />
            </Link>

            <Link to="/solution" style={{ textDecoration: 'none' }}>
              <MenuButton imgUrl={moriartyImg} menuName={moriartyMenuName} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
