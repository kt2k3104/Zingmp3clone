import styles from './Listen.module.scss';
import classNames from 'classnames/bind';

import { useState } from 'react';

import PlaylistsSidebar from './components/PlaylistsSidebar';
import PlayerControlLeft from './components/PlayerControlLeft';
import PlayerControlCenter from './components/PlayerControlCenter';
import PlayerControlRight from './components/PlayerControlRight';

const cx = classNames.bind(styles);

function Listen() {
  const [isOpenPlaylists, setIsOpenPlaylists] = useState(false);

  const handleClickBtnPlaylists = (e) => {
    if (isOpenPlaylists === true) setIsOpenPlaylists(false);
    else setIsOpenPlaylists(true);
  };

  return (
    <div className={cx('player-controls')}>
      <PlayerControlLeft />
      <PlayerControlCenter />
      <PlayerControlRight handleClickBtnPlaylists={handleClickBtnPlaylists} isOpenPlaylists={isOpenPlaylists} />
      <PlaylistsSidebar showPlaylists={isOpenPlaylists} />
    </div>
  );
}

export default Listen;
