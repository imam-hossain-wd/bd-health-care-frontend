
'use client'
import { homebanner } from "@/utils/assets";
import autoPlay from 'embla-carousel-autoplay';
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
      image: 'https://img.freepik.com/premium-photo/doctor-with-visor-against-coronavirus-inviting-patient-examination-room-from-waiting-area-talking-with-disabled-senior-woman-wheelchair-pushed-by-nurse-with-face-mask_482257-5984.jpg?w=826',
    },
    {
      image: 'https://img.freepik.com/premium-photo/doctor-talking-sick-patient-medical-consultation-appointment-office-general-practitioner-having-discussion-with-woman-about-diagnosis-treatment-annual-checkup-visit_482257-33268.jpg?w=740',
    },
    {
      image: 'https://img.freepik.com/premium-photo/medical-team-performing-surgery-operating-room_752325-81222.jpg?w=826',
    },
  ];

  return (
    <div>
      <Carousel options={{ loop: true }} plugins={[autoPlay()]}>
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

