import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { NavLink, useNavigate } from 'react-router-dom';

import customIcon from '~/components/UI/Icons';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import PlaylistItem from './component/PlaylistItem';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function Sidebar() {
  const [isScrollTop, setIsScrollTop] = useState(false);
  const { isLogined } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const hiddenDivElement = useRef();

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    console.log(scrollTop);
    if (scrollTop > 0) setIsScrollTop(true);
    else setIsScrollTop(false);
  };

  return (
    <aside className={cx('wrapper')}>
      <div className={cx('logo')}>
        <div className={cx('votri')}>
          <button className={cx('btn-logo')}>
            <div className={cx('zmp3-logo')}></div>
          </button>
        </div>
      </div>
      <div className={cx('main')}>
        <NavLink
          className={({ isActive, isPending }) => {
            if (isActive) return cx('isActive');
            if (isPending) return cx('isPending');

            return cx('item');
          }}
          to={'/'}
        >
          <customIcon.IconKhampha />
          <span className={cx('pt2')}>Khám Phá</span>
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) => {
            if (isActive) return cx('isActive');
            if (isPending) return cx('isPending');

            return cx('item');
          }}
          to={'/zingchart'}
        >
          <customIcon.IconZingchart />
          <span className={cx('pt2')}>#zingchart</span>
          <FontAwesomeIcon className={cx('playicon')} icon={faCirclePlay} />
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) => {
            if (isActive) return cx('isActive');
            if (isPending) return cx('isPending');

            return cx('item');
          }}
          to={'/radio'}
        >
          <customIcon.IconRadio />
          <span className={cx('item-live', 'pt2')}>
            Radio{' '}
            <img
              src="https://zjs.zmdcdn.me/zmp3-desktop/dev/147506/static/media/live-tag.e25dd240.svg"
              alt="live"
            ></img>
          </span>
          <FontAwesomeIcon className={cx('playicon')} icon={faCirclePlay} />
        </NavLink>
        {isLogined && (
          <NavLink
            className={({ isActive, isPending }) => {
              if (isActive) return cx('isActive');
              if (isPending) return cx('isPending');

              return cx('item');
            }}
            to={'/mymusic'}
          >
            <customIcon.IconLibrary />
            <span className={cx('pt2')}>Thư Viện</span>
            <FontAwesomeIcon className={cx('playicon')} icon={faCirclePlay} />
          </NavLink>
        )}
        {!isLogined && (
          <NavLink
            className={({ isActive, isPending }) => {
              if (isActive) return cx('isActive');
              if (isPending) return cx('isPending');

              return cx('item');
            }}
            to={'/auth'}
          >
            <customIcon.IconLibrary />
            <span className={cx('pt2')}>Thư Viện</span>
            <FontAwesomeIcon className={cx('playicon')} icon={faCirclePlay} />
          </NavLink>
        )}
      </div>
      <div className={cx('divide')}></div>
      <div onScroll={handleScroll} className={cx('option', isScrollTop ? 'is-mark' : '')}>
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
                class="zm-btn is-medium is-outlined is-upper button"
                tabindex="0"
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
              <PlaylistItem isScrollTop={isScrollTop}>Playlist 1</PlaylistItem>
              <PlaylistItem>Playlist 2</PlaylistItem>
              <PlaylistItem>Playlist 3</PlaylistItem>
              <PlaylistItem>Playlist 4</PlaylistItem>
              <PlaylistItem>Playlist 4</PlaylistItem>
              <PlaylistItem>Playlist 4</PlaylistItem>
              <PlaylistItem>Playlist 4</PlaylistItem>
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
      </div>
      <div className={cx('add-new-playlist')}>
        <FontAwesomeIcon icon={faPlus} />
        <span>Tạo playlist mới</span>
      </div>
    </aside>
  );
}

export default Sidebar;
