import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Fragment } from 'react';

import './App.scss';

import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layouts';
// import { useDispatch } from 'react-redux';
// import { getSongs } from './components/Layouts/DefaultLayout/Listen/ListenSlice';

function App() {
  //   const dispatch = useDispatch();
  //   console.log('APP');

  //   useEffect(() => {
  //     console.log('vao chua?');
  //     const handleGetSongs = async () => {
  //       try {
  //         await dispatch(getSongs()).unwrap();
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     handleGetSongs();
  //   }, [dispatch]);

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
