import Image from "next/image";

const DoctorConsultation = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Emily Clark",
      specialization: "Cardiologist",
      experience: "10 years",
      location: "Metropolis",
      contact: {
        phone: "+1234567890",
        email: "emily.clark@example.com"
      },
      availability: "Mon-Fri, 9 AM - 5 PM",
      image: "https://example.com/doctor1.jpg"
    },
    {
      id: 2,
      name: "Dr. John Smith",
      specialization: "Neurologist",
      experience: "8 years",
      location: "Gotham City",
      contact: {
        phone: "+0987654321",
        email: "john.smith@example.com"
      },
      availability: "Mon-Wed, 10 AM - 4 PM",
      image: "https://example.com/doctor2.jpg"
    }
    // Add more doctor entries as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-8">Doctor Consultation</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map(doctor => (
          <div key={doctor.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image src={doctor.image} alt={doctor.name} width={300} height={200} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{doctor.name}</h2>
              <p className="text-blue-500 font-bold mb-2">Specialization: {doctor.specialization}</p>
              <p className="text-gray-600 mb-2">Experience: {doctor.experience}</p>
              <p className="text-gray-600 mb-2">Location: {doctor.location}</p>
              <p className="text-gray-600 mb-2">Availability: {doctor.availability}</p>
              <p className="text-gray-600 mb-2">Contact: {doctor.contact.phone}</p>
              <p className="text-gray-600">Email: {doctor.contact.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorConsultation;
