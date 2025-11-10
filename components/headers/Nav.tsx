<<<<<<< HEAD
=======
"use client";
>>>>>>> 634877ba86339f675030fbca08701d1c1c46c7f1
import Link from "next/link";
import Image from "next/image";
import React from "react";
import {
  aboutLinks,
  blogLinks,
  caseStudyLinks,
  homeItems,
  productLinks,
  serviceLinks,
} from "@/data/menu";
import { usePathname } from "next/navigation";
import { MenuLink } from "@/types/menuLink";

export default function Nav() {
  const pathname = usePathname();
<<<<<<< HEAD

=======
>>>>>>> 634877ba86339f675030fbca08701d1c1c46c7f1
  const isMenuActive = (link: MenuLink) => {
    const currentPath = pathname?.split("/")[1];
    const hrefPath = link.href?.split("/")[1];
    const onePagePath = link.onePage?.split("/")[1];
<<<<<<< HEAD
=======

>>>>>>> 634877ba86339f675030fbca08701d1c1c46c7f1
    return hrefPath === currentPath || onePagePath === currentPath;
  };

  const isMenuParentActive = (menu: MenuLink[]) => {
    return menu.some((elm) => isMenuActive(elm));
  };

  return (
    <>
      <li
        className={`menu-item menu-item-has-children  ${
          isMenuParentActive(homeItems) ? "current-menu-item" : ""
        } `}
      >
        <a href="#" className="item-link">
          Home{" "}
        </a>
        <div className="sub-menu-home">
          <ul>
            {homeItems.map((item, index) => (
              <li
                key={index}
                className={`item${
                  isMenuActive(item) ? " current-item-home" : ""
                }`}
              >
                <div>
                  <div className="image">
                    <Link className="img-home" href={item.href}>
                      <Image
                        src={item.img}
                        className="lazyload"
                        alt={item.title}
                        width={415}
                        height={342}
                      />
                    </Link>
                    <div className="list-btn">
                      <Link className="page-btn" href={item.onePage}>
                        One Page
                      </Link>
                      <Link className="page-btn" href={item.multiPage}>
                        Multi page
                      </Link>
                    </div>
                  </div>
                  <h6 className="name-home">{item.title}</h6>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </li>
<<<<<<< HEAD

=======
>>>>>>> 634877ba86339f675030fbca08701d1c1c46c7f1
      <li
        className={`menu-item menu-item-has-children position-relative   ${
          isMenuParentActive(serviceLinks) ? "current-menu-item" : ""
        } `}
      >
<<<<<<< HEAD
        <a href="#" className="item-link">Services</a>
=======
        <a href="#" className="item-link">
          Services
        </a>
>>>>>>> 634877ba86339f675030fbca08701d1c1c46c7f1
        <ul className="sub-menu">
          {serviceLinks.map((item, index) => (
            <li
              className={`sub-menu-item  ${
                isMenuActive(item) ? "current-item" : ""
              } `}
              key={index}
            >
              <Link href={item.href} className={`item-link-2`}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </li>
<<<<<<< HEAD

=======
>>>>>>> 634877ba86339f675030fbca08701d1c1c46c7f1
      <li
        className={`menu-item menu-item-has-children position-relative   ${
          isMenuParentActive(caseStudyLinks) ? "current-menu-item" : ""
        } `}
      >
<<<<<<< HEAD
        <a href="#" className="item-link">Case</a>
=======
        <a href="#" className="item-link">
          Case
        </a>
>>>>>>> 634877ba86339f675030fbca08701d1c1c46c7f1
        <ul className="sub-menu">
          {caseStudyLinks.map((item, index) => (
            <li
              className={`sub-menu-item  ${
                isMenuActive(item) ? "current-item" : ""
              } `}
              key={index}
            >
              <Link href={item.href} className={`item-link-2`}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </li>
<<<<<<< HEAD

=======
>>>>>>> 634877ba86339f675030fbca08701d1c1c46c7f1
      <li
        className={`menu-item menu-item-has-children position-relative   ${
          isMenuParentActive(aboutLinks) ? "current-menu-item" : ""
        } `}
      >
<<<<<<< HEAD
        <a href="#" className="item-link">Pages</a>
=======
        <a href="#" className="item-link">
          Pages
        </a>
>>>>>>> 634877ba86339f675030fbca08701d1c1c46c7f1
        <ul className="sub-menu">
          {aboutLinks.map((item, index) => (
            <li
              className={`sub-menu-item  ${
                isMenuActive(item) ? "current-item" : ""
              } `}
              key={index}
            >
              <Link href={item.href} className={`item-link-2`}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </li>
<<<<<<< HEAD

      
      <li
        className={`menu-item ${
          isMenuActive({ href: "/about-us" } as MenuLink) ? "current-menu-item" : ""
        } `}
      >
        <Link href="/about-us" className="item-link">
          About Us
        </Link>
      </li>
      

=======
>>>>>>> 634877ba86339f675030fbca08701d1c1c46c7f1
      <li
        className={`menu-item menu-item-has-children position-relative   ${
          isMenuParentActive(productLinks) ? "current-menu-item" : ""
        } `}
      >
<<<<<<< HEAD
        <a href="#" className="item-link">Our Store</a>
=======
        <a href="#" className="item-link">
          Our Store
        </a>
>>>>>>> 634877ba86339f675030fbca08701d1c1c46c7f1
        <ul className="sub-menu">
          {productLinks.map((item, index) => (
            <li
              className={`sub-menu-item  ${
                isMenuActive(item) ? "current-item" : ""
              } `}
              key={index}
            >
              <Link href={item.href} className={`item-link-2`}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </li>
<<<<<<< HEAD

=======
>>>>>>> 634877ba86339f675030fbca08701d1c1c46c7f1
      <li
        className={`menu-item menu-item-has-children position-relative   ${
          isMenuParentActive(blogLinks) ? "current-menu-item" : ""
        } `}
      >
<<<<<<< HEAD
        <a href="#" className="item-link">Blog </a>
=======
        <a href="#" className="item-link">
          Blog{" "}
        </a>
>>>>>>> 634877ba86339f675030fbca08701d1c1c46c7f1
        <ul className="sub-menu">
          {blogLinks.map((item, index) => (
            <li
              key={index}
              className={`sub-menu-item  ${
                isMenuActive(item) ? "current-item" : ""
              } `}
            >
              <Link href={item.href} className="item-link-2">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </li>
<<<<<<< HEAD

      <li
        className={`menu-item ${
          isMenuActive({ href: "/contact-us" } as MenuLink) ? "current-menu-item" : ""
        } `}
      >
        <Link href="/contact-us" className={`item-link `}>
=======
      <li
        className={`menu-item   ${
          isMenuActive({ href: "/contact-us" }) ? "current-menu-item" : ""
        } `}
      >
        <Link href={`/contact-us`} className={`item-link `}>
>>>>>>> 634877ba86339f675030fbca08701d1c1c46c7f1
          Contact
        </Link>
      </li>
    </>
  );
}
