import styles from './PlaylistItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartt, faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { faHeart, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import PlaylistOptions from '~/components/Layouts/DefaultLayout/Sidebar/component/PlaylistOptions/PlaylistOptions';
import { Box, Img } from '@chakra-ui/react';
import { changePlaylistNavigatePath } from '~/page/Auth/UserSlice';

const cx = classNames.bind(styles);

function PlaylistItem({ playlist }) {
  const { user, afterAddPlaylistNavigatePath } = useSelector((state) => state.user);
  const [isFavoritePlaylist, setIsFavoritePlaylist] = useState(false);
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (afterAddPlaylistNavigatePath) {
      navigate(afterAddPlaylistNavigatePath);
      dispatch(changePlaylistNavigatePath(''));
    }
  }, [navigate, afterAddPlaylistNavigatePath, dispatch]);

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        dispatch(changePlaylistNavigatePath(`/playlist?id=${playlist.id}`));
      }}
      className={cx('wrapper')}
    >
      <div className={cx('img')}>
        <div className={cx('imgg')}>
          {!playlist && (
            <Img className={cx('imggg')} src="./assets/img/imgplaylist.png" alt="img" />
          )}
          {playlist && !playlist?.songs && (
            <Img
              className={cx('imggg')}
              src="https://photo-zmp3.zmdcdn.me/album_default.png"
              alt="img"
            />
          )}
          {playlist?.songs?.length <= 3 && (
            <Img
              className={cx('imggg')}
              sx={css.img}
              src={
                playlist?.songs?.length === 0
                  ? 'https://photo-zmp3.zmdcdn.me/album_default.png'
                  : playlist?.songs?.length <= 3
                  ? playlist?.songs[0].artwork
                  : 'https://photo-zmp3.zmdcdn.me/album_default.png'
              }
              alt="img"
            />
          )}
          {playlist?.songs?.length > 3 && (
            <Box className={cx('imggg')} sx={css.box3}>
              <Img src={playlist?.songs[0].artwork} alt="img" />
              <Img src={playlist?.songs[1].artwork} alt="img" />
              <Img src={playlist?.songs[2].artwork} alt="img" />
              <Img src={playlist?.songs[3].artwork} alt="img" />
            </Box>
          )}
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

const css = {
  img: {
    display: 'block',
    w: '100%',
    transition: 'transform 0.4s linear',
    _groupHover: { filter: 'brightness(55%)', transform: 'scale(1.1)' },
  },
  box3: {
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    w: '100%',
    transition: 'transform 0.4s linear',
    _groupHover: { filter: 'brightness(55%)', transform: 'scale(1.1)' },
  },
};
