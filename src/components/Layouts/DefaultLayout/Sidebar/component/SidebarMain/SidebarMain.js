import { NavLink } from 'react-router-dom';
import styles from './SidebarMain.module.scss';
import classNames from 'classnames/bind';

import customIcon from '~/components/UI/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function SidebarMain() {
  const { isLogined } = useSelector((state) => state.user);

  return (
    <>
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
    </>
  );
}

export default SidebarMain;