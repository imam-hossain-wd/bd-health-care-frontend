import Benefits from "@/components/main/Home/Benefits/Benefits";
import ClinicSection from "@/components/main/Home/ClinicSection/ClinicSection";
import Doctor from "@/components/main/Home/Doctor/Doctor";
import DoctorConsultation from "@/components/main/Home/DoctorConsultation/DoctorConsultation";
import BloodDonors from "@/components/main/Home/Donor/BloodDonor";
import Homebanner from "@/components/main/Home/HomeBanner/HomeBanner";
import SearchBoxTabs from "@/components/main/Home/HomeTab/SearchBoxTabs";
import Hospital from "@/components/main/Home/Hospital/Hospital";
import Specilizations from "@/components/main/Home/Speacilazation/Speacialization";

const HomePage = () => {
  return (
    <div>
      <div className="relative">
        <div>
          <Homebanner />
        </div>

        <div className="absolute top-[40%] lg:top-[50%] left-[5%] lg:left-[30%]">
          <SearchBoxTabs />
        </div>
      </div>

      <Benefits />

      <Specilizations />

      <ClinicSection />


      <DoctorConsultation />

      <Doctor />

      <Hospital />

      <BloodDonors />
    </div>
  );
};

export default HomePage;
