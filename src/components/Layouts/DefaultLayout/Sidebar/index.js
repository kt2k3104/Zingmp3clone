import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,
  Box,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import SidebarMain from './component/SidebarMain/SidebarMain';
import SidebarOptions from './component/SidebarOptions/SidebarOptions';
import { handleAddPlaylist } from '~/page/Auth/UserSlice';

const cx = classNames.bind(styles);

function Sidebar() {
  const { isLogined, playlists } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isScrollTop, setIsScrollTop] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    console.log(scrollTop);
    if (scrollTop > 0) setIsScrollTop(true);
    else setIsScrollTop(false);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmitAddPlaylist = async (data) => {
    try {
      await dispatch(handleAddPlaylist({ name: data.playlist }));
      reset();
      toast({
        position: 'bottom-left',
        render: () => (
          <Box color="white" p={5} bg="#34224f" borderRadius={'5px'} marginBottom={'90px'}>
            Tạo playlist "{data.playlist}" thành công !
          </Box>
        ),
        duration: 1000,
      });
      onClose();
      console.log(playlists);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <aside className={cx('wrapper')}>
      <div className={cx('logo')}>
        <div className={cx('votri')}>
          <button className={cx('btn-logo')}>
            <div className={cx('zmp3-logo')}></div>
          </button>
        </div>
      </div>
      <div className={cx('main')}>
        <SidebarMain />
      </div>
      <div className={cx('divide')}></div>
      <div onScroll={handleScroll} className={cx('option', isScrollTop ? 'is-mark' : '')}>
        <SidebarOptions isScrollTop={isScrollTop} />
      </div>
      <div
        onClick={() => {
          if (isLogined) {
            onOpen();
          } else {
            navigate('/auth');
          }
        }}
        className={cx('add-new-playlist')}
      >
        <FontAwesomeIcon icon={faPlus} />
        <span>Tạo playlist mới</span>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          maxW={'330px'}
          w={'330px'}
          maxH={'300vh'}
          h={'300px'}
          bgColor={'#34224f'}
          borderRadius={'8px'}
          p={'10px'}
          mt={'30vh'}
        >
          <ModalHeader fontSize={'18px'} fontWeight={'700'} textAlign={'center'}>
            Tạo playlist mới
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmitAddPlaylist)} className={cx('form')}>
              <input
                type="text"
                name="playlist"
                id="playlist"
                placeholder="Nhập tên playlist"
                autoFocus
                {...register('playlist', { required: true })}
              />
              <div></div>
              <div></div>
              <button
                type="submit"
                className={errors.playlist?.type === 'required' ? cx('no-select') : ''}
              >
                TẠO MỚI
              </button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </aside>
  );
}

export default Sidebar;
