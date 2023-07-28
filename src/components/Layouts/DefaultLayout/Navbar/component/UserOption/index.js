import styles from './UserOption.module.scss';
import classNames from 'classnames/bind';

import avt from '~/img/dieuthuong.jpg';
import customIcon from '~/components/UI/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faSignOut, faUpload } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function UserOption() {
  return (
    <ul className={cx('menu-list')}>
      <li className={cx('user-setting-account')}>
        <div className={cx('info')}>
          <div className={cx('avt-frame')}>
            <img src={avt} alt="dieuthuong" />
          </div>
          <div className={cx('name')}>
            <p>Trần Đức Khải</p>
            <customIcon.BasicIcon />
          </div>
        </div>
        <a
          className={cx('account-management-link')}
          target="_blank"
          rel="noreferrer"
          href="https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=%s"
        >
          Nâng cấp tài khoản
        </a>
      </li>
      <div className={cx('line-separator')}></div>
      <div className={cx('user-setting-individual')}>
        <h3>Cá nhân</h3>
        <li>
          <FontAwesomeIcon icon={faBan} />
          <span>Danh sách chặn</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faUpload} />
          <span>Tải lên</span>
        </li>
      </div>
      <div className={cx('line-separator')}></div>
      <li className={cx('logout')}>
        <FontAwesomeIcon icon={faSignOut} />
        <span>Đăng xuất</span>
      </li>
    </ul>
  );
}

export default UserOption;
