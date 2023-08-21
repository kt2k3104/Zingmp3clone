import styles from './Listen.module.scss';
import classNames from 'classnames/bind';

import { useEffect, useRef, useState } from 'react';

import PlaylistsSidebar from './components/PlaylistsSidebar';
import PlayerControlLeft from './components/PlayerControlLeft';
import PlayerControlCenter from './components/PlayerControlCenter';
import PlayerControlRight from './components/PlayerControlRight';
import { useDispatch, useSelector } from 'react-redux';
import { nextSong, pauseSong, setCurrentSong } from './ListenSlice';

const cx = classNames.bind(styles);

function Listen() {
  const [isOpenPlaylists, setIsOpenPlaylists] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isChange, setIsChange] = useState(false);

  const { isPlaying, isRepeat, isRandom, currentSong, currentIndex, queue } = useSelector(
    (state) => state.listen,
  );
  const dispatch = useDispatch();
  const audioRef = useRef();

  const handleClickBtnPlaylists = (e) => {
    if (isOpenPlaylists === true) setIsOpenPlaylists(false);
    else setIsOpenPlaylists(true);
  };

  const handleOnTimeUpdate = function (e) {
    if (!duration) {
      setDuration(audioRef.current.duration);
    }
    if (!isChange) {
      setProgress(e.target.currentTime);
    }
  };

  const handleEndedAudio = () => {
    if (isRepeat === 2 && currentSong.id === queue.length) {
      dispatch(nextSong());
    } else if (isRepeat === 3) {
      audioRef.current.play();
    }
    if (isRandom) {
      const newSongIndex = Math.floor(Math.random() * queue.length);
      if (newSongIndex !== currentIndex) dispatch(setCurrentSong(queue[newSongIndex]));
      else dispatch(nextSong());
    } else if (currentSong.id !== queue.length) dispatch(nextSong());
    else {
      setProgress(0);
      dispatch(pauseSong());
    }
  };

  useEffect(() => {
    setDuration(audioRef.current.duration);
  }, [currentSong]);

  useEffect(() => {
    if (isPlaying) audioRef.current.play();
    else audioRef.current.pause();
  }, [isPlaying, currentSong]);

  return (
    <div className={cx('player-controls')}>
      <PlayerControlLeft />
      <PlayerControlCenter
        progress={progress}
        duration={duration}
        setProgress={setProgress}
        setDuration={setDuration}
        setIsChange={setIsChange}
        audioRef={audioRef}
      />
      <PlayerControlRight
        handleClickBtnPlaylists={handleClickBtnPlaylists}
        isOpenPlaylists={isOpenPlaylists}
        audioRef={audioRef}
      />
      <PlaylistsSidebar showPlaylists={isOpenPlaylists} />
      <audio
        onTimeUpdate={handleOnTimeUpdate}
        onEnded={handleEndedAudio}
        id="audio"
        src={currentSong?.url}
        ref={audioRef}
      ></audio>
    </div>
  );
}

export default Listen;
