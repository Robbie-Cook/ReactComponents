import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
// import MobileNav from "../navigation/MobileNav";
import { DefaultTheme, ThemeContext } from "../themes";
import Spacer from "../ui-components/Spacer";
import { SiteContext } from "../utilities/SiteContext";
import { Text } from "../utilities/Typography";
import NavButton from "./NavButton";
import MobileNav from "./MobileNav";
import { MobileView } from "../layout/Views"

/** Represents a navbar element */
function NavBar(props) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  });

  const theme = useContext(ThemeContext).navbar;

  const StyledNavBar = styled.div`
    height: ${theme.height};
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${theme.backgroundColor};
    padding-left: 40px;
    padding-right: 40px;
    box-sizing: border-box;
  `;

  const links = (() => {
    let mylinks = [];
    props.links.forEach(value => {
      mylinks.push(
        <NavButton
          to={value.path}
          label={value.name}
          active={value.isActive()}
        />
      );
    });
    return mylinks;
  })();

  const Title = styled(Text)``;

  const LinksWrapper = styled.div`
    display: flex;
    ${new MobileView(`display: none;`)}
  `

  return (
    <StyledNavBar>
      <MobileNav links={props.links} theme={theme}/>
      <Title>{props.title}</Title>
      <Spacer width="30px" />
      <LinksWrapper>
        {links}
      </LinksWrapper>
    </StyledNavBar>
  );
}
NavBar.defaultProps = {
  title: "Testing title",
  links: DefaultTheme.navbar.links
};

/**
 * Navigation bar UI component (version 2, without material-ui)
 */
export default function NavigationBar(props) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  // Careful -- make sure that react is linked to parent when using npm link and useContext
  const theme = useContext(ThemeContext).navbar;
  const site = useContext(SiteContext);

  return (
    <>
      {/* <Transition loaded={loaded}> */}
      <NavBar title={props.title} links={props.links} />
      {/* </Transition> */}
    </>
  );
}
NavigationBar.defaultProps = {
  title: 'My Website',
  links: []
}