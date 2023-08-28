import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import styles from './SearchResult.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function SearchResult(attrs) {
  return (
    <div
      // onClick={handleSearchResultOnclick}
      id="nav-search"
      className={cx('search-result')}
      tabIndex="-1"
      {...attrs}
    >
      <ul className={cx('suggest-list')}>
        <div className={cx('suggest-list-content')}>
          <div className={cx('search-title')}>Đề xuất cho bạn</div>
          <div>
            <li
              className={cx('suggest-item')}
              onClick={(e) => {
                console.log(e.target);
              }}
            >
              <FontAwesomeIcon icon={faArrowTrendUp} />
              <div className={cx('is-oneline')}>seven</div>
            </li>
          </div>
          <div>
            <li className={cx('suggest-item')}>
              <FontAwesomeIcon icon={faArrowTrendUp} />
              <div className={cx('is-oneline')}>ngày mình chia tay</div>
            </li>
          </div>
          <div>
            <li className={cx('suggest-item')}>
              <FontAwesomeIcon icon={faArrowTrendUp} />
              <div className={cx('is-oneline')}>à lôi</div>
            </li>
          </div>
          <div>
            <li className={cx('suggest-item')}>
              <FontAwesomeIcon icon={faArrowTrendUp} />
              <div className={cx('is-oneline')}>sự mập mờ</div>
            </li>
          </div>
          <div>
            <li className={cx('suggest-item')}>
              <FontAwesomeIcon icon={faArrowTrendUp} />
              <div className={cx('is-oneline')}>đùa hơi quá</div>
            </li>
          </div>
          <div>
            <li className={cx('suggest-item')}>
              <FontAwesomeIcon icon={faArrowTrendUp} />
              <div className={cx('is-oneline')}>ngày mai người ta lấy chồng</div>
            </li>
          </div>
        </div>
      </ul>
    </div>
  );
}

export default SearchResult;
