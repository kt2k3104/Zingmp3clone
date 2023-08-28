import styles from './NewRelease.module.scss';
import classNames from 'classnames/bind';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import NewReleaseSong from './NewReleaseSong/NewReleaseSong';

const cx = classNames.bind(styles);

function NewRelease({ newReleaseSongs }) {
  return (
    <div className={cx('new_release')}>
      <h3 className={cx('title')}>Mới Phát Hành</h3>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList>
          <Tab
            fontSize={'12px'}
            padding={'3px 24px 2px'}
            lineHeight={'1.5'}
            color={'#fff'}
            fontWeight={'400'}
            border={'1px solid hsla(0,0%,100%,0.1)'}
            mr={'15px'}
            _selected={{
              bgColor: '#9b4de0',
              border: 'none',
            }}
          >
            TẤT CẢ
          </Tab>
          <Tab
            fontSize={'12px'}
            padding={'3px 24px 2px'}
            lineHeight={'1.5'}
            color={'#fff'}
            fontWeight={'400'}
            border={'1px solid hsla(0,0%,100%,0.1)'}
            mr={'15px'}
            _selected={{
              bgColor: '#9b4de0',
              border: 'none',
            }}
          >
            VIỆT NAM
          </Tab>
          <Tab
            fontSize={'12px'}
            padding={'3px 24px 2px'}
            lineHeight={'1.5'}
            color={'#fff'}
            fontWeight={'400'}
            border={'1px solid hsla(0,0%,100%,0.1)'}
            _selected={{
              bgColor: '#9b4de0',
              border: 'none',
            }}
          >
            QUỐC TẾ
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel
            p={'15px 0'}
            display={'grid'}
            gridTemplateColumns={'auto auto auto'}
            justifyContent={'space-between'}
          >
            {newReleaseSongs?.map((song, index) => {
              return <NewReleaseSong key={index} song={song} />;
            })}
          </TabPanel>
          <TabPanel>
            <p>Chưa có đâu hehe</p>
          </TabPanel>
          <TabPanel>
            <p>Cũng chưa có đâu hehe</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <span className={cx('btn_all')}>
        TẤT CẢ <FontAwesomeIcon icon={faChevronRight} />
      </span>
    </div>
  );
}

export default NewRelease;
