import { useEffect, useRef, useState } from 'react';
import styles from './PlayerControlCenter.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackwardStep, faForwardStep, faRepeat, faShuffle } from '@fortawesome/free-solid-svg-icons';
import { faCirclePause, faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import {
  changeRandom,
  nextSong,
  noRepeat,
  pauseSong,
  playSong,
  prevSong,
  repeatAll,
  repeatOne,
} from '../../ListenSlice';

const cx = classNames.bind(styles);

function PlayerControlCenter() {
  const dispatch = useDispatch();
  const { isRepeat, isRandom, currentSong, isPlaying } = useSelector((state) => state.listen);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isChange, setIsChange] = useState(false);
  const audioRef = useRef();

  const handleOnTimeUpdate = function (e) {
    if (!isChange) {
      setProgress(e.target.currentTime);
    }
  };

  const handleOnChange = function (value) {
    const currentTime = (value * duration) / 100;
    setProgress(currentTime);
  };

  const handleOnChangeStart = function (value) {
    setIsChange(true);
  };

  const handleOnChangeEnd = function (value) {
    const currentTime = (value * duration) / 100;
    audioRef.current.currentTime = currentTime;
    setIsChange(false);
  };

  useEffect(() => {
    setDuration(audioRef.current.duration);
  }, []);

  useEffect(() => {
    if (isPlaying) audioRef.current.play();
    else audioRef.current.pause();
  }, [isPlaying]);

  return (
    <div className={cx('center')}>
      <div className={cx('actions')}>
        {isRandom ? (
          <button
            onClick={() => {
              dispatch(changeRandom());
            }}
            className={cx('action-btn')}
          >
            <FontAwesomeIcon className={cx('random-on')} icon={faShuffle} />
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch(changeRandom());
            }}
            className={cx('action-btn')}
          >
            <FontAwesomeIcon className={cx('random-off')} icon={faShuffle} />
          </button>
        )}

        <button
          className={cx('action-btn', 'tohonxiu')}
          onClick={() => {
            dispatch(prevSong());
            dispatch(playSong());
          }}
        >
          <FontAwesomeIcon icon={faBackwardStep} />
        </button>
        {isPlaying && (
          <FontAwesomeIcon
            className={cx('play-pause')}
            onClick={() => {
              console.log('pause');
              dispatch(pauseSong());
            }}
            icon={faCirclePause}
          />
        )}
        {!isPlaying && (
          <FontAwesomeIcon
            className={cx('play-pause')}
            onClick={() => {
              console.log('play');
              dispatch(playSong());
            }}
            icon={faCirclePlay}
          />
        )}
        <button
          className={cx('action-btn', 'tohonxiu')}
          onClick={() => {
            dispatch(nextSong());
            dispatch(playSong());
          }}
        >
          <FontAwesomeIcon icon={faForwardStep} />
        </button>
        {isRepeat === 1 ? (
          <button
            onClick={() => {
              dispatch(repeatAll());
            }}
            className={cx('action-btn')}
          >
            <FontAwesomeIcon icon={faRepeat} />
          </button>
        ) : isRepeat === 2 ? (
          <button
            onClick={() => {
              dispatch(repeatOne());
            }}
            className={cx('action-btn')}
          >
            <FontAwesomeIcon className={cx('repeatAll-on')} icon={faRepeat} />
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch(noRepeat());
            }}
            className={cx('action-btn', 'repeatOne-on')}
          >
            <FontAwesomeIcon icon={faRepeat} />
            <p>1</p>
          </button>
        )}
      </div>
      <div className={cx('duration-item')}>
        <span className={cx('time-left')}>00:00</span>
        <Slider
          aria-label="slider-ex-1"
          defaultValue={0}
          h={'5px'}
          p={'2px'}
          role="group"
          value={(progress / duration) * 100 || 0}
          onChange={handleOnChange}
          onChangeEnd={handleOnChangeEnd}
          onChangeStart={handleOnChangeStart}
        >
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
        <span className={cx('time-right')}>00:00</span>
      </div>
      <audio
        onTimeUpdate={handleOnTimeUpdate}
        id="audio"
        src={
          'https://firebasestorage.googleapis.com/v0/b/musicplayer-rnb.appspot.com/o/songs%2FY%C3%AAu%205%20(Masew%20Mix).mp3?alt=media&token=2ede9532-604c-4218-b22f-7d296d380d2d'
        }
        ref={audioRef}
      ></audio>
    </div>
  );
}

export default PlayerControlCenter;
