"use client";

import Button from "@/components/ui/Button/Button";
import Form from "@/components/ui/Form/Form";
import FormSelect from "@/components/ui/Form/FormSelect";
import { z } from "zod";

const defaultValues = {
  name: "",
  email: "",
  password: "",
  file: undefined, // Changed from null to undefined
  role: "",
};

const handleSubmit = (data: any) => {
  console.log("Form Data:", data);
};

const division = [
  { value: "Chattogram", label: "Chattogram" },
  { value: "Dhaka", label: "Dhaka" },
  { value: "Comilla", label: "Comilla" },
  { value: "Sylhet", label: "Sylhet" },
  { value: "Rajshahi", label: "Rajshahi" },
  { value: "Khulna", label: "Khulna" },
];

const district = [
  { value: "Chattogram", label: "Chattogram" },
  { value: "Dhaka", label: "Dhaka" },
  { value: "Comilla", label: "Comilla" },
  { value: "Sylhet", label: "Sylhet" },
  { value: "Rajshahi", label: "Rajshahi" },
  { value: "Khulna", label: "Khulna" },
];

const thana = [
  { value: "Chattogram", label: "Chattogram" },
  { value: "Dhaka", label: "Dhaka" },
  { value: "Comilla", label: "Comilla" },
  { value: "Sylhet", label: "Sylhet" },
  { value: "Rajshahi", label: "Rajshahi" },
  { value: "Khulna", label: "Khulna" },
];

const blood_group = [
  { value: "A+", label: "A" },
  { value: "A-", label: "A-" },
  { value: "AB+", label: "AB+" },
  { value: "AB-", label: "AB-" },
  { value: "B+", label: "B+" },
  { value: "B-", label: "B-" },
  { value: "O+", label: "O+" },
  { value: "O-", label: "0-" },
];

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .nonempty({ message: "Name is required." }),
  role: z
    .string()
    .min(1, { message: "Please select a role." })
    .nonempty({ message: "Role is required." }),
});

const AmbulanceForm = () => {
  return (
    <div className="w-full">
      <Form
        submitHandler={handleSubmit}
        defaultValues={{ name: "", email: "", fruit: "" }}
      >
        <div className="flex ">
          <div className="grid grid-cols-2 gap-5 mt-5 w-full">
            <div className="w-full">
              <FormSelect
                name="division"
                // label="Select a Fruit"
                options={division}
                validation={{ required: "Please select a division" }}
              />
            </div>
            <div className="w-full">
              <FormSelect
                name="district"
                // label="Select a Fruit"
                options={district}
                validation={{ required: "Please select a district" }}
              />
            </div>
            <div className="w-full">
              <FormSelect
                name="thana"
                // label="Select a Fruit"
                options={thana}
                validation={{ required: "Please select a thana" }}
              />
            </div>

            <Button
              className="text-md flex justify-center items-center mt-2 "
              //   type="submit"
              text="Search"
            >
              {/* <span> Search </span> */}
              {/* <FaSearch className="ml-2 text-xl" /> */}
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default AmbulanceForm;
