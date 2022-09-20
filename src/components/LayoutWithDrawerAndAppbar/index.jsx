import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import CommonIcons from 'components/CommonIcons';
import PropTypes from 'prop-types';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    eachLink: {
      textDecoration: 'none',
      color: 'inherit',
      width: '100%',

      '&.active': {
        backgroundColor: theme.custom.colors.lightGrey,
      },
    },
  };
});

const propTypes = {
  topDrawer: PropTypes.node,
  header: PropTypes.node,
  leftMenu: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      icon: PropTypes.any,
      path: PropTypes.string,
    }),
  ),
};

const LayoutWithDrawerAndAppbar = (props) => {
  //! State
  const { topDrawer, header, window, children, leftMenu = [] } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  //! Function
  const handleDrawerToggle = React.useCallback(() => {
    setMobileOpen((mobileState) => !mobileState);
  }, []);

  //! Render
  const drawer = (
    <div>
      <Toolbar>{topDrawer}</Toolbar>
      <Divider />
      <List>
        {leftMenu.map((item) => (
          <ListItem key={item.label} disablePadding>
            <NavLink to={item.path} end className={classes.eachLink}>
              <ListItemButton>
                {item.icon && <ListItemIcon>{<item.icon />}</ListItemIcon>}
                <ListItemText primary={item.label} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <CommonIcons.Menu />
          </IconButton>

          {header}
        </Toolbar>
      </AppBar>

      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

LayoutWithDrawerAndAppbar.propTypes = propTypes;
export default LayoutWithDrawerAndAppbar;
