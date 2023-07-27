import KhamPha from '~/page/KhamPha';
import Zingchart from '~/page/zingchart';
import Radio from '~/page/Radio';
import ThuVien from '~/page/ThuVien';
import BXHNhacMoi from '~/page/BXHNhacMoi';
import ChuDeVaTheLoai from '~/page/ChuDe&TheLoai';
import Top100 from '~/page/Top100';
import NgheGanDay from '~/page/NgheGanDay';
import BaiHatYeuThich from '~/page/BaiHatYeuThich';
import Playlist from '~/page/Playlist';
import Album from '~/page/Album';
import DaTaiLen from '~/page/DaTaiLen';

// Public routes
const publicRoutes = [
    { path: '/', component: KhamPha },
    { path: '/zingchart', component: Zingchart },
    { path: '/radio', component: Radio },
    { path: '/mymusic', component: ThuVien },
    { path: '/moi-phat-hanh', component: BXHNhacMoi },
    { path: '/hub', component: ChuDeVaTheLoai },
    { path: '/top100', component: Top100 },
    { path: '/mymusic/history', component: NgheGanDay },
    { path: '/mymusic/song/favorite', component: BaiHatYeuThich },
    { path: '/mymusic/library/playlist', component: Playlist },
    { path: '/mymusic/album', component: Album },
    { path: '/mymusic/song/upload', component: DaTaiLen },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
