import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../../redux/products/operation";
import { selectCategories } from "../../redux/products/selector";
import { CategoryItem } from "../CategoryItem/CategoryItem ";
import {
  NavbarContainer,
  LogoContainer,
  MenuContainer,
  AuthContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
  MenuButtonContainer,
  NavbarExtendedAuthContainer,
  OpenMenuIcon,
  CloseMenuIcon,
  NavbarLinkExtendedContainer,
  LoginButtonStyled,
  RegisterButtonStyled,
  AuthButtonStyled,
  NavGategoryWrapp,
  NavCategoryWrappExtended,
  CategoriesList,
} from "./NavbarCompStyle";
import LogoImg from "../../media/logo.svg";
import { NavLink, Link } from "react-router-dom";

const links = [
  { path: "/news", label: "News", exact: "false" },
  { path: "/friends", label: "Our friends", exact: "false" },
];

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);
  const isLoggedIn = false
  const dispatch = useDispatch()
  const categories = useSelector(selectCategories)

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LogoContainer to="/">
          <Logo src={LogoImg}></Logo>
        </LogoContainer>
        <MenuContainer>
          <NavbarLinkContainer>
           
              <NavbarLink
                key={"News"}
                to={"/news"}
                
                className="NavLinkStyle"
              >
                News
            </NavbarLink>

            <NavGategoryWrapp>
              <CategoriesList>
                {categories.map(category => {
                  return <CategoryItem key={category} item={category} />
                })}
              </CategoriesList>
                Find Gadget
            </NavGategoryWrapp>
            
            <NavbarLink
                key={"Our friends"}
                to={"/friends"}
                
                className="NavLinkStyle"
              >
                Our friends
              </NavbarLink>
          
          </NavbarLinkContainer>
        </MenuContainer>
        {!extendNavbar && (
          <AuthContainer>
            {isLoggedIn ? (
              <AuthButtonStyled component={NavLink} to="/user">
                Account
              </AuthButtonStyled>
            ) : (
              <>
                <LoginButtonStyled component={NavLink} to="/login">
                  Login
                </LoginButtonStyled>
                <RegisterButtonStyled component={Link} to="/register">
                  Registration
                </RegisterButtonStyled>
              </>
            )}
          </AuthContainer>
        )}

        <MenuButtonContainer>
          <OpenLinksButton
            onClick={() => {
              setExtendNavbar((current) => !current);
            }}
          >
            {extendNavbar ? <CloseMenuIcon /> : <OpenMenuIcon />}
          </OpenLinksButton>
        </MenuButtonContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarExtendedAuthContainer>
            {isLoggedIn ? (
              <AuthButtonStyled
                component={NavLink}
                to="/user"
                onClick={() => {
                  setExtendNavbar((current) => !current);
                }}
              >
                Account
              </AuthButtonStyled>
            ) : (
              <>
                <LoginButtonStyled
                  component={NavLink}
                  to="/login"
                  onClick={() => {
                    setExtendNavbar((current) => !current);
                  }}
                >
                  Login
                </LoginButtonStyled>
                <RegisterButtonStyled
                  component={Link}
                  to="/register"
                  onClick={() => {
                    setExtendNavbar((current) => !current);
                  }}
                >
                  Registration
                </RegisterButtonStyled>
              </>
            )}
          </NavbarExtendedAuthContainer>
          <NavbarLinkExtendedContainer>
            {links.map(({ path, label, exact }) => (
              <NavbarLinkExtended
                onClick={() => {
                  setExtendNavbar((current) => !current);
                }}
                key={label}
                to={path}
               
                className="NavLinkStyle"
              >
                {label}
              </NavbarLinkExtended>
            ))}

            <NavCategoryWrappExtended>

                Find Gadget
            </NavCategoryWrappExtended>  
          </NavbarLinkExtendedContainer>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;
