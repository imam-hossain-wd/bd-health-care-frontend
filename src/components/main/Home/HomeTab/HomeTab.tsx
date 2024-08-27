"use client";
import { Buildings, Gear, ShieldWarning, User } from "phosphor-react";
import {
  Card,
  TabContent,
  TabItem,
  TabList,
  Tabs,
} from "keep-react";
import AmbulanceForm from "./Ambulance";

const HomeTab = () => {
  return (
    // <div className="flex justify-center items-center bg-white shadow-md ">
      <Tabs className=' bg-white shadow-md border p-5 rounded-lg' variant="fill" defaultActive="1" >
        <TabList>
          <TabItem value="1">
            <User size={16} />
            Doctor
          </TabItem>
          <TabItem value="2">
            <Gear size={16} />
            Hospital
          </TabItem>
          <TabItem value="3">
            <Buildings size={16} />
            Blood
          </TabItem>
          <TabItem value="4">
            <ShieldWarning size={16} />
            Ambulance
          </TabItem>
        </TabList>
        <TabContent className="" value="1">
          <AmbulanceForm />
        </TabContent>
        <TabContent value="2">
          <AmbulanceForm />
        </TabContent>
        <TabContent value="3">
          <AmbulanceForm />
        </TabContent>
        <TabContent value="4">
          <AmbulanceForm />
        </TabContent>
      </Tabs>
    // </div>
  );
};

export default HomeTab;
