import styles from './PlaylistItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartt, faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { faHeart, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import PlaylistOptions from '~/components/Layouts/DefaultLayout/Sidebar/component/PlaylistOptions/PlaylistOptions';

const cx = classNames.bind(styles);

function PlaylistItem({ playlist }) {
  const { user } = useSelector((state) => state.user);
  const [isFavoritePlaylist, setIsFavoritePlaylist] = useState(false);
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        if (playlist) {
          navigate('/playlist', { state: { playlistId: playlist.id } });
        }
      }}
      className={cx('wrapper')}
    >
      <div className={cx('img')}>
        <div className={cx('imgg')}>
          <img src="../../assets/img/imgplaylist.png" alt="img" />
        </div>
        <div className={cx('img_hover')}>
          {isFavoritePlaylist && (
            <button
              className={cx('btn-option')}
              onClick={(e) => {
                e.stopPropagation();
                setIsFavoritePlaylist(false);
              }}
            >
              <FontAwesomeIcon className={cx('purple_heart')} icon={faHeart} />
            </button>
          )}{' '}
          {!isFavoritePlaylist && (
            <button
              className={cx('btn-option')}
              onClick={(e) => {
                e.stopPropagation();
                setIsFavoritePlaylist(true);
                console.log('hihiihhi');
              }}
            >
              <FontAwesomeIcon icon={faHeartt} />
            </button>
          )}{' '}
          <FontAwesomeIcon className={cx('btn_play')} icon={faPlayCircle} />
          <Tippy
            interactive
            visible={visible}
            onClickOutside={hide}
            placement="right"
            offset={[-130, 0]}
            render={(attrs) => <PlaylistOptions hide={hide} playlist={playlist} attrs={attrs} />}
          >
            <button
              className={cx('btn-option')}
              onClick={(e) => {
                e.stopPropagation();
                visible ? hide() : show();
              }}
            >
              <FontAwesomeIcon icon={faEllipsis} />
            </button>
          </Tippy>
        </div>
      </div>
      <a href="http://localhost:3000/mymusic">{playlist ? playlist.name : '4U - On Repeat'}</a>
      <h3>{playlist ? `${user.first_name} ${user.last_name}` : 'Zing MP3'}</h3>
    </div>
  );
}

export default PlaylistItem;
