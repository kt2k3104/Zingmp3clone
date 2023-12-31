import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './bxhnhacmoi.module.scss';
import classNames from 'classnames/bind';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import SongItem from '../zingchart/components/songItem/SongItem';

const cx = classNames.bind(styles);

function BXHNhacMoi() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <h3>BXH Nhạc Mới</h3>
        <FontAwesomeIcon icon={faPlayCircle} />
      </div>
      <div className={cx('content')}>
        {list.map((song, index) => {
          return <SongItem song={song} key={index} />;
        })}
      </div>
    </div>
  );
}

export default BXHNhacMoi;

const list = [
  {
    prefix: '1',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '2',
    artwork: '/assets/img/bxhnhacmoi/2.png',
    name: 'Từ Nơi Tôi Sinh Ra',
    artist: 'Jack-J97',
    duration: '03:52',
  },
  {
    prefix: '3',
    artwork: '/assets/img/bxhnhacmoi/3.png',
    name: 'Sao Trời Làm Gió',
    artist: 'Nal, CT',
    duration: '05:23',
  },
  {
    prefix: '4',
    artwork: '/assets/img/bxhnhacmoi/4.png',
    name: 'Missing You',
    artist: 'LyLy',
    duration: '04:32',
  },
  {
    prefix: '5',
    artwork: '/assets/img/bxhnhacmoi/5.png',
    name: 'Vô Tree',
    artist: 'KeyO',
    duration: '03:43',
  },
  {
    prefix: '6',
    artwork: '/assets/img/bxhnhacmoi/6.png',
    name: 'Ta Đã Từng Thề Là',
    artist: 'H-IKEY, HHD',
    duration: '05:39',
  },
  {
    prefix: '7',
    artwork: '/assets/img/bxhnhacmoi/7.png',
    name: 'Làm Sao Để Em Biết',
    artist: 'Khải Đăng',
    duration: '03:36',
  },
  {
    prefix: '8',
    artwork: '/assets/img/bxhnhacmoi/8.png',
    name: 'Cung Bậc Sầu',
    artist: 'Mr.Siro',
    duration: '05:10',
  },
  {
    prefix: '9',
    artwork: '/assets/img/bxhnhacmoi/9.png',
    name: 'Quan Trọng Là Ai Thương Ai',
    artist: 'Chu Bin',
    duration: '05:35',
  },
  {
    prefix: '10',
    artwork: '/assets/img/bxhnhacmoi/10.png',
    name: 'Sao Chẳng Đành Quên',
    artist: 'DEE Trần',
    duration: '03:44',
  },
  {
    prefix: '11',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '12',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '13',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '14',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '15',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '16',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '17',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '18',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '19',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '20',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '21',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '22',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '23',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '24',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '25',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '26',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '27',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '28',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '29',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '30',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '31',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '32',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '33',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '34',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '35',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '36',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '37',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '38',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '39',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '40',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '41',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '42',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '43',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '44',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '45',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '46',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '47',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '48',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '49',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '50',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '51',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '52',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '53',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '54',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '55',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '56',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '57',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '58',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '59',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '60',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '61',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '62',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '63',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '64',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '65',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '66',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '67',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '68',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '69',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '70',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '71',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '72',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '73',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '74',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '75',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '76',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '77',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '78',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '79',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '80',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '81',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '82',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '83',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '84',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '85',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '86',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '87',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '88',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '89',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '90',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '91',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '92',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '93',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '94',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '95',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '96',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '97',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '98',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '99',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '100',
    artwork: '/assets/img/bxhnhacmoi/1.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
];
