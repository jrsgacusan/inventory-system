import { Card } from '@mui/material';
import styled from 'styled-components';
import { device } from '../../styles/constants';

const S = {
  Container: styled('div')`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 100vh;
    background-color: gray;
    justify-content: center;
  `,
  LoginCard: styled(Card)`
    width: 80%;
    height: 80%;
    overflow: hidden;
    display: flex;
    flex-direction: row;
  `,
  LoginElements: styled.div`
    flex: 1;
    padding: 10px;
  `,
  ImageContainer: styled('div')`
    background-color: black;
    flex: 1;
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

export default S;
