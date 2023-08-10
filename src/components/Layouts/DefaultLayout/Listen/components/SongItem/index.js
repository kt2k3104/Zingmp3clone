import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SongItem.module.scss';
import classNames from 'classnames/bind';
import { faHeart as faHeartt } from '@fortawesome/free-regular-svg-icons';
import { faEllipsis, faHeart, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';

import { changeFavoriteSong, pauseSong, playSong, setCurrentSong } from '../../ListenSlice';

const cx = classNames.bind(styles);

function SongItem({ song }) {
  const { isPlaying, currentSong } = useSelector((state) => state.listen);
  const dispatch = useDispatch();

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner', currentSong.id === song.id ? 'isActive' : 'noActive')}>
        <div className={cx('left')}>
          <div
            className={cx('song-thumb')}
            onClick={() => {
              dispatch(setCurrentSong(song));
              dispatch(playSong());
              if (song.id === currentSong.id && isPlaying) dispatch(pauseSong());
              else dispatch(playSong());
            }}
          >
            <img src={currentSong.thumb} alt="img" />
            <div className={cx('song-thumb-active')}>
              {isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
            </div>
          </div>
          <div className={cx('card-info')}>
            <span>{song.name}</span>
            <h3>{song.author}</h3>
          </div>
        </div>
        <div className={cx('right')}>
          {song.isFavorite ? (
            <button
              onClick={() => {
                dispatch(changeFavoriteSong(song));
              }}
            >
              <FontAwesomeIcon
                icon={faHeart}
                className={cx('heart-purple', currentSong.id === song.id ? 'heart-whrite' : '')}
              />
            </button>
          ) : (
            <button
              onClick={() => {
                dispatch(changeFavoriteSong(song));
              }}
            >
              <FontAwesomeIcon icon={faHeartt} />
            </button>
          )}
          <button>
            <FontAwesomeIcon icon={faEllipsis} />
          </button>
        </div>
      </div>
      {currentSong.id === song.id ? (
        <div className={cx('next-song')}>
          <h3>Tiếp theo</h3>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default SongItem;
