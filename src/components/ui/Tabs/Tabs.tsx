
"use client";
import { Tabs as KeepTabs, TabList, TabItem, TabContent } from "keep-react";
import { ReactNode, ComponentType } from "react";

interface Tab {
  value: string;
  label: string;
  icon?: ComponentType<{ size: number }>;
  content: ReactNode;
}


const Tabs = ({
  tabs,
  defaultActive = "1",
  tabClassName = '',
  tabListClassName = '',
  tabContentClassName = ''
}:any) => {

  return (
    <KeepTabs className={`bg-white shadow-md border p-5 rounded-lg ${tabClassName}`} variant="fill" defaultActive={defaultActive}>
      <TabList className={tabListClassName}>
        {tabs.map((tab:any) => (
          <TabItem key={tab.value} value={tab.value}>
            {tab.icon && <tab.icon size={16} />}
            {tab.label}
          </TabItem>
        ))}
      </TabList>
      {tabs.map((tab:any) => (
        <TabContent key={tab.value} value={tab.value} className={tabContentClassName}>
          {tab.content}
        </TabContent>
      ))}
    </KeepTabs>
  );
};

export default Tabs;

