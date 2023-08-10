import { useState } from 'react';
import styles from './PlayerControlRight.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeTimes, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { faWindowRestore } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react';
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react';

import customIcon from '~/components/UI//Icons';

const cx = classNames.bind(styles);

function PlayerControlRight({ handleClickBtnPlaylists, isOpenPlaylists }) {
  const [isHasVolume, setIsHasVolume] = useState(true);

  const handleClickBtnVolume = (e) => {
    if (isHasVolume === true) {
      setIsHasVolume(false);
      Slider.Root.value = [0];
    } else setIsHasVolume(true);
  };

  return (
    <div className={cx('right')}>
      {/* <Tippy content="MV"> */}
      <button className={cx('btn-mv')}>
        <div className={cx('icon-mv')}>
          <p>MV</p>
        </div>
      </button>
      {/* </Tippy> */}
      <Tippy content="Xem lời bài hát">
        <button className={cx('btn-karaoke')}>
          <customIcon.IconKaraoke />
        </button>
      </Tippy>
      <Tippy content="Chế độ cửa sổ">
        <button className={cx('btn-window')}>
          <FontAwesomeIcon icon={faWindowRestore} />
        </button>
      </Tippy>
      <div className={cx('btn-volume')}>
        {isHasVolume ? (
          <button onClick={handleClickBtnVolume}>
            <FontAwesomeIcon icon={faVolumeUp} />
          </button>
        ) : (
          <button onClick={handleClickBtnVolume}>
            <FontAwesomeIcon icon={faVolumeTimes} />
          </button>
        )}
        <Slider aria-label="slider-ex-1" defaultValue={30} w={'70px'} h={'5px'} p={'2px'} role="group">
          <SliderTrack
            h={'3px'}
            bg={'hsla(0, 0%, 100%, 0.3)'}
            _groupHover={{ h: '5px', borderRadius: '3px' }}
            _groupActive={{ h: '5px', borderRadius: '3px' }}
          >
            <SliderFilledTrack bg={'#fff'} />
          </SliderTrack>
          <SliderThumb
            w={'12px'}
            h={'12px'}
            display={'none'}
            _focus={{ boxShadow: 'none' }}
            _groupHover={{ display: 'block' }}
            _groupActive={{ display: 'block' }}
          />
        </Slider>
      </div>
      <div className={cx('divide')}></div>
      <Tippy delay={[300, 0]} content="Danh sách phát">
        <div
          onClick={handleClickBtnPlaylists}
          className={cx('btn-playlists', isOpenPlaylists ? 'btn-playlists-onclick' : '')}
        >
          <customIcon.IconListMusic />
        </div>
      </Tippy>
    </div>
  );
}

export default PlayerControlRight;
