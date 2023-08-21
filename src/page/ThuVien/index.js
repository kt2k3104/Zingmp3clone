import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Thuvien.module.scss';
import classNames from 'classnames/bind';
import { faChevronRight, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import PlaylistItem from './components/PlaylistItem/PlaylistItem';
import FavoriteSong from './components/FavoriteSong/FavoriteSong';
import { useEffect } from 'react';
import { setQueueFavorite } from '~/components/Layouts/DefaultLayout/Listen/ListenSlice';

const cx = classNames.bind(styles);

function ThuVien() {
  const { queueFavorite } = useSelector((state) => state.listen);
  const { isLogined, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setQueueFavorite());
  }, [dispatch]);
  return (
    <div className={cx('wrapper')}>
      {isLogined && (
        <div className={cx('inner')}>
          <div className={cx('header')}>
            <div className={cx('text')}>Thư viện</div>
            <FontAwesomeIcon icon={faPlayCircle} />
          </div>
          <div className={cx('inner-playlists')}>
            <div className={cx('title')}>
              <h3>PLAYLIST</h3>
              <button>+</button>
              <h4>
                TẤT CẢ <FontAwesomeIcon icon={faChevronRight} />
              </h4>
            </div>
            <div className={cx('playlists')}>
              <PlaylistItem />
              <PlaylistItem />
              <PlaylistItem />
              <PlaylistItem />
              <PlaylistItem />
            </div>
          </div>
          <div className={cx('content')}>
            <Tabs position="relative" variant="enclosed">
              <TabList borderBottomColor={'hsla(0, 0%, 100%, 0.1)'}>
                <Tab
                  fontSize={'14px'}
                  p={'15px 0'}
                  mr={'40px'}
                  color={'#dadada'}
                  fontWeight={'500'}
                  _selected={{ color: 'white' }}
                >
                  BÀI HÁT
                </Tab>
                <Tab
                  fontSize={'14px'}
                  p={'15px 0'}
                  mr={'40px'}
                  color={'#dadada'}
                  fontWeight={'500'}
                  _selected={{ color: 'white' }}
                >
                  PODCAST
                </Tab>
                <Tab
                  fontSize={'14px'}
                  p={'15px 0'}
                  mr={'40px'}
                  color={'#dadada'}
                  fontWeight={'500'}
                  _selected={{ color: 'white' }}
                >
                  ALBUM
                </Tab>
                <Tab
                  fontSize={'14px'}
                  p={'15px 0'}
                  mr={'40px'}
                  color={'#dadada'}
                  fontWeight={'500'}
                  _selected={{ color: 'white' }}
                >
                  MV
                </Tab>
              </TabList>
              <TabIndicator height="1px" bg="#9b4de0" borderRadius="1px" />

              <TabPanels>
                <TabPanel p={'28px 0 0 0'}>
                  <Tabs variant="soft-rounded" colorScheme="purple">
                    <TabList>
                      <Tab
                        fontSize={'12px'}
                        padding={'3px 10px 2px'}
                        lineHeight={'1.5'}
                        color={'#fff'}
                        fontWeight={'400'}
                        border={'1px solid #fff'}
                        _selected={{ bgColor: '#9b4de0', border: 'none' }}
                      >
                        YÊU THÍCH
                      </Tab>
                      <Tab
                        fontSize={'12px'}
                        padding={'3px 10px 2px'}
                        ml={'16px'}
                        color={'#fff'}
                        fontWeight={'400'}
                        border={'1px solid #fff'}
                        _selected={{ bgColor: '#9b4de0', border: 'none' }}
                      >
                        ĐÃ TẢI LÊN
                      </Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel p={'20px 0 0 0'}>
                        <div className={cx('media-favorite-header')}>
                          <span className={cx('span1')}>BÀI HÁT</span>
                          <span className={cx('span2')}>ALBUM</span>
                          <span className={cx('span3')}>THỜI GIAN</span>
                        </div>
                        {queueFavorite?.length !== 0 &&
                          queueFavorite?.map((song) => {
                            return <FavoriteSong song={song} key={song.id} />;
                          })}
                      </TabPanel>
                      <TabPanel def>
                        {user?.songs?.length === 0 && <p>Chưa có bài hát được tải lên</p>}
                        {user?.songs?.length !== 0 &&
                          user?.songs?.map((song) => {
                            return <FavoriteSong song={song} key={song.id} />;
                          })}
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </TabPanel>
                <TabPanel>
                  <p>POSTCAST!</p>
                </TabPanel>
                <TabPanel>
                  <p>ALBUM!</p>
                </TabPanel>
                <TabPanel>
                  <p>MV!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </div>
      )}
    </div>
  );
}

export default ThuVien;
