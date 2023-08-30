import styles from './RadioItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function RadioItem({ item }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('img')}>
        <img className={cx('img')} src={item.img} alt="img" />
        <div className={cx('img_hover')}>
          <FontAwesomeIcon className={cx('btn_play')} icon={faPlayCircle} />
        </div>
      </div>
      <h3>{item.title}</h3>
      <span>{item.subtitle}</span>
    </div>
  );
}

export default RadioItem;
