import styles from './PlaylistItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartt, faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { faHeart, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

function PlaylistItem() {
  const [isFavoritePlaylist, setIsFavoritePlaylist] = useState(false);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('img')}>
        <img src="./assets/img/imgplaylist.png" alt="img" />
        <div className={cx('img_hover')}>
          {isFavoritePlaylist && (
            <button
              onClick={() => {
                setIsFavoritePlaylist(false);
              }}
            >
              <FontAwesomeIcon className={cx('purple_heart')} icon={faHeart} />
            </button>
          )}{' '}
          {!isFavoritePlaylist && (
            <button
              onClick={() => {
                setIsFavoritePlaylist(true);
              }}
            >
              <FontAwesomeIcon icon={faHeartt} />
            </button>
          )}{' '}
          <FontAwesomeIcon className={cx('btn_play')} icon={faPlayCircle} />
          <button>
            <FontAwesomeIcon icon={faEllipsis} />
          </button>
        </div>
      </div>
      <a href="http://localhost:3000/mymusic">4U - On Repeat</a>
      <h3>Zing MP3</h3>
    </div>
  );
}

export default PlaylistItem;
