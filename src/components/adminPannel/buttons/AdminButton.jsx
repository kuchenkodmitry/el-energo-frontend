import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Typography, ButtonBase } from '@mui/material';
import styles from './AdminButton.module.css';

function AdminButton({ icon, text, path }) {
  return (
    <ButtonBase component={Link} to={path} className={styles.button}>
      {icon && <img src={icon} alt="" className={styles.icon} />}
      <Typography variant="button" className={styles.text}>
        {text}
      </Typography>
    </ButtonBase>
  );
}

AdminButton.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

AdminButton.defaultProps = {
  icon: '',
};

export default AdminButton;
