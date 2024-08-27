import { ISpecilization } from "@/types";
import { icon } from "@/utils/assets";

import Image from "next/image";

const Specilizations = () => {

  const { icon1, icon2, icon3, icon4, icon5, icon6 } = icon;

  const specilizations = [
    {
    name: 'Cardiology',
    icon: icon1
  },
    {
    name: 'Neurology',
    icon: icon2
  },
    {
    name: 'Urology',
    icon: icon3
  },
    {
    name: 'Orthopedic',
    icon: icon4
  },
    {
    name: 'Dentist',
    icon: icon5
  },
    {
    name: 'Ophthalmology',
    icon: icon6
  },
];
  return <div >

    <h2 className="text-2xl font-semibold text-center mt-16">Explore Treatment Across Specilities</h2> 
    <div className="grid grid-cols-6 gap-5 mt-10 w-[85%] mx-auto">

    {
      specilizations?.map((specilization:any, index:number)=> (
        <div className="bg-[#EFF6FF] flex flex-col justify-center items-center rounded p-5" key={index}>
          <Image  src={specilization.icon} width={50} height={50} alt="specilization image"/>
          <p>{specilization.name}</p>

        </div>
      ))
    }
    </div>
  </div>;
};

export default Specilizations;
