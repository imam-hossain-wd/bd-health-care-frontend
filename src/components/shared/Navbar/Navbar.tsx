/* eslint-disable @next/next/no-img-element */
"use client";
import {
  Avatar,
  AvatarImage,
  Navbar as KeepNav,
  NavbarBrand,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarItem,
  NavbarList,
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownItem,
  DropdownList,
} from "keep-react";

import {
  SignOut,
  UserCircle,
  Users,
} from "phosphor-react";

export const Navbar = () => {
  const navmenus = (
    <>
      <NavbarItem>Home</NavbarItem>
      <NavbarItem>Doctor</NavbarItem>
      <NavbarItem>Hospital</NavbarItem>
      <NavbarItem>Blood Bank</NavbarItem>
      <NavbarItem>Ambulance</NavbarItem>
      <NavbarItem>Hiring Nurse</NavbarItem>
      <NavbarItem>Hiring Doctor</NavbarItem>
    </>
  );

  return (
    <div>
      <KeepNav>
        <NavbarContainer>
          <NavbarCollapseBtn />
          <NavbarBrand>
            <h1 className="text-2xl font-bold ml-10">Health Care</h1>
          </NavbarBrand>
          <NavbarList>

          {navmenus}
          </NavbarList>

          <NavbarCollapse>
          {navmenus}
          </NavbarCollapse>
          <div className="ml-36">
            <NavbarItem active>Login</NavbarItem>
          </div>
          <DropdownComponent />
        </NavbarContainer>
      </KeepNav>
    </div>
  );
};

const DropdownComponent = () => {
  return (
    <Dropdown trigger="click">
      <DropdownAction asChild>
        <Avatar>
          <AvatarImage />
        </Avatar>
      </DropdownAction>
      <DropdownContent>
        <DropdownList classID="mr-20">
          <DropdownItem>
            <UserCircle size={20} />
            Account
          </DropdownItem>
          <DropdownItem>
            <SignOut size={20} />
            Logout
          </DropdownItem>
        </DropdownList>
      </DropdownContent>
    </Dropdown>
  );
};
