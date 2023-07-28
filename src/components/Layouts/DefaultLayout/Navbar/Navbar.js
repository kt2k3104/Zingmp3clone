import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faClose, faGear, faSearch } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import customIcon from '../../../UI/Icons/index';

import Tippyy from '@tippyjs/react/headless';
import SearchResult from './component/SearchResult';
import MenuSetting from './component/MenuSetting';
import avt from '~/img/dieuthuong.jpg';
import UserOption from './component/UserOption';

// import { NavLink, useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Navbar() {
  // const [searchResult, setSearchResult] = useState([]);
  const [isFocus, setIsFocus] = useState(false);

  const inputElement = useRef();

  useEffect(() => {
    // setTimeout(() => {
    //   setSearchResult([0]);
    // }, 0);
  }, []);

  const handleInputBlur = (e) => {
    setIsFocus(false);
  };
  const handleInputFocus = (e) => {
    setTimeout(() => {
      setIsFocus(true);
    }, 200);
  };

  return (
    <header className={cx('header')}>
      <div className={cx('wrapper')}>
        <div className={cx('left')}>
          <button className={cx('btn-back')}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button className={cx('btn-forward')}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
          <form>
            <Tippyy interactive={true} visible={isFocus} render={(attrs) => <SearchResult {...attrs} />}>
              <div
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                className={cx(isFocus ? 'search-is-active' : 'searchh')}
              >
                <button className={cx('btn-search')}>
                  <FontAwesomeIcon icon={faSearch} />
                </button>
                <div className={cx('input-wrapper')}>
                  <input
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    ref={inputElement}
                    type="text"
                    className={cx('input-placehoder')}
                    placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                  />
                  {isFocus && (
                    <button>
                      <FontAwesomeIcon icon={faClose} />
                    </button>
                  )}
                </div>
              </div>
            </Tippyy>
          </form>
        </div>
        <div className={cx('right')}>
          <div className={cx('download-desktop-app')}>
            <a className={cx('download-desktop-icon')} target="_blank" rel="noreferrer" href="https://zingmp3.vn/">
              <customIcon.DownloadIcon />
              <span>Tải bản Windows</span>
            </a>
            <div></div>
          </div>
          <Tippyy interactive trigger="click" render={(attrs) => <MenuSetting {...attrs} />}>
            <div className={cx('setting-item')}>
              <Tippy content="Cài đặt">
                <button>
                  <FontAwesomeIcon icon={faGear} />
                </button>
              </Tippy>
            </div>
          </Tippyy>

          <Tippyy
            interactive
            trigger="click"
            render={(attrs) => (
              <div className={cx('user-setting-menu')} tabIndex="-1" {...attrs}>
                <UserOption />
              </div>
            )}
          >
            <div className={cx('user-setting')}>
              <img src={avt} alt="dieuthuong" />
            </div>
          </Tippyy>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
