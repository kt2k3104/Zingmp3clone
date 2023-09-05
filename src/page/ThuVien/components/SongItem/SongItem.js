import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SongItem.module.scss';
import classNames from 'classnames/bind';
import {
  faChevronDown,
  faEllipsis,
  faHeart,
  faMusic,
  faPause,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartt } from '@fortawesome/free-regular-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  pauseSong,
  playSong,
  setCurrentSong,
} from '~/components/Layouts/DefaultLayout/Listen/ListenSlice';
import Tippy from '@tippyjs/react';
import Tippyy from '@tippyjs/react/headless';
import { useState } from 'react';
import SongOtherOptions from '../SongOtherOptions/SongOtherOptions';
import customIcon from '~/components/UI/Icons';
import { handleChangeFavoriteSong } from '~/page/Auth/UserSlice';

const cx = classNames.bind(styles);

function SongItem({ song, favoriteSong, mySong }) {
  const { currentSong, isPlaying } = useSelector((state) => state.listen);
  const { favoriteId } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = useState(false);

  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);

  const convertTime = (time) => {
    if (!time) return '00:00';
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time - minutes * 60);
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    return `${minutes}:${seconds}`;
  };

  return (
    <div className={cx('wrapper', currentSong.id === song.id ? 'isActive' : 'noActive')}>
      <div className={cx('left')}>
        <FontAwesomeIcon className={cx('music_icon')} icon={faMusic} />
        <div
          className={cx('song-thumb')}
          onClick={() => {
            if (song.id === currentSong.id && isPlaying) {
              dispatch(pauseSong());
            } else if (song.id === currentSong.id && !isPlaying) {
              dispatch(setCurrentSong(song));
              dispatch(playSong());
            } else if (song.id !== currentSong.id) {
              dispatch(setCurrentSong(song));
              dispatch(playSong());
            }
          }}
        >
          <img src={song.artwork} alt="img" />
          {currentSong === song && (
            <div className={cx('song-thumb-active')}>
              {isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
            </div>
          )}
          {currentSong !== song && (
            <div className={cx('song-thumb-active')}>
              <FontAwesomeIcon icon={faPlay} />
            </div>
          )}
        </div>
        <div className={cx('card-info')}>
          <span>{song.name}</span>
          <h3>{song.artist}</h3>
        </div>
      </div>
      <div className={cx('center')}>
        {favoriteSong && <span>{song.name + ' (Single)'}</span>}
        {mySong && (
          <div className={cx('title')}>
            <span>Công khai</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        )}
      </div>
      <div className={cx('right')}>
        {favoriteSong && (
          <>
            <Tippy content="MV">
              <button className={cx('btn-mv')}>
                <div className={cx('icon-mv')}>
                  <p>MV</p>
                </div>
              </button>
            </Tippy>
            <Tippy content="Xem lời bài hát">
              <button className={cx('btn-karaoke')}>
                <customIcon.IconKaraoke />
              </button>
            </Tippy>
          </>
        )}
        {favoriteId.includes(song.id) ? (
          <button
            onClick={() => {
              dispatch(handleChangeFavoriteSong(song.id));
            }}
            className={cx('showInFav')}
          >
            <FontAwesomeIcon className={cx('heart_purple')} icon={faHeart} />
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

        <Tippyy
          interactive
          placement="left"
          visible={isVisible}
          // trigger="mouseenter"
          onClickOutside={hide}
          offset={[0, 0]}
          render={(attrs) => <SongOtherOptions hide={hide} song={song} attrs={attrs} />}
        >
          <Tippy content="Khác">
            <button className={cx('btn_option', 'dfnone')} onClick={isVisible ? hide : show}>
              <FontAwesomeIcon icon={faEllipsis} />
            </button>
          </Tippy>
        </Tippyy>

        <span className={cx('duration')}>{convertTime(song.duration)}</span>
      </div>
    </div>
  );
}

export default SongItem;
