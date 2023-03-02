import styled from "styled-components";

export const ContainerMain = styled.div`
  margin: 0 auto;
  width: 100%;
  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media ${(p) => p.theme.media.tablet} {
    padding: 90px 32px 100px 32px;
    width: 768px;
  }
  @media ${(p) => p.theme.media.desktop} {
    padding: 70px 16px 200px 16px;
    width: 1280px;
  }
`;
