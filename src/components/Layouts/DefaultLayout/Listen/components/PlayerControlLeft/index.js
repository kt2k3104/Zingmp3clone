import styles from './PlayerControlLeft.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartt } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react';
import Tippyy from '@tippyjs/react/headless';
import { useDispatch, useSelector } from 'react-redux';
import { changeFavoriteSong } from '../../ListenSlice';

const cx = classNames.bind(styles);

function PlayerControlLeft() {
  const { currentSong } = useSelector((state) => state.listen);
  const dispatch = useDispatch();

  return (
    <div className={cx('left')}>
      <div className={cx('avt-song')}>
        <img src={currentSong.thumb} alt="img" />
      </div>
      <div className={cx('info-song')}>
        <div>{currentSong.name}</div>
        <h3>{currentSong.author}</h3>
      </div>
      <div className={cx('option-song')}>
        {currentSong.isFavorite ? (
          <button
            onClick={() => {
              dispatch(changeFavoriteSong(currentSong));
            }}
          >
            <FontAwesomeIcon className={cx('purple-heart')} icon={faHeart} />
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch(changeFavoriteSong(currentSong));
            }}
          >
            <FontAwesomeIcon icon={faHeartt} />
          </button>
        )}

        <Tippyy
          delay={[300, 300]}
          interactive
          placement="left"
          render={(attrs) => <ul className={cx('more-option-song')} tabIndex="-1" {...attrs}></ul>}
        >
          <Tippy content="Xem thêm">
            <button>
              <FontAwesomeIcon icon={faEllipsis} />
            </button>
          </Tippy>
        </Tippyy>
      </div>
    </div>
  );
}

export default PlayerControlLeft;
