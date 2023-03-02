import {
  HeroContainer,
  HeroContentContainer,
  LeftContainer,
  RightContainer,
  HeroTitle,
} from "./hero.styled";
const Hero = () => {
  return (
    <HeroContainer>
      <HeroContentContainer>
        <LeftContainer>
          <HeroTitle>choose your best gadget</HeroTitle>
        </LeftContainer>
      </HeroContentContainer>
      <RightContainer></RightContainer>
    </HeroContainer>
  );
};
export default Hero;