import React from 'react';
import { NavLink } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DateRangeIcon from '@material-ui/icons/DateRange';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import NearMeIcon from '@material-ui/icons/NearMe';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import VibrationIcon from '@material-ui/icons/Vibration';
import MenuIcon from '@material-ui/icons/Menu';
import { useTranslation } from 'react-i18next';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  SwipeableDrawer,
} from '@material-ui/core';
import { INavList } from './nav-bar.model';
import './nav-bar.scss';
// import { useAuthDataContext } from '../../providers/auth-data-provider';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navRoot: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  }),
);

const linkStyle = {
  color: 'inherit',
  textDecoration: 'inherit',
};

const NavBar: React.FC = () => {

  const {
    t,
    // i18n,
  } = useTranslation();
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const mainNavList: INavList[] = [
    {
      icon: <DateRangeIcon />,
      label: 'NavBar.agenda',
      path: '/Agenda',
    },
    {
      icon: <VibrationIcon />,
      label: 'NavBar.activities',
      path: '/Activities',
    },
    {
      icon: <NearMeIcon />,
      label: 'NavBar.locations',
      path: '/Locations',
    },
    {
      icon: <PersonPinIcon />,
      label: 'NavBar.staff',
      path: '/Staff',
    },
    {
      icon: <EqualizerIcon />,
      label: 'NavBar.reports',
      path: '/Reports',
    },
  ];

  // const dataContext = useAuthDataContext();

  // const logIn = () => {
  //   if (dataContext.onLogin) {
  //     dataContext.onLogin({
  //       username: 'felipipe',
  //       name: 'Andres',
  //       lastName: 'Molina',
  //     });
  //   }
  // };

  // const logOut = () => {
  //   if (dataContext.onLogout) {
  //     dataContext.onLogout();
  //   }
  // };
  // console.log(dataContext);
  
  const subNavList:INavList[] = [];

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event
      && event.type === 'keydown'
      && (
        (event as React.KeyboardEvent).key === 'Tab'
        || (event as React.KeyboardEvent).key === 'Shift'
      )) {
      return;
    }

    setState({ ...state, left: open });
  };

  const listItems = (list: INavList[]) => (
    <List>
      {list.map((item, index) => (
        <NavLink to={item.path} key={index} style={linkStyle}>
          <ListItem button>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={t(item.label)} />
          </ListItem>
        </NavLink>
      ))}
    </List>
  );

  const SideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {listItems(mainNavList)}
      <Divider />
      {listItems(subNavList)}
    </div>
  );

  return (
    <div className={classes.navRoot}>
      <AppBar position="static">
        <Toolbar>
          <div onClick={toggleDrawer(true)}>
            <IconButton 
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu">
              <MenuIcon />
            </IconButton>
          </div>
          {/* <button onClick={logOut}>LogOut</button>
          <button onClick={logIn}>LogIn</button> */}
          <Typography variant="h6" className={classes.title}>{t('NavBar.title')}</Typography>
          <NavLink to="/Account" style={linkStyle}>
            <Button color="inherit">{t('NavBar.login')}</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <SideList></SideList>
      </SwipeableDrawer>
    </div>
  );
};

export default NavBar;