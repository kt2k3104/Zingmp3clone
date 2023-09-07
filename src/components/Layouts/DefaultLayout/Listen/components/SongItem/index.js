import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SongItem.module.scss';
import classNames from 'classnames/bind';
import { faHeart as faHeartt } from '@fortawesome/free-regular-svg-icons';
import { faEllipsis, faHeart, faPlay } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';

import { pauseSong, playSong, setCurrentSong } from '../../ListenSlice';
import { handleChangeFavoriteSong } from '~/page/Auth/UserSlice';
import { memo } from 'react';

const cx = classNames.bind(styles);

function SongItem({ song }) {
  const { isPlaying, currentSong, queue } = useSelector((state) => state.listen);
  const { favoriteId } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner', currentSong.id === song.id ? 'isActive' : 'noActive')}>
        <div className={cx('left')}>
          <div
            className={cx('song-thumb')}
            onClick={() => {
              if (song.id === currentSong.id && isPlaying) {
                dispatch(pauseSong());
              } else if (song.id === currentSong.id && !isPlaying) {
                dispatch(playSong());
              } else if (song.id !== currentSong.id) {
                dispatch(setCurrentSong(song));
                dispatch(playSong());
              }
            }}
          >
            <img src={song?.artwork} alt="img" />
            {currentSong.id === song.id && (
              <div className={cx('song-thumb-active')}>
                {isPlaying ? (
                  <img
                    style={{ width: '40%', height: '40%', borderRadius: 0 }}
                    src="/assets/img/icon-playing.gif"
                    alt="img"
                  />
                ) : (
                  <FontAwesomeIcon icon={faPlay} />
                )}
              </div>
            )}
            {currentSong.id !== song.id && (
              <div className={cx('song-thumb-active')}>
                <FontAwesomeIcon icon={faPlay} />
              </div>
            )}
          </div>
          <div className={cx('card-info')}>
            <span className={cx('name')}>{song.name}</span>
            <h3>{song.artist}</h3>
          </div>
        </div>
        <div className={cx('right')}>
          {favoriteId.includes(song.id) ? (
            <button
              onClick={() => {
                dispatch(handleChangeFavoriteSong(song.id));
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
                dispatch(handleChangeFavoriteSong(song.id));
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
      {currentSong.id === song.id && currentSong.id !== queue[queue.length - 1].id && (
        <div className={cx('next-song')}>
          <h3>Tiếp theo</h3>
        </div>
      )}
    </div>
  );
}

export default memo(SongItem);
