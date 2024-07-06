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

const Header = () => {
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
      </Nav>
    </Navbar>
  );
};

export default Header;
