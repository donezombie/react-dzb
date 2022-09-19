import React from 'react';
import { makeStyles } from '@mui/styles';
import { useTranslation } from 'react-i18next';
import CommonStyles from 'components/CommonStyles';
import { useAuthentication } from 'providers/AuthenticationProvider';

const useStyles = makeStyles((theme) => {
  return {
    footer: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  };
});

const Header = (props) => {
  //! State
  const { logout } = useAuthentication();
  const classes = useStyles();

  //! Function

  //! Render
  return <div className={classes.footer}>
    <div className={classes.left}>This is HEADER</div>
    <div className={classes.right}>
      <CommonStyles.Button variant="outline" onClick={logout}>Logout</CommonStyles.Button>
    </div>
  </div>;
};

export default Header;
