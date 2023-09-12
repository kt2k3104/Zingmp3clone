import KhamPha from '~/page/KhamPha';
import Zingchart from '~/page/zingchart';
import Radio from '~/page/Radio';
import ThuVien from '~/page/ThuVien';
import BXHNhacMoi from '~/page/BXHNhacMoi';
import ChuDeVaTheLoai from '~/page/ChuDe&TheLoai';
import Top100 from '~/page/Top100';
import NgheGanDay from '~/page/NgheGanDay';
import Playlist from '~/page/Playlist';
import Playlists from '~/page/Playlists';

import Auth from '~/page/Auth';
import OAuth from '~/page/OAuth';
import { OAuthLayout } from '~/components/Layouts';

// Public routes
const publicRoutes = [
  { path: '/', component: KhamPha },
  { path: '/zingchart', component: Zingchart },
  { path: '/radio', component: Radio },
  { path: '/mymusic/:page', component: ThuVien },
  { path: '/moi-phat-hanh', component: BXHNhacMoi },
  { path: '/hub', component: ChuDeVaTheLoai },
  { path: '/top100', component: Top100 },
  { path: '/mymusic/history', component: NgheGanDay },
  { path: '/mymusic/library/playlist', component: Playlists },
  { path: '/playlist', component: Playlist },

  { path: '/auth', component: Auth },
  { path: '/oauth/redirect', component: OAuth, layout: OAuthLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
