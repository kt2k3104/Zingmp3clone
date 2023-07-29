import Tippy from '@tippyjs/react';
import Tippyy from '@tippyjs/react/headless';
import styles from './PlaylistItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faCode, faDownload, faFileCirclePlus, faLink, faShare } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare, faTrashAlt } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function PlaylistItem({ children }) {
  return (
    <li className={cx('playlist-item')}>
      <span>{children}</span>
      <Tippyy
        interactive
        placement="right"
        trigger="click"
        render={(attrs) => (
          <ul className={cx('playlist-option')} tabIndex="-1" {...attrs}>
            <li>
              <FontAwesomeIcon icon={faFileCirclePlus} />
              <span>Thêm vào danh sách phát</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faDownload} />
              <span>Tải xuống</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faLink} />
              <span>Sao chép link</span>
            </li>
            <Tippyy
              interactive
              render={(attrs) => (
                <ul className={cx('share-option')} tabIndex="-1" {...attrs}>
                  <li>
                    <img
                      className={cx('icon-fb')}
                      src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.9.57/static/media/facebook.d62c237b.svg"
                      alt="fb"
                    />
                    <span>Facebook</span>
                  </li>
                  <li>
                    <img
                      className={cx('icon-zalo')}
                      src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.9.57/static/media/zalo.d94c16f4.svg"
                      alt="zalo"
                    />
                    <span>Zalo</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCode} />
                    <span>Mã nhúng</span>
                  </li>
                </ul>
              )}
            >
              <li>
                <FontAwesomeIcon icon={faShare} />
                <span>Chia sẻ</span>
                <FontAwesomeIcon className={cx('icon-angleright')} icon={faAngleRight} />
              </li>
            </Tippyy>
            <li>
              <FontAwesomeIcon icon={faPenToSquare} />
              <span>Chỉnh sửa playlist</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faTrashAlt} />
              <span>Xóa playlist</span>
            </li>
          </ul>
        )}
      >
        <Tippy content={'Khác'}>
          <button>...</button>
        </Tippy>
      </Tippyy>
    </li>
  );
}

export default PlaylistItem;
