import React, { useState } from "react";
import styled from "styled-components";
import { replace, Link as RouterLink, useNavigate } from "react-router-dom";
const StyledSidebar = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 20px;
  color: #b3b3b3;
`;

const ToggleButton = styled.button`
  background: transparent;
  border: none;
  color: #b3b3b3;
  font-size: 36px;
  font-weight: bold;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    color: #32e0c4;
  }
`;

const List = styled.ul`
  padding: 8%;
`;

const ListItem = styled.li`
  list-style-type: none;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s;

  &:hover {
    color: #fff;
  }
`;

const InnerListItem = styled.li`
  list-style-type: none;
  margin-bottom: 15px;
  display: flex;
`;

const StyledImage = styled.img`
  margin-right: 10px;
  width: 20%;
`;

const ListSpan = styled.span`
  margin-right: 10px;
  width: 20%;
`;

// Styled Link from react-router-dom
const StyledLink = styled(RouterLink)`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: #32e0c4;
  }
`;

const User = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s;

  &:hover {
    color: #32e0c4;
  }
`;

function SideNavBar() {
  const [open, setOpen] = useState(false);

  const handleListToggle = () => {
    setOpen((open) => !open);
  };

  const handleLogOut = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    navigat("/", { replace: true });
  };
  const email = localStorage.getItem("email");
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");

  return (
    <StyledSidebar>
      <img
        src="../assets/LOGO_cropped.png"
        alt="Logo"
        style={{ width: "80%", marginLeft: "10%" }}
      />
      <List
        style={{
          borderBottom: "thin solid #393e46",
          borderTop: "thin solid #222831",
        }}
      >
        <ListItem>
          <StyledImage src="../assets/dashboard.png" alt="Dashboard" />
          Dashboard
        </ListItem>
        <ListItem>
          <StyledImage src="../assets/Calendar.png" alt="Calendar" />
          Calendar
        </ListItem>
      </List>
      <List style={{ borderBottom: "thin solid #393e46" }}>
        <ListItem>
          <StyledImage src="../assets/Tasks.png" alt="Tasks" />
          Tasks <ToggleButton onClick={handleListToggle}>≡</ToggleButton>
        </ListItem>
        {open && (
          <List style={{ borderLeft: "thin solid #32e0c4", marginLeft: "20%" }}>
            <InnerListItem>
              <ListSpan style={{ color: "#b3b3b3" }}>⦿ </ListSpan> In Progress
            </InnerListItem>
            <InnerListItem>
              <ListSpan style={{ color: "#32e0c4" }}>★ </ListSpan> Completed
            </InnerListItem>
          </List>
        )}
      </List>
      <List style={{ borderBottom: "thin solid #393e46" }}>
        <ListItem>
          <StyledImage src="../assets/settings.png" alt="settings" /> Settings
        </ListItem>
        <ListItem>
          <StyledImage
            src="../assets/logout.svg"
            alt="logout"
            style={{ width: "10%" }}
          />
          <StyledLink to="/" onClickCapture={handleLogOut}>
            Log out
          </StyledLink>
        </ListItem>
      </List>
      <div>
        <User>
          <StyledImage src="../assets/User.png" alt="User" />
          {firstName} {lastName}
        </User>
        <p>{email}</p>
      </div>
    </StyledSidebar>
  );
}

export default SideNavBar;
