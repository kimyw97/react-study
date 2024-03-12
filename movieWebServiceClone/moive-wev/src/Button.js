import ProTypes from 'prop-types';
import styles from './Button.module.css'

function Button({ text, onClick }) {
  return (
    <button onClick={onClick} className={styles.btn}>
      {text}
    </button>
  );
}

Button.prototype = {
  text: ProTypes.string.isRequired
};
export default Button;