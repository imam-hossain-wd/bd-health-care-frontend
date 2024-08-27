import Modal from "@/components/shared/Modal/Modal";
import Button from "@/components/ui/Button/Button";
import { Card } from "keep-react";
import Image from "next/image";

const Doctor = () => {
  const doctors = [
    {
      id: 1,
      name: "Emily Flores",
      qualifications: "Ph.D, DPT, MS OMPT",
      specialization: "Anesthesiology",
      feedback_count: 9,
      feedback_rating: "4.5/5",
      image:
        "https://amentotech.com/projects/doctreat/wp-content/uploads/2019/11/20.jpg",
      availability: "Available Today",
      day: "Monday",
      location: "England",
      contact_details: {
        phone: "+44 1234 567890",
        email: "emily.flores@example.com",
      },
    },
    {
      id: 2,
      name: "John Doe",
      qualifications: "MD, MBBS",
      specialization: "Cardiology",
      feedback_count: 15,
      feedback_rating: "4.8/5",
      image:
        "https://amentotech.com/projects/doctreat/wp-content/uploads/2019/11/06.jpg",
      availability: "Available Tomorrow",
      day: "Tuesday",
      location: "USA",
      contact_details: {
        phone: "+1 9876 543210",
        email: "john.doe@example.com",
      },
    },
    {
      id: 3,
      name: "Jane Smith",
      qualifications: "MD, FRCS",
      specialization: "Neurology",
      feedback_count: 20,
      feedback_rating: "4.9/5",
      availability: "Available Wednesday",
      image:
        "https://amentotech.com/projects/doctreat/wp-content/uploads/2019/11/05.jpg",
      day: "Wednesday",
      location: "Canada",
      contact_details: {
        phone: "+1 2345 678901",
        email: "jane.smith@example.com",
      },
    },
    {
      id: 4,
      name: "Jane Smith",
      qualifications: "MD, FRCS",
      specialization: "Neurology",
      feedback_count: 20,
      feedback_rating: "4.9/5",
      availability: "Available Wednesday",
      image:
        "https://amentotech.com/projects/doctreat/wp-content/uploads/2019/11/15.jpg",
      day: "Wednesday",
      location: "Canada",
      contact_details: {
        phone: "+1 2345 678901",
        email: "jane.smith@example.com",
      },
    },
  ];
  return (
    <div className="my-10">

        <h2 className="text-center text-2xl font-semibold">Our Top Rated Doctor</h2>
      <div className="w-[80%] mx-auto grid grid-cols-4 gap-5 mt-5">
        {doctors?.map((doctor: any) => (
          <Card className="w-[280px] p-5" key={doctor.id}>
            <Image
              src={doctor?.image}
              className="w-full h-[220px] rounded"
              width={200}
              height={200}
              alt="doctor"
            />

            <div className=" text-[14px] mt-2">
              <p className="text-primary">{doctor?.specialization}</p>
              <p>{doctor?.name}</p>
              <p className="text-sm">{doctor?.qualifications}</p>
              <p>{doctor?.location}</p>
              <p className="text-[#32B9A9]">{doctor?.availability}</p>
            </div>

            <div className="flex justify-around items-center mt-2 -ml-5">
              {/* <div>
              <Model title={"Book Now"}/>
              </div> */}
              {/* <Button className="h-9">Book now</Button> */}
              {/*  */}
              {/* <Button text="Book Now" className="bg-primary"/> */}
              <Modal />
              <Button text="View Profile" className="bg-primary"/>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Doctor;