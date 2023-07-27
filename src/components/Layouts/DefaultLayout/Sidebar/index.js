import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('logo')}>
                <div className={cx('votri')}>
                    <button className={cx('btn-logo')}>
                        <div className={cx('zmp3-logo')}></div>
                    </button>
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </aside>
    );
}

export default Sidebar;
