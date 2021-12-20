import styled from 'styled-components';

const Layout = styled.div`
  position: relative;
  background: #ffffff;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  height: 100%;
  width: 100%;
`;

export default Layout;
