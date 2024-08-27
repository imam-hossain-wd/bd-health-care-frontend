import Doctor from "@/components/main/Home/Doctor/Doctor";
import Homebanner from "@/components/main/Home/HomeBanner/HomeBanner";
import HomeTab from "@/components/main/Home/HomeTab/HomeTab";
import Specilizations from "@/components/main/Home/Speacilazation/Speacialization";

const HomePage = () => {
  return (
    <div>
      <div className="relative">
        <div>
          <Homebanner />
        </div>

        <div className="absolute top-[40%] lg:top-[50%] left-[5%] lg:left-[30%]">
          <HomeTab />
        </div>
      </div>

      <Specilizations />

      <Doctor />
    </div>
  );
};

export default HomePage;
