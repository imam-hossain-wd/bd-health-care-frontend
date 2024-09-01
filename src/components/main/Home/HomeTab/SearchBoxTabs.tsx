"use client";
import { Buildings, Gear, ShieldWarning, User } from "phosphor-react";
import AmbulanceForm from "./Ambulance";
import Tabs from "@/components/ui/Tabs/Tabs";

const SearchBoxTabs = () => {
  const tabsData = [
    {
      value: "1",
      label: "Doctor",
      icon: User,
      content: <AmbulanceForm />,
    },
    {
      value: "2",
      label: "Hospital",
      icon: Gear,
      content: <AmbulanceForm />,
    },
    {
      value: "3",
      label: "Blood",
      icon: Buildings,
      content: <AmbulanceForm />,
    },
    {
      value: "4",
      label: "Ambulance",
      icon: ShieldWarning,
      content: <AmbulanceForm />,
    },
  ];

  return <Tabs tabs={tabsData} />;
};

export default SearchBoxTabs;

