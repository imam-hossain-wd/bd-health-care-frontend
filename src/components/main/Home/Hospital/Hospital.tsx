import Image from "next/image";

const Hospital = () => {
  const hospitals = [
    {
      id: 1,
      name: "City Hospital",
      location: "123 Main St, Metropolis",
      specialties: ["Cardiology", "Neurology", "Orthopedics"],
      contact: {
        phone: "+1234567890",
        email: "info@cityhospital.com",
      },
      availability: "24/7",
      rating: 4.5,
      image: "https://img.freepik.com/premium-photo/hospital-building-with-white-walls-red-cross-modern-building-white-with-red-cross_483949-29966.jpg?w=740",
    },
    {
      id: 2,
      name: "Metro General",
      location: "456 Elm St, Metropolis",
      specialties: ["Pediatrics", "Oncology", "Dermatology"],
      contact: {
        phone: "+0987654321",
        email: "contact@metrogeneral.com",
      },
      availability: "8 AM - 8 PM",
      rating: 4.7,
      image: "https://img.freepik.com/premium-photo/hospital-building-red-cross-medical-institution-health-treatment-disease-wallpaper-background_917506-134316.jpg?w=740",
    },
    {
      id: 3,
      name: "General Hospital",
      location: "456 Elm St, Metropolis",
      specialties: ["Pediatrics", "Oncology", "Dermatology"],
      contact: {
        phone: "+0987654321",
        email: "contact@metrogeneral.com",
      },
      availability: "8 AM - 8 PM",
      rating: 4.7,
      image: "https://img.freepik.com/premium-photo/hospital-building-red-cross-medical-institution-health-treatment-disease-wallpaper-background_916211-130323.jpg?semt=ais_hybrid",
    },

  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-8">Our Hospitals</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hospitals.map(hospital => (
          <div key={hospital.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image src={hospital.image} alt={hospital.name} width={300} height={200} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{hospital.name}</h2>
              <p className="text-gray-600 mb-2">{hospital.location}</p>
              <p className="text-gray-600 mb-2">Specialties: {hospital.specialties.join(', ')}</p>
              <p className="text-gray-600 mb-2">Availability: {hospital.availability}</p>
              <p className="text-gray-600 mb-2">Rating: {hospital.rating}</p>
              <p className="text-gray-600 mb-2">Contact: {hospital.contact.phone}</p>
              <p className="text-gray-600">Email: {hospital.contact.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hospital;
