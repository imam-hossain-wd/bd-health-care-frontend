import { benefits } from "@/utils/assets";
import Image from "next/image";

const Benefits = () => {
  const { condult, ambulance, blood, chamber, homedoctor, theraphy } = benefits;

  const services = [
    {
      name: "Video Consultancy",
      description: "Connect with top doctors through a secure video call.",
      image: condult,
    },
    {
      name: "Chamber Appointment",
      description: "Easily book an appointment with just a few clicks.",
      image: ambulance,
    },
    {
      name: "Doctor At Your Home",
      description: "Request a doctor to visit you in the comfort of your home.",
      image: blood,
    },
    {
      name: "Ambulance Service",
      description: "24/7 emergency ambulance service at your doorstep.",
      image: chamber,
    },
    {
      name: "Domiciliary Service",
      description: "Home-based physiotherapy and nursing services.",
      image: homedoctor,
    },
    {
      name: "Therapy",
      description:
        "Professional therapy services to support your mental health and well-being.",
      image: theraphy,
    },
  ];

  return <div>
    <div className="grid grid-cols-6 gap-5 w-[90%] mx-auto mt-10">
        {
            services.map((service, index)=> (
                <div className="" key={index}>
                    <div className="ml-14 mb-2">
                    <Image src={service.image} width={70} height={70} alt="benefits service" />
                    </div>
                    <p className="">{service?.name}</p>
                    <p className="text-[14px] mt-1">{service?.description}</p>
                </div>
            ))
        }
    </div>
  </div>;
};

export default Benefits;
