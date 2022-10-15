import { Card } from '@mui/material';
import styled from 'styled-components';
import waves from '../../../images/waves.svg';
import { device } from '../../styles/constants';

const S = {
  Container: styled('div')`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 100vh;
  `,
  LoginContainer: styled('div')`
    width: 50%;
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    background-color: #cecece;
    flex: 1;
  `,
  LoginCard: styled(Card)`
    width: 70%;
    height: 70%;
    overflow: hidden;
    position: relative;
  `,
  Wave: styled.img`
    width: auto;
    height: 20%;
    position: absolute;
    top: 0;
    left: -50px;
  `,
  ImageContainer: styled('div')`
    background-color: black;
    width: 50%;
    height: 100%;
    display: none;
    overflow: hidden;
    @media ${device.laptop} {
      display: unset;
    }
  `,
  ImageBanner: styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,
};
const LoginPage = () => {
  return (
    <S.Container>
      <S.LoginContainer>
        <S.LoginCard>
          <S.Wave src={waves} />
        </S.LoginCard>
      </S.LoginContainer>
      <S.ImageContainer>
        <S.ImageBanner src="https://picsum.photos/1000/1000" />
      </S.ImageContainer>
    </S.Container>
  );
};

export default LoginPage;
