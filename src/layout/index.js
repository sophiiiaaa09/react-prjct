import { withRouter } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Layout, { Content } from './layoutStyles';

const Index = ({ children, location }) => {
  return (
    <Layout>
      {(location.pathname === '/' ||
        location.pathname === '/biodata' ||
        location.pathname === '/rules' ||
        location.pathname === '/soal') && <Header />}

      <Content>{children}</Content>

      {(location.pathname === '/' ||
        location.pathname === '/biodata' ||
        location.pathname === '/rules' ||
        location.pathname === '/answer' ||
        location.pathname === '/finish') && <Footer />}
    </Layout>
  );
};

export default withRouter(Index);
