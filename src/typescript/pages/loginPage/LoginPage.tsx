import styled from 'styled-components';
import { device } from '../../styles/constants';

const S = {
  Container: styled('div')`
    width: 100%;
    background-color: gray;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
  `,
  LoginContainer: styled('div')`
    width: 100%;
    height: 100%;
    background-color: red;
    display: none;
    @media ${device.laptop} {
      display: unset;
    }
  `,
  ImageBanner: styled('div')`
    background-color: black;
    width: 100%;
    height: 100%;
  `,
};
const LoginPage = () => {
  return (
    <S.Container>
      <S.LoginContainer>test</S.LoginContainer>
      <S.ImageBanner>test</S.ImageBanner>
    </S.Container>
  );
};

export default LoginPage;
