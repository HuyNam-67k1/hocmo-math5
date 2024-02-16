"use client";

import { useState, useMemo, ReactNode, useCallback } from "react";
import clsx from "clsx";
import styled from "styled-components";
import { respondTo } from "marathon-design-system";

export interface TabDataProps {
  id: number;
  name: ReactNode;
  content: ReactNode;
  disabled?: boolean;
}

interface NavigationProps {
  id?: string;
  data: Array<TabDataProps>;
  activeTabId: number;
  onNavClick: (id: number) => void;
}

interface TabProps {
  content: ReactNode | undefined;
}

interface Props {
  tabId?: string;
  className?: string;
  data: Array<TabDataProps>;
  onChange?: (tabId: string) => void;
}

const TabsStyled = styled.div`
  .tabs_content {
    padding: 24px 16px;
    color: #9b9b9b;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    background-color: white;
    margin-top: 20px;
    border-radius: 8px;
    ${respondTo.lg`
      padding: 20px 0 0 0;
      font-size: 16px;
      line-height: 24px;
      background-color: white;
      margin-top: 20px;
      border-radius: 8px;
    `}
  }

  .tabs_nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #d9d9d9;
    padding-bottom: 6px;
  }

  .tabs_button {
    background: rgba(0, 0, 0, 0);
    color: #424242;
    box-shadow: none;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 14px;
    line-height: 20px;
    display: block;
    position: relative;
    ${respondTo.lg`
      font-size: 16px;
      line-height: 24px;
    `}
  }

  .tabs_button:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: #1f91c6;
    opacity: 0;
    visibility: hidden;
    transition: visibility 0s, opacity 0.4s ease-in-out;
  }

  .tabs_button.active {
    color: #1f91c6;
    font-weight: 600;
  }

  .tabs_button.active::after {
    opacity: 1;
    visibility: visible;
    transition: visibility 0s, opacity 0.4s ease-in-out;
    margin-top: 6px;
  }

  .tabs_item:not(:last-child) {
    margin-right: 60px;
  }
`;

const Tab = (props: TabProps) => {
  const { content } = props;

  return <div className="tabs_content">{content}</div>;
};

const Navigation = (props: NavigationProps) => {
  const { data, activeTabId, onNavClick, id } = props;
  return (
    <ul className="tabs_nav" id={id}>
      {data?.map((item: TabDataProps) => (
        <li key={item.id} className="tabs_item cursor-no-drop">
          <button
            className={clsx(
              `tabs_button ${activeTabId === item.id ? "active" : ""}`,
              { "opacity-30": item.disabled }
            )}
            onClick={() => onNavClick(item.id)}
            disabled={item.disabled}
          >
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export const Tabs = (props: Props) => {
  const { className, data, tabId, onChange = () => null } = props;
  const [activeTabId, setActiveTab] = useState<number>(1);

  const activeTab = useMemo(
    () => data?.find((tab) => tab.id === activeTabId),
    [activeTabId, data]
  );

  const onNavClick = useCallback(
    (tabId: number) => {
      setActiveTab(tabId);
      onChange(String(tabId));
    },
    [onChange, setActiveTab]
  );

  return (
    <TabsStyled className={className}>
      <Navigation
        onNavClick={onNavClick}
        activeTabId={activeTabId}
        data={data}
        id={tabId}
      />
      <Tab content={activeTab?.content} />
    </TabsStyled>
  );
};
