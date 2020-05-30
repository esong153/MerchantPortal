import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MaterialTabs from './MaterialTabs.js'
import TocIcon from '@material-ui/icons/Toc';
import CropLandscapeIcon from '@material-ui/icons/CropLandscape';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ScheduleIcon from '@material-ui/icons/Schedule';
import MessageIcon from '@material-ui/icons/Message';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#001529"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    
  },
  drawerPaper: { //controls the entire sidebar
    width: drawerWidth,
    backgroundColor: "#001529",
  },
  drawerContainer: { //controls the text content of list items
    overflow: 'auto',
    color: '#BFC9CA',
  },
  content: { //this is the main content in the app
    flexGrow: 1,
    padding: theme.spacing(3),
  },

  tr: {
    '&:hover': {
      background: '#1DA57A'
    }
  }
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Merchant Portal
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
            
            <List>
                <ListItem>
                    <ListItemIcon  style={{ color: '#BFC9CA' }}> <TocIcon /> </ListItemIcon>
                    <ListItemText primary= 'Dashboard' />
                </ListItem>
                <ListItem button className = {classes.tr}>
                    <ListItemIcon  style={{ color: '#BFC9CA' }}> <CropLandscapeIcon  /> </ListItemIcon>
                    <ListItemText primary= 'Tables' />
                </ListItem>
                <ListItem button className = {classes.tr}>
                    <ListItemIcon  style={{ color: '#BFC9CA' }}> <LocalDiningIcon /> </ListItemIcon>
                    <ListItemText primary= 'Orders' />
                </ListItem>
                <ListItem button className = {classes.tr}>
                    <ListItemIcon  style={{ color: '#BFC9CA' }}> <MenuBookIcon/> </ListItemIcon>
                    <ListItemText primary= 'Menu' />
                </ListItem>
                <ListItem button className = {classes.tr}>
                    <ListItemIcon  style={{ color: '#BFC9CA' }}> <ScheduleIcon /> </ListItemIcon>
                    <ListItemText primary= 'Hours' />
                </ListItem>
                <ListItem button className = {classes.tr}>
                    <ListItemIcon  style={{ color: '#BFC9CA' }}> <MessageIcon /> </ListItemIcon>
                    <ListItemText primary= 'Reviews' />
                </ListItem>
                <ListItem button className = {classes.tr}>
                    <ListItemIcon  style={{ color: '#BFC9CA' }}> <AccountBalanceIcon /> </ListItemIcon>
                    <ListItemText primary= 'Bank Account' />
                </ListItem>
                <ListItem button className = {classes.tr}>
                    <ListItemIcon  style={{ color: '#BFC9CA' }}> <CreditCardIcon /> </ListItemIcon>
                    <ListItemText primary= 'Transactions' />
                </ListItem>
                <ListItem button className = {classes.tr}>
                    <ListItemIcon  style={{ color: '#BFC9CA' }}> <AttachMoneyIcon /> </ListItemIcon>
                    <ListItemText primary= 'Transfers' />
                </ListItem>
                <ListItem button className = {classes.tr}>
                    <ListItemIcon  style={{ color: '#BFC9CA' }}> <EmojiPeopleIcon /> </ListItemIcon>
                    <ListItemText primary= 'Staff' />
                </ListItem>
                <ListItem button className = {classes.tr}>
                    <ListItemIcon  style={{ color: '#BFC9CA' }}> <SettingsApplicationsIcon /> </ListItemIcon>
                    <ListItemText primary= 'Settings' />
                </ListItem>
           </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <MaterialTabs inkBarStyle={{background: '#1DA57A'}}></MaterialTabs>
      </main>
    </div>
  );
}