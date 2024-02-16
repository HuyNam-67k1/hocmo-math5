"use client";
import { useState } from "react";
import { Menu } from "antd";
import Link from "next/link";

const SidebarAdmin: React.FC<{ selected: string }> = ({ selected }) => {
  return (
    <div
      className={`
      fixed 
      hidden lg:flex lg:flex-col lg:justify-between
      h-[calc(100vh-56px)] lg:h-[calc(100vh-64px)] w-[260px] 
      overflow-y-auto overflow-x-hidden
      text-[#0d070b] font-medium bg-[#F0F7FF]
      p-6 text-[16px]
    `}
    >
      <Menu mode="inline" defaultSelectedKeys={[selected]}>
        <Menu.Item key="1">
          <Link href="/admin">Trang chủ</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link href="/admin/quan-ly-de-luyen-tap">Quản lý đề luyện tập</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link href="/admin/quan-ly-de-thi">Quản lý đề thi </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link href="/admin/ngan-hang-cau-hoi">Quản lý câu hỏi</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link href="/admin/quan-ly-tai-khoan">Quản lý tài khoản</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default SidebarAdmin;
