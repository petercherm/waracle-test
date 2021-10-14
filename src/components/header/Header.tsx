import { Avatar, HeaderContainer, Heading, SubHeading } from "./Header.styles";

export const Header = () => (
  <HeaderContainer>
    <Avatar src="/petercherm_avatar.svg" />
    <div>
      <Heading data-testid="header__heading--text">
        WARACLE FRONT-END CHALLENGE
      </Heading>
      <SubHeading data-testid="header__subheading--text">
        Peter Chermanowicz
      </SubHeading>
    </div>
  </HeaderContainer>
);
