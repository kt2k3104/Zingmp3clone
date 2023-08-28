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
import { useDispatch, useSelector } from 'react-redux';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Button,
  useToast,
  Box,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { Spinner } from '@chakra-ui/react';

import { deleteSong, getSongs } from '~/components/Layouts/DefaultLayout/Listen/ListenSlice';
import { getUser, handleAddSongToPlaylist } from '~/page/Auth/UserSlice';

const cx = classNames.bind(styles);

function SongOtherOptions({ attrs, song, hide }) {
  const { user, playlists } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [onDelete, setOnDelete] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const toast = useToast();

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
        offset={[-40, -10]}
        delay={[0, 300]}
        render={(attrs) => (
          <div className={cx('option_add_to_playlist')} tabIndex="-1" {...attrs}>
            <input placeholder="Tìm playlist" />
            <button>
              <i></i>
              Tạo playlist mới
            </button>
            <div className={cx('playlists')}>
              {playlists?.map((playlist) => (
                <div
                  onClick={() => {
                    try {
                      dispatch(
                        handleAddSongToPlaylist({
                          playlistId: playlist.id.toString(),
                          songId: song.id.toString(),
                        }),
                      );
                      hide();
                      toast({
                        position: 'bottom-left',
                        render: () => (
                          <Box
                            color="white"
                            p={5}
                            bg="#34224f"
                            borderRadius={'5px'}
                            marginBottom={'90px'}
                          >
                            Đã thêm bài hát "{song.name}" vào playlist thành công !
                          </Box>
                        ),
                        duration: 1000,
                      });
                    } catch (error) {
                      console.log(error);
                    }
                  }}
                  key={playlist.id}
                  className={cx('playlist_item')}
                >
                  <FontAwesomeIcon icon={faListOl} />
                  {playlist.name}
                </div>
              ))}
            </div>
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
      <button
        onClick={() => {
          onOpen();
          hide();
        }}
      >
        <i>
          <FontAwesomeIcon icon={faTrashAlt} />
        </i>
        Xóa
      </button>
      <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent
            maxW={'540px'}
            w={'540px'}
            maxH={'33vh'}
            h={'141.8px'}
            bgColor={'#34224f'}
            borderRadius={'8px'}
            p={'10px'}
            mt={'33vh'}
          >
            <AlertDialogHeader w={'500px'} h={'27px'} fontSize={'18px'} mb={5} fontWeight="bold">
              Xóa Bài Hát
            </AlertDialogHeader>

            {!onDelete && (
              <>
                <AlertDialogBody>
                  Bài hát của bạn sẽ bị xóa khỏi hệ thống, bạn có muốn xóa ?
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button
                    w={'75.4px'}
                    h={'28.8px'}
                    bgColor={'hsla(0,0%,100%,0.1)'}
                    borderRadius={'999px'}
                    ref={cancelRef}
                    onClick={onClose}
                    fontSize={'12px'}
                    color={'#fff'}
                    fontWeight={'400'}
                    borderColor={'hsla(0,0%,100%,0.1)'}
                    _hover={{ bgColor: 'tranparent', opacity: 0.9 }}
                  >
                    KHÔNG
                  </Button>
                  <Button
                    w={'56px'}
                    h={'28.8px'}
                    bgColor={'#9b4de0'}
                    borderRadius={'999px'}
                    colorScheme="red"
                    _hover={{ bgColor: 'tranparent', opacity: 0.9 }}
                    onClick={async () => {
                      setOnDelete(true);
                      const response = await dispatch(deleteSong(song.id));
                      setOnDelete(false);
                      if (response) {
                        onClose();
                        toast({
                          position: 'bottom-left',
                          render: () => (
                            <Box
                              color="white"
                              p={5}
                              bg="#34224f"
                              borderRadius={'5px'}
                              marginBottom={'90px'}
                            >
                              Xóa bài hát thành công !
                            </Box>
                          ),
                        });
                        dispatch(getUser(user.id));
                        dispatch(getSongs());
                      }
                    }}
                    ml={3}
                    fontSize={'12px'}
                    fontWeight={'400'}
                    marginLeft={'15px'}
                  >
                    XÓA
                  </Button>
                </AlertDialogFooter>
              </>
            )}
            {onDelete && (
              <AlertDialogBody>
                <Spinner />
              </AlertDialogBody>
            )}
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      <p>Tải lên bởi {user.first_name + ' ' + user.last_name}</p>
    </div>
  );
}

export default SongOtherOptions;
