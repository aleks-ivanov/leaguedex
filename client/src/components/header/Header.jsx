import React from "react";
import StatusBar from "../statusbar/StatusBarContainer";

import { Container, LinkIcon, Links } from "./Header.styles";
import { Button } from "../../GlobalStyles";
import { FaQuestionCircle, FaUser } from "react-icons/fa";

const Header = ({
  isAuthenticated,
  setModal,
  handleLogout,
  hasSummoner,
  user,
  handleFindMatch,
  handleMatchupSelection,
  handleLiveMatch,
}) => {
  return (
    <Container>
      <StatusBar
        isAuthenticated={isAuthenticated}
        hasSummoner={hasSummoner}
        handleFindMatch={handleFindMatch}
        handleLiveMatch={handleLiveMatch}
        handleMatchupSelection={handleMatchupSelection}
      />
      <Container.Inner>
        <Container.Bottom>
          <Container.Brand to="/">
            <Container.Brand.Image src="/logo.svg" alt="leaguedex logo" />
          </Container.Brand>
          <Container.Buttons authenticated={isAuthenticated}>
            <Links>
              <LinkIcon to="/about">
                <FaQuestionCircle fontSize="1.5rem" />
              </LinkIcon>
              {isAuthenticated && (
                <>
                  {/* <LinkIcon to="/settings">
                    <FaCog fontSize="1.5rem" />
                  </LinkIcon> */}
                  <LinkIcon to={`/profile/${user.username}`}>
                    <FaUser fontSize="1.5rem" />
                  </LinkIcon>
                </>
              )}
            </Links>
            {!isAuthenticated && (
              <>
                <Button onClick={() => setModal("register")}>Register</Button>
                <Button logout onClick={() => setModal("login")}>
                  Login
                </Button>
              </>
            )}
            {isAuthenticated && (
              <>
                {!hasSummoner && (
                  <Button onClick={() => setModal("summoner")}>
                    Add Summoner Account
                  </Button>
                )}

                <Button logout onClick={handleLogout}>
                  Log out
                </Button>
              </>
            )}
          </Container.Buttons>
        </Container.Bottom>
      </Container.Inner>
    </Container>
  );
};

export default Header;
