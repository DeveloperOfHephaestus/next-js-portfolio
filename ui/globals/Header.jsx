"use client";
import { useState } from "react";
import {
  Button,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { navbarLinks } from "@/dummyData";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import Image from "next/image";

const Header = () => {
  const user = useSelector((s) => s?.user ?? {});
  const [isExpanded, setisExpanded] = useState(false);
  const pathName = usePathname();
  return (
    <Navbar expand={"md"} className="main-header">
      <NavbarBrand>
        <h5 className="f-6 m-0">Next-Dev-Saif </h5>
      </NavbarBrand>
      <Button
        className="header-toggler"
        onClick={() => setisExpanded((prev) => !prev)}
      >
        {!isExpanded ? (
          <RxHamburgerMenu size={20} className="icon" />
        ) : (
          <RxCross1 size={20} className="icon" />
        )}
      </Button>
      <Nav navbar style={{ left: !isExpanded ? "-100%" : "0", top: 0 }}>
        <Button
          className="header-toggler"
          onClick={() => setisExpanded((prev) => !prev)}
        >
          {!isExpanded ? (
            <RxHamburgerMenu size={20} className="icon" />
          ) : (
            <RxCross1 size={20} className="icon" />
          )}
        </Button>
        {navbarLinks?.map((item, key) => (
          <NavItem className="full-width">
            <NavLink tag={"div"} key={key}>
              <Link
                className={`header-link ${
                  pathName === item?.to ? "active" : ""
                }`}
                href={item?.to}
              >
                {item?.title}
              </Link>
            </NavLink>
          </NavItem>
        ))}
        {user?.uid ? (
          <div className=" mx-3">
            <div className="d-flex align-items-center gap-2">
              <img
                src={user?.profilePhoto}
                height={40}
                alt="user-avatar"
                width={40}
                className="avatar"
              />
              <small className="f-5">{user?.name}</small>
            </div>
          </div>
        ) : (
          <NavItem className="full-width">
            <NavLink tag={"div"}>
              <Link
                href={"/login"}
                className={`header-link ${
                  pathName === "/login" ? "active" : ""
                }`}
              >
                Login
              </Link>
            </NavLink>
          </NavItem>
        )}
      </Nav>
    </Navbar>
  );
};

export default Header;
