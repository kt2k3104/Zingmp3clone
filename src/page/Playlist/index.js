import { Box, Image, Stack } from '@chakra-ui/react';
import styles from './Playlist.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { faEllipsis, faMusic, faPen, faPlay } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import SongItem from '../ThuVien/components/SongItem/SongItem';
import PlaylistOptions from '~/components/Layouts/DefaultLayout/Sidebar/component/PlaylistOptions/PlaylistOptions';

const cx = classNames.bind(styles);

function Playlist() {
  const { user, playlists } = useSelector((state) => state.user);
  const { state } = useLocation();
  const { playlistId } = state;
  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  let playlist;
  playlists?.forEach((item) => {
    if (item.id === playlistId) playlist = item;
  });

  return (
    <div className={cx('wrapper')}>
      <Stack w={'100%'} h={'100%'} gap={'0'} flexDirection={{ base: 'column', xl: 'row' }}>
        <Stack sx={css.stack1}>
          <Box sx={css.box1} role="group">
            <Image sx={css.img} src="./assets/img/imgplaylist.png" alt="img" />
            <Stack sx={css.stack2}>
              <FontAwesomeIcon className={cx('btn_play')} icon={faPlayCircle} />
            </Stack>
          </Box>
          <Stack sx={css.stack3}>
            <Stack sx={css.stack4}>
              <h2 className={cx('name_playlist')}>
                {playlist?.name} <FontAwesomeIcon icon={faPen} />
              </h2>
              <h3 className={cx('artist_playlist')}>
                Tạo bởi {user?.first_name} {user?.last_name}
              </h3>
              <h3 className={cx('status_playlist')}>Công khai</h3>
            </Stack>
            <Stack sx={css.stack5}>
              <button className={cx('btn_keep_playing')}>
                <FontAwesomeIcon icon={faPlay} />
                <span>TIẾP TỤC PHÁT</span>
              </button>
              <Tippy
                interactive
                placement="right"
                visible={visible}
                onClickOutside={hide}
                offset={[-130, 0]}
                render={(attrs) => (
                  <PlaylistOptions hide={hide} playlist={playlist} attrs={attrs} />
                )}
              >
                <button onClick={visible ? hide : show} className={cx('more_option')}>
                  <FontAwesomeIcon icon={faEllipsis} />
                </button>
              </Tippy>
            </Stack>
          </Stack>
        </Stack>
        <Box sx={css.box2}>
          {playlist?.songs?.length === 0 && (
            <div className={cx('no_content_box')}>
              <FontAwesomeIcon icon={faMusic} />
              <span>Không có bài hát trong playlist của bạn</span>
            </div>
          )}
          {playlist?.songs?.length > 0 && (
            <>
              <div className={cx('media-playlist-header')}>
                <span className={cx('span1')}>BÀI HÁT</span>
                <span className={cx('span2')}>ALBUM</span>
                <span className={cx('span3')}>THỜI GIAN</span>
              </div>
              {playlist?.songs?.map((song) => {
                return <SongItem favoriteSong key={song.id} song={song} />;
              })}
            </>
          )}
        </Box>
      </Stack>
    </div>
  );
}

export default Playlist;

const css = {
  stack1: {
    w: { base: '100%', xl: '300px' },
    h: { base: '230px', xl: '514.6px' },
    pb: { base: '30px' },
    flexDirection: { base: 'row', xl: 'column' },
    gap: { base: '20px', xl: '0' },
  },
  box1: {
    minW: { base: '200px', xl: '300px' },
    w: { base: '200px', xl: '100%' },
    h: { base: '200px', xl: '300px' },
    minH: { base: '200px', xl: '300px' },
    borderRadius: '8px',
    role: 'group',
    position: 'relative',
    overflow: 'hidden',
  },
  img: {
    display: 'block',
    w: '100%',
    transition: 'transform 0.4s linear',
    _groupHover: { filter: 'brightness(55%)', transform: 'scale(1.1)' },
    src: './assets/img/imgplaylist.png',
    alt: 'img',
  },
  stack2: {
    _groupHover: { opacity: '1' },
    opacity: '0',
    position: 'absolute',
    top: '0',
    left: '0',
    w: '100%',
    h: '100%',
    bgColor: 'transparent',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  stack3: {
    mt: { base: '0', xl: '12px' },
    w: '100%',
    dir: 'column',
    gap: '0',
    justifyContent: { base: 'space-between', xl: 'center' },
  },
  stack4: {
    w: '100%',
    h: '69.2px',
    flexDirection: 'column',
    alignItems: { base: 'start', xl: 'center' },
    gap: '0',
  },
  stack5: {
    gap: { base: '10px', xl: '0' },
    w: '100%',
    mt: '16px',
    alignItems: { base: 'flex-end', xl: 'center' },
    flexDir: { base: 'row', xl: 'column' },
  },
  box2: {
    w: { base: '100%', xl: 'calc(100% - 300px)' },
    h: { base: 'calc(100% - 230px)', xl: '100%' },
    pl: { base: '0', xl: '30px' },
  },
};
