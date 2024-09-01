// import { benefits } from "@/utils/assets";
// import Image from "next/image";

// const Benefits = () => {
//   const { condult, ambulance, blood, chamber, homedoctor, theraphy,homeNurse} = benefits;

//   const services = [
//     {
//       name: "Video Consultancy",
//       image: condult,
//     },
//     {
//       name: "Chamber Appointment",
//       image: ambulance,
//     },
//     {
//       name: "Blood Finder",
//       image: blood,
//     },
//     {
//       name: "Ambulance Service",
//       image: chamber,
//     },
//     {
//       name: "Home Nurse",
//       image: homeNurse,
//     },
//     {
//       name: "Doctor At Your Home",
//       image: homedoctor,
//     },
//     {
//       name: "Therapy",
//       image: theraphy,
//     },
//   ];

//   return <div>
//     <div className="grid grid-cols-6 gap-2 w-[90%] mx-auto mt-10">
//         {
//             services.map((service, index)=> (
//                 <div className="border p-5 rounded-lg bg-[#1946DA] text-white hover:bg-[#377BFA] shadow-md" key={index}>
//                     <div className=" flex justify-center mb-2 ">
//                     <Image className="" src={service.image} width={70} height={70} alt="benefits service" />
//                     </div>
//                     <p className="text-md font-semibold text-center">{service?.name}</p>
//                 </div>
//             ))
//         }
//     </div>
//   </div>;
// };

// export default Benefits;

// import { benefits } from "@/utils/assets";
// import {
//   Carousel,
//   CarouselButtons,
//   CarouselControl,
//   CarouselIndicators,
//   CarouselItem,
//   CarouselNextButton,
//   CarouselPrevButton,
//   CarouselSlides,
// } from 'keep-react';
// import Image from "next/image";

// const Benefits = () => {
//   const { condult, ambulance, blood, chamber, homedoctor, theraphy, homeNurse } = benefits;

//   const services = [
//     {
//       name: "Video Consultancy",
//       image: condult,
//     },
//     {
//       name: "Chamber Appointment",
//       image: ambulance,
//     },
//     {
//       name: "Blood Finder",
//       image: blood,
//     },
//     {
//       name: "Ambulance Service",
//       image: chamber,
//     },
//     {
//       name: "Home Nurse",
//       image: homeNurse,
//     },
//     {
//       name: "Doctor At Your Home",
//       image: homedoctor,
//     },
//     {
//       name: "Therapy",
//       image: theraphy,
//     },
//   ];

//   return (
//     <div>
//       {/* Grid View */}
//       <div className="grid grid-cols-6 gap-2 w-[90%] mx-auto mt-10">
//         {
//           services.map((service, index) => (
//             <div className="border p-5 rounded-lg bg-[#1946DA] text-white hover:bg-[#377BFA] shadow-md" key={index}>
//               <div className="flex justify-center mb-2">
//                 <Image className="w-20 h-20 object-cover" src={service.image} width={70} height={70} alt={service.name} />
//               </div>
//               <p className="text-md font-semibold text-center">{service.name}</p>
//             </div>
//           ))
//         }
//       </div>

//       {/* Carousel Slider */}
//       <div className="mt-10 w-[90%] mx-auto">
//         <Carousel options={{ slidesToScroll: 4 }}>
//           <CarouselSlides className="flex">
//             {services.map((service, index) => (
//               <CarouselItem key={index} className="flex-[0_0_50%]">
//                 <div className="flex flex-col items-center justify-center rounded-xl border border-metal-100 bg-metal-50 h-96 dark:border-metal-900 dark:bg-metal-900">
//                   <Image className="w-20 h-20 object-cover mb-2" src={service.image} width={70} height={70} alt={service.name} />
//                   <h1 className="text-heading-1 font-medium text-metal-900 dark:text-white">{service.name}</h1>
//                 </div>
//               </CarouselItem>
//             ))}
//           </CarouselSlides>
//           <CarouselControl>
//             <CarouselButtons>
//               <CarouselPrevButton />
//               <CarouselNextButton />
//             </CarouselButtons>
//             <CarouselIndicators />
//           </CarouselControl>
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default Benefits;

"use client";

import {
  Carousel,
  CarouselButtons,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  CarouselNextButton,
  CarouselPrevButton,
  CarouselSlides,
} from "keep-react";
import Image from "next/image";
import { benefits } from "@/utils/assets";
import autoPlay from "embla-carousel-autoplay";

const Benefits = () => {
  const {
    condult,
    ambulance,
    blood,
    chamber,
    homedoctor,
    theraphy,
    homeNurse,
  } = benefits;

  const services = [
    {
      name: "Video Consultancy",
      image: condult,
    },
    {
      name: "Chamber Appointment",
      image: ambulance,
    },
    {
      name: "Blood Finder",
      image: blood,
    },
    {
      name: "Ambulance Service",
      image: chamber,
    },
    {
      name: "Home Nurse",
      image: homeNurse,
    },
    {
      name: "Doctor At Your Home",
      image: homedoctor,
    },
    {
      name: "Therapy",
      image: theraphy,
    },
  ];

  return (
    <div>
      {/* Carousel Slider */}
      <div className="mt-10 w-[90%] mx-auto">
        <Carousel
          options={{
            //@ts-ignore
            slidesToShow: 5,
            loop: true,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000, // Adjust the speed of autoplay (in milliseconds)
            infinite: true, // Loop through items infinitely
            pauseOnHover: true, // Pause autoplay on hover
          }}
          plugins={[autoPlay()]}
        >
          <CarouselSlides className="flex">
            {services.map((service, index) => (
              <CarouselItem key={index} className="flex-[0_0_20.67%]">
                {" "}
                {/* 100% / 4 = 25% */}
                <div className="border h-44 p-5 rounded-lg bg-[#1946DA] text-white hover:bg-[#377BFA] shadow-md">
                  <div className="flex justify-center mb-2">
                    <Image
                      className="w-20 h-20 object-cover"
                      src={service.image}
                      width={60}
                      height={50}
                      alt={service.name}
                    />
                  </div>
                  <p className="text-[16px] font-semibold text-center">
                    {service?.name}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselSlides>
          <CarouselControl>
            <CarouselButtons>
              <CarouselPrevButton />
              <CarouselNextButton />
            </CarouselButtons>

           <div className="flex justify-center items-center">
           <CarouselIndicators />
           </div>
          </CarouselControl>
        </Carousel>
      </div>
    </div>
  );
};

export default Benefits;
