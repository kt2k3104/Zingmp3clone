import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './PlaylistsSidebar.module.scss';
import classNames from 'classnames/bind';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';
import Tippy from '@tippyjs/react';

import SongItem from '../SongItem';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function PlaylistsSidebar({ showPlaylists }) {
  const queue = useSelector((state) => state.listen.queue);

  const [isActiveDSP, setIsActiveDSP] = useState(true);
  const [isActiveNGD, setIsActiveNGD] = useState(false);

  console.log('render');

  const handleSelectDSP = (e) => {
    setIsActiveDSP(true);
    setIsActiveNGD(false);
  };
  const handleSelectNGD = (e) => {
    setIsActiveDSP(false);
    setIsActiveNGD(true);
  };

  const PlaylistsElement = useRef();

  return (
    <div ref={PlaylistsElement} className={cx('wrapper', showPlaylists ? 'show-playlist' : '')}>
      <div className={cx('header')}>
        <div>
          <button onClick={handleSelectDSP} className={cx('btn-left', isActiveDSP ? 'is-active' : 'no-active')}>
            Danh sách phát
          </button>
          <button onClick={handleSelectNGD} className={cx('btn-right', isActiveNGD ? 'is-active' : 'no-active')}>
            Nghe gần đây
          </button>
        </div>
        <Tippy content="Hẹn giờ dừng phát nhạc">
          <button className={cx('header-btn')}>
            <FontAwesomeIcon icon={faClock} />
          </button>
        </Tippy>
        <Tippy content="Khác">
          <button className={cx('header-btn')}>
            <FontAwesomeIcon icon={faEllipsis} />
          </button>
        </Tippy>
      </div>
      <div className={cx('content')}>
        {queue.map((song) => {
          return <SongItem key={song.id} song={song} />;
        })}
      </div>
    </div>
  );
}

export default PlaylistsSidebar;