import { Container, Picture, StyledLink, ServiceStyledTypography } from '../../styling/stylesToReuse';

const ErrorComponent = () => {
  return (
    <Container>
      <Picture
        src="/error.webp"
        alt="error"
        loading="lazy"
        decoding="async"
      />
      <ServiceStyledTypography variant="h2">Упс... Что-то пошло не так!</ServiceStyledTypography>
      <StyledLink to="/">
        Назад к безопасности
      </StyledLink>
    </Container>
  );
};

export default ErrorComponent;
