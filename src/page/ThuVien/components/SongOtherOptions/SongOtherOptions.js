import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SongOtherOptions.module.scss';
import classNames from 'classnames/bind';
import {
  faBan,
  faBroadcastTower,
  faChevronRight,
  faDownload,
  faListOl,
  faPencil,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
import { faHandPointRight, faListAlt, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function SongOtherOptions({ attrs, song }) {
  const { user } = useSelector((state) => state.user);

  return (
    <div className={cx('song_other_option')} tabIndex="-1" {...attrs}>
      <div className={cx('song-info')}>
        <div className={cx('song-thumb')}>
          <img src={song.artwork} alt="img" />
        </div>
        <div className={cx('card-info')}>
          <span>{song.name}</span>
          <h3>{song.artist}</h3>
        </div>
      </div>
      <div className={cx('list_btn')}>
        <button>
          <FontAwesomeIcon icon={faDownload} />
          <span>Tải xuống</span>
        </button>
        <button>
          <FontAwesomeIcon icon={faListOl} />
          <span>Lời bài hát</span>
        </button>
        <button>
          <FontAwesomeIcon icon={faBan} />
          <span>Chặn</span>
        </button>
      </div>
      <button>
        <i>
          <FontAwesomeIcon icon={faListAlt} />
        </i>
        Thêm vào danh sách phát
      </button>
      <button>
        <i>
          <FontAwesomeIcon icon={faHandPointRight} />
        </i>
        Phát tiếp theo
      </button>
      <button>
        <i>
          <FontAwesomeIcon icon={faBroadcastTower} />
        </i>
        Phát nội dung tương tự
      </button>
      <Tippy
        interactive
        placement="left"
        trigger="mouseenter"
        render={(attrs) => (
          <div className={cx('hehe')} tabIndex="-1" {...attrs}>
            hehe
          </div>
        )}
      >
        <button>
          <i>
            <FontAwesomeIcon icon={faPlusCircle} />
          </i>
          Thêm vào playlist <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </Tippy>
      <button>
        <i>
          <FontAwesomeIcon icon={faPencil} />
        </i>
        Chỉnh sửa
      </button>
      <button>
        <i>
          <FontAwesomeIcon icon={faTrashAlt} />
        </i>
        Xóa
      </button>
      <p>Tải lên bởi {user.first_name + ' ' + user.last_name}</p>
    </div>
  );
}

export default SongOtherOptions;
