import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRouters } from '~/routers/routers.js';
import { DefaultLayout } from '~/components/Layout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRouters.map((routee, index) => {
            let Pages = routee.element;

            let Layout = DefaultLayout;
            if (routee.layout) {
              Layout = routee.layout;
            } else if (routee.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={routee.path}
                element={
                  <Layout>
                    <Pages></Pages>
                  </Layout>
                }
              ></Route>
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
