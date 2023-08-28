import styles from './Playlists.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Playlists() {
  return <div className={cx('wrapper')}>Playlist</div>;
}

export default Playlists;
