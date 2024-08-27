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
    <Card className="flex justify-center items-center mx-auto max-w-xl">
      <Tabs variant="fill" defaultActive="1" className="">
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
        <TabContent value="1">
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
    </Card>
  );
};

export default HomeTab;
