"use client";

import React, { FC } from "react";
import "./sidebar.scss";
import Link from "next/link";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";
import { FaChevronCircleLeft } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { AiOutlineProduct } from "react-icons/ai";
import { useState } from "react";

const SideBar: FC = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar__logo">
        <Link href={"/"}>
          <FaArrowAltCircleLeft />
        </Link>
        <span>Dashboard</span>
      </h2>
      <ul className="sidebar__collection">
        <li>
          <Link className="sidebar__link" href={"/user/create-product"}>
            <IoCreateOutline />
            <span>Create Product</span>
          </Link>
        </li>
        <li className="sidebar__item">
          <Link className="sidebar__link" href={"/user/manage-product"}>
            <AiOutlineProduct />
            <span>Manage Product</span>
          </Link>
        </li>
      </ul>
      <Link className="sidebar__home" href={"/"}>
        <FaArrowAltCircleLeft />
        Home
      </Link>
    </div>
  );
};

export default SideBar;
