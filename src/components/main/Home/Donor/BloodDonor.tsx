import Image from "next/image";

const BloodDonors = () => {
  const donors = [
    {
      id: 1,
      name: "John Doe",
      bloodType: "O+",
      location: "Metropolis",
      contact: {
        phone: "+1234567890",
        email: "john.doe@example.com"
      },
      lastDonation: "2024-06-15",
      image: "https://img.freepik.com/premium-photo/person-with-wrist-that-has-blood-pressure-it-blood-donation_924227-615.jpg?w=826"
    },
    {
      id: 2,
      name: "Jane Smith",
      bloodType: "A-",
      location: "Gotham City",
      contact: {
        phone: "+0987654321",
        email: "jane.smith@example.com"
      },
      lastDonation: "2024-07-10",
      image: "https://img.freepik.com/premium-photo/person-with-wrist-that-has-blood-pressure-it-blood-donation_924227-615.jpg?w=826"
    },
    {
      id: 3,
      name: "Mohammad",
      bloodType: "A-",
      location: "Gotham City",
      contact: {
        phone: "+0987654321",
        email: "jane.smith@example.com"
      },
      lastDonation: "2024-07-10",
      image: "https://img.freepik.com/premium-photo/person-with-wrist-that-has-blood-pressure-it-blood-donation_924227-615.jpg?w=826"
    }
    
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-8">Blood Donors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {donors.map(donor => (
          <div key={donor.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image src={donor.image} alt={donor.name} width={300} height={200} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{donor.name}</h2>
              <p className="text-red-500 font-bold mb-2">Blood Type: {donor.bloodType}</p>
              <p className="text-gray-600 mb-2">{donor.location}</p>
              <p className="text-gray-600 mb-2">Last Donation: {donor.lastDonation}</p>
              <p className="text-gray-600 mb-2">Contact: {donor.contact.phone}</p>
              <p className="text-gray-600">Email: {donor.contact.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BloodDonors;
