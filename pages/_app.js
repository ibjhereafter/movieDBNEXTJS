import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment, useEffect } from "react";

import Layout from "../components/layout/Layout";
import { wrapper } from "../redux/store";
//########################################################################

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
    }, []);

  return (
      <Fragment>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </Fragment>
      )
}

export default wrapper.withRedux(MyApp);
