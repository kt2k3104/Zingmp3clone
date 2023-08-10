import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

import Listen from './Listen/Listen';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Sidebar />
        <div className={cx('container')}>
          <Navbar />

          <div className={cx('content')}>{children}</div>
        </div>
      </div>
      <div className={cx('listen')}>
        <Listen />
      </div>
    </div>
  );
}

export default DefaultLayout;
