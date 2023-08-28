import Tippy from '@tippyjs/react';
import Tippyy from '@tippyjs/react/headless';
import styles from './PlaylistItem.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

import PlaylistOptions from '../PlaylistOptions/PlaylistOptions';

const cx = classNames.bind(styles);

function PlaylistItem({ playlist, children }) {
  const [isVisible, setIsVisible] = useState(false);

  // const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);

  const handleShowPlaylistOption = (e) => {
    setIsVisible((isVisible) => !isVisible);
  };

  return (
    <li className={cx('playlist-item')}>
      <span>{children}</span>
      <Tippyy
        interactive
        placement="right"
        visible={isVisible}
        onClickOutside={hide}
        offset={[-130, 0]}
        render={(attrs) => <PlaylistOptions hide={hide} playlist={playlist} attrs={attrs} />}
      >
        <Tippy content={'Khác'}>
          <button onClick={handleShowPlaylistOption}>
            <FontAwesomeIcon icon={faEllipsis} />
          </button>
        </Tippy>
      </Tippyy>
    </li>
  );
}

export default PlaylistItem;
