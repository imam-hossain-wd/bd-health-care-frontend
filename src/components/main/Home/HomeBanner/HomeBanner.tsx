// import { homebanner } from "@/utils/assets";
// import {
//   Carousel,
//   CarouselButtons,
//   CarouselControl,
//   CarouselIndicators,
//   CarouselItem,
//   CarouselNextButton,
//   CarouselPrevButton,
//   CarouselSlides,
// } from "keep-react";
// import Image from "next/image";


// const Homebanner = () => {

//     const banners = 
//     [
//         {
//         image: homebanner.banner1
//     },
//         {
//         image: homebanner.banner2
//     },
//         {
//         image: homebanner.banner3
//     },
// ]

// console.log(banners, 'banners');
//   return (
//     <div>
//       <Carousel>
//         <CarouselSlides>
//           {banners?.map((slide, index) => (
//             <CarouselItem key={index}>
//               <div className="flex h-96 items-center justify-center rounded-xl border border-metal-100 bg-metal-50 dark:border-metal-900 dark:bg-metal-900">
//                 {/* <h1 className="text-heading-1 font-medium text-metal-900 dark:text-white">
//                   {slide}
//                 </h1> */}

//                 <Image src={slide.image} width={600} height={800} alt="home banner"/>
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselSlides>
//         <CarouselControl>
//           <CarouselButtons>
//             <CarouselPrevButton />
//             <CarouselNextButton />
//           </CarouselButtons>
//           <CarouselIndicators />
//         </CarouselControl>
//       </Carousel>
//     </div>
//   );
// };

// export default Homebanner;

import { homebanner } from "@/utils/assets";
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

const Homebanner = () => {
  const banners = [
    {
      image: homebanner.banner1,
    },
    {
      image: homebanner.banner2,
    },
    {
      image: homebanner.banner3,
    },
  ];

  return (
    <div>
      <Carousel>
        <CarouselSlides>
          {banners?.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="flex h-96 items-center justify-center rounded-xl border border-metal-100 bg-metal-50 dark:border-metal-900 dark:bg-metal-900">
                <Image
                  src={slide.image}
                  width={1200}
                  height={900}
                  alt={`home banner ${index + 1}`}
                  className="object-cover h-full w-full"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselSlides>
        <CarouselControl>
          <CarouselButtons>
            <CarouselPrevButton />
            <CarouselNextButton />
          </CarouselButtons>
          <CarouselIndicators />
        </CarouselControl>
      </Carousel>
    </div>
  );
};

export default Homebanner;

