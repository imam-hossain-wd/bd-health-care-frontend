/* eslint-disable @next/next/no-img-element */
"use client";
import Button from "@/components/ui/Button/Button";
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
import Link from "next/link";

import {
  SignOut,
  UserCircle,
  Users,
} from "phosphor-react";

export const Navbar = () => {
  const navmenus = (
    <>
      <NavbarItem ><Link href='/'>Home</Link></NavbarItem>
      <NavbarItem ><Link href='/doctor'>Doctor</Link></NavbarItem>
      <NavbarItem ><Link href='/hospital'>Hospital</Link></NavbarItem>
      <NavbarItem ><Link href='/blood-bank'>Blood Bank</Link></NavbarItem>
      <NavbarItem ><Link href='/ambulance'>Ambulance</Link></NavbarItem>
      <NavbarItem ><Link href='/hiring-nurse'>Hiring Nurse</Link></NavbarItem>
      <NavbarItem ><Link href='/hiring-doctor'>Hiring Doctor</Link></NavbarItem>
    </>
  );

  return (
    <div>
      <KeepNav>
        <NavbarContainer>
          <NavbarCollapseBtn  className="ml-7"/>
          <div className="w-full mx-auto flex justify-around items-center ml-32">
            <NavbarBrand>
            <h1 className="text-2xl font-bold ">Health Care</h1>
          </NavbarBrand>
          <NavbarList className="">

          {navmenus}
          </NavbarList>

          <NavbarCollapse>
          {navmenus}
          </NavbarCollapse>
          
          <div className="">
            <Link href='/login'><Button text="Login" className="bg-primary px-8"/></Link>
          </div>

          <div className="">
          <DropdownComponent />
          </div>
          </div>
          
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
