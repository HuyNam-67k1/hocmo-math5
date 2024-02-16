"use client";

import SidebarAdmin from "@/components/organisms/Admin/SidebarAdmin";
import { useState } from "react";
import Header from "@/components/organisms/Layout/Header";
var state = "in-progress-1";
const Admin = () => {
  const [active, setActive] = useState(state);
  const onClick = (code: string) => {
    state = code;
    setActive(code);
  };
  return (
    <>
      <Header />
      <div className="flex min-h-[calc(100vh-56px)] ">
        <div className="hidden lg:block lg:flex-[0_0_250px]">
          <SidebarAdmin selected="1" />
        </div>
        <div>
          <p className="adminText">Trang Quản Trị Viên</p>
          <style global jsx>{`
            .adminText {
              font-size: 3.5rem;
              font-weight: bold;
              color: green;
              margin-left: 350px;
              margin-top: 50px;
            }
          `}</style>
        </div>
      </div>
    </>
  );
};

export default Admin;
