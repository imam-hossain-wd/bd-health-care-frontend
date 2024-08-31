import { Spinner } from "keep-react";

const loading = () => {
  return <div className="flex justify-center items-center h-screen">
    <Spinner color="info" size="xl" />
  </div>;
};

export default loading;
