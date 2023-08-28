import { NavLink, useNavigate } from 'react-router-dom';
import styles from './SidebarOptions.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';

import { useSelector } from 'react-redux';
import { useRef } from 'react';

import customIcon from '~/components/UI/Icons';
import PlaylistItem from '../PlaylistItem';

const cx = classNames.bind(styles);

function SidebarOptions({ isScrollTop }) {
  const { isLogined, playlists } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const hiddenDivElement = useRef();

  return (
    <>
      <NavLink
        className={({ isActive, isPending }) => {
          if (isActive) return cx('isActive');
          if (isPending) return cx('isPending');

          return cx('item');
        }}
        to={'/moi-phat-hanh'}
      >
        <customIcon.IconMusic />
        <span>BXH Nhạc Mới</span>
        <FontAwesomeIcon className={cx('playicon')} icon={faCirclePlay} />
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) => {
          if (isActive) return cx('isActive');
          if (isPending) return cx('isPending');

          return cx('item');
        }}
        to={'/hub'}
      >
        <customIcon.IconChuDe />
        <span>Chủ Đề & Thể Loại</span>
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) => {
          if (isActive) return cx('isActive');
          if (isPending) return cx('isPending');

          return cx('item');
        }}
        to={'/top100'}
      >
        <customIcon.IconTop100 />
        <span>Top 100</span>
      </NavLink>
      {isLogined && (
        <>
          <div className={cx('vip-banner-sidebar')}>
            <div className={cx('text')}>Nghe nhạc không quảng cáo cùng kho nhạc PREMIUM</div>
            <a
              className="zm-btn is-medium is-outlined is-upper button"
              tabIndex="0"
              href="https://zingmp3.vn/vip?utm_source=desktop&amp;utm_campaign=VIP&amp;utm_medium=sidebar"
              target="_blank"
              rel="noreferrer"
            >
              NÂNG CẤP TÀI KHOẢN
            </a>
          </div>
          <NavLink
            className={({ isActive, isPending }) => {
              if (isActive) return cx('noactive');
              if (isPending) return cx('isPending');

              return cx('item');
            }}
            to={'/mymusic/history'}
          >
            <customIcon.IconRecently />
            <span>Nghe gần đây</span>
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) => {
              if (isActive) return cx('noactive');
              if (isPending) return cx('isPending');

              return cx('item');
            }}
            to={'/mymusic/song/favorite'}
          >
            <customIcon.IconLove />
            <span>Bài hát yêu thích</span>
            <FontAwesomeIcon className={cx('playicon')} icon={faCirclePlay} />
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) => {
              if (isActive) return cx('noactive');
              if (isPending) return cx('isPending');

              return cx('item');
            }}
            to={'/mymusic/library/playlist'}
          >
            <customIcon.IconPlaylist />
            <span>Playlist</span>
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) => {
              if (isActive) return cx('noactive');
              if (isPending) return cx('isPending');

              return cx('item');
            }}
            to={'/mymusic/album'}
          >
            <customIcon.IconAlbum />
            <span>Album</span>
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) => {
              if (isActive) return cx('noactive');
              if (isPending) return cx('isPending');

              return cx('item', 'mb16');
            }}
            to={'/mymusic/song/upload'}
          >
            <customIcon.IconUpload />
            <span>Đã tải lên</span>
          </NavLink>
          <div className={cx('divide')}></div>
          <ul className={cx('menu-playlist')}>
            {playlists.length > 0 &&
              playlists.map((playlist) => {
                return (
                  <PlaylistItem playlist={playlist} key={playlist.id}>
                    {playlist.name}
                  </PlaylistItem>
                );
              })}
            <div ref={hiddenDivElement}></div>
          </ul>
        </>
      )}
      {!isLogined && (
        <>
          <div className={cx('vip-banner-sidebar')}>
            <div className={cx('text')}>Đăng nhập để khám phá playlist dành riêng cho bạn</div>
            <button
              onClick={() => {
                navigate('/auth');
              }}
            >
              ĐĂNG NHẬP
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default SidebarOptions;
