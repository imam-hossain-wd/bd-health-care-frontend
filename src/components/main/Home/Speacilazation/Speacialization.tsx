
import Button from "@/components/ui/Button/Button";
import { ISpecilization } from "@/types";
import { icon, specilization } from "@/utils/assets";

import Image from "next/image";
import Link from "next/link";

const Specilizations = () => {
  const { icon1, icon2, icon3, icon4, icon5, icon6 } = icon;

  const {
    dermatology,
    gastroenterology,
    general_Surgery,
    ophthalmology,
    pediatrics,
    pulmonology,
    bone,
    heart,
    kidneys,
    lungs,
    neuroscience,
    orthopedics,
    pregnant,
  } = specilization;

  // const specilizations = [
  //   {
  //     name: "Cardiology",
  //     icon: icon1,
  //   },
  //   {
  //     name: "Neurology",
  //     icon: icon2,
  //   },
  //   {
  //     name: "Urology",
  //     icon: icon3,
  //   },
  //   {
  //     name: "Orthopedic",
  //     icon: icon4,
  //   },
  //   {
  //     name: "Dentist",
  //     icon: icon5,
  //   },
  //   {
  //     name: "Ophthalmology",
  //     icon: icon6,
  //   },
  // ];

  const specilizationDatas = [
    {
      name: "Dermatology",
      icon: dermatology,
    },
    {
      name: "Gastroenterology",
      icon: gastroenterology,
    },
    {
      name: "General Surgery",
      icon: general_Surgery,
    },
    {
      name: "Ophthalmology",
      icon: ophthalmology,
    },
    {
      name: "Pediatrics",
      icon: pediatrics,
    },
    {
      name: "Pulmonology",
      icon: pulmonology,
    },
    {
      name: "Bone",
      icon: bone,
    },
    {
      name: "Heart",
      icon: heart,
    },
    {
      name: "Kidneys",
      icon: kidneys,
    },
    // {
    //   name: "Lungs",
    //   icon: lungs,
    // },
    {
      name: "Neuroscience",
      icon: neuroscience,
    },
    // {
    //   name: "Orthopedics",
    //   icon: orthopedics,
    // },
    // {
    //   name: "Pregnant",
    //   icon: pregnant,
    // },
  ];
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mt-16">
        Explore Treatment Across Specilities
      </h2>
      <div className="grid grid-cols-5 gap-5 mt-10 w-[85%] mx-auto ">
        {specilizationDatas?.map((specilization: any, index: number) => (
          <div
            className="bg-[#EFF6FF] flex flex-col justify-center items-center rounded-3xl p-5 border shadow-sm"
            key={index}
          >
            <div className="w-28 h-28 bg-[#377BFA] border-[6px] border-white shadow-md rounded-full flex justify-center items-center">
              <Image
                className="w-20 h-20 "
                src={specilization.icon}
                width={50}
                height={50}
                alt="specilization image"
              />
            </div>
            <p className="font-semibold text-xl mt-2">{specilization.name}</p>
          </div>
        ))}
      </div>

      <div className=" flex justify-center items-center mt-5">
            <Link href='/specialization'><Button text="See All" className="bg-primary px-8 text-md"/></Link>
          </div>
    </div>
  );
};

export default Specilizations;
