import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Fragment, useEffect } from 'react';
import { publicRoutes } from '~/routes';
import { useDispatch } from 'react-redux';

import './App.scss';

import { DefaultLayout } from '~/components/Layouts';
import { getSongs } from './components/Layouts/DefaultLayout/Listen/ListenSlice';
import { setLogin } from './page/Auth/UserSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleGetSongs = async () => {
      try {
        await dispatch(getSongs()).unwrap();
      } catch (error) {
        console.log(error);
      }
    };
    handleGetSongs();

    const handleCheckedUserLogin = () => {
      if (localStorage.getItem('user_data')) {
        const userData = JSON.parse(localStorage.getItem('user_data'));
        dispatch(setLogin(userData));
      }
    };
    handleCheckedUserLogin();
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;

            let Layout = DefaultLayout;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
