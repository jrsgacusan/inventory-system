import LoginForm from '../../formComponents/loginForm/LoginForm';
import S from './LoginPage.styles';

const LoginPage = () => {
  return (
    <S.Container>
      <S.LoginCard>
        <S.LoginElements>
          <LoginForm />
        </S.LoginElements>
        <S.ImageContainer>
          <S.ImageBanner src="https://picsum.photos/1000/1000" />
        </S.ImageContainer>
      </S.LoginCard>
    </S.Container>
  );
};

export default LoginPage;
