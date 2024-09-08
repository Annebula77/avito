import { Container, Picture, ServiceStyledTypography, StyledLink } from '../../styling/stylesToReuse';


const NoMatchComponent = () => {
  return (
    <Container>
      <Picture
        src="/404.webp"
        alt="error"
        loading="lazy"
        decoding="async"
      />
      <ServiceStyledTypography variant="h2">Упс... Страница не найдена!</ServiceStyledTypography>
      <StyledLink to="/">
        Назад к покупкам
      </StyledLink>
    </Container>
  );
};

export default NoMatchComponent;