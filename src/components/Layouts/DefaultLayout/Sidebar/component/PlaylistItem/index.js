import Tippy from '@tippyjs/react';
import Tippyy from '@tippyjs/react/headless';
import styles from './PlaylistItem.module.scss';
import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleRight,
  faCode,
  faDownload,
  faFileCirclePlus,
  faLink,
  faShare,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function PlaylistItem({ children }) {
  const optionElement = useRef();
  const [isVisible, setIsVisible] = useState(false);

  // const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);

  // console.log(optionElement);

  const handleShowPlaylistOption = (e) => {
    setIsVisible((isVisible) => !isVisible);
  };

  const render = (prop) => {
    return (
      <ul className={cx('playlist-option')} tabIndex="-1" {...prop} ref={optionElement}>
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
    );
  };

  return (
    <li className={cx('playlist-item')}>
      <span ref={optionElement}>{children}</span>
      <Tippyy interactive placement="right" visible={isVisible} onClickOutside={hide} offset={[130, 0]} render={render}>
        <Tippy content={'Khác'}>
          <button onClick={handleShowPlaylistOption}>...</button>
        </Tippy>
      </Tippyy>
    </li>
  );
}

export default PlaylistItem;
