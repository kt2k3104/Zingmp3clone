import styles from './Playlists.module.scss';
import classNames from 'classnames/bind';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  TabIndicator,
  VStack,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import PlaylistItem from '../ThuVien/components/PlaylistItem/PlaylistItem';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function Playlists() {
  const { playlists } = useSelector((state) => state.user);

  return (
    <div className={cx('wrapper')}>
      <Tabs variant="enclosed" sx={css.tabs}>
        <TabList borderBottomColor={'hsla(0, 0%, 100%, 0.1)'} padding={' 0 59px'} h={'48px'}>
          <Box display={'flex'} alignItems={'center'} fontSize={'24px'} fontWeight={'700'}>
            <Box sx={css.box1}>Playlist</Box>
          </Box>
          <Tab ml={'20px'} sx={css.tab1}>
            TẤT CẢ
          </Tab>
          <Tab sx={css.tab1}>CỦA TÔI</Tab>
        </TabList>
        <TabIndicator height="1px" bg="#9b4de0" borderRadius="1px" />

        <TabPanels p={'20px 48px'}>
          <TabPanel
            display={'grid'}
            gridTemplateColumns={'18% 18% 18% 18% 18%'}
            gap={'28px'}
            rowGap={'30px'}
          >
            <VStack sx={css.vstack}>
              <FontAwesomeIcon icon={faPlusCircle} />
              <span>Tạo playlist mới</span>
            </VStack>
            {playlists?.map((playlist, index) => {
              return (
                <div
                  key={playlist.id}
                  className={cx('playlist_item', index === 3 ? 'hideplaylist' : '')}
                >
                  <PlaylistItem playlist={playlist} />
                </div>
              );
            })}
          </TabPanel>
          <TabPanel>Chả khác gì tất cả, quay cm lại kia mà xem</TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default Playlists;

const css = {
  tabs: {
    position: 'relative',
    w: '100%',
    pb: '35px',
  },
  tab1: {
    fontSize: '14px',
    p: '15px 0 17px',
    mr: '40px',
    colo: '#dadada',
    fontWeight: '500',
    _selected: { color: 'white' },
  },
  box1: {
    display: 'flex',
    alignItems: 'center',
    height: '60%',
    p: '10px 20px 10px 0',
    borderRight: '1px solid hsla(0,0%,100%,0.1)',
  },
  vstack: {
    w: '100%',
    border: '1px solid hsla(0,0%,100%,0.1)',
    fontSize: '15px',
    borderRadius: '4px',
    justifyContent: 'center',
    cursor: 'pointer',
  },
};
