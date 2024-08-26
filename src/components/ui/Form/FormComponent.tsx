

"use client";

import React from "react";
import Form from "./Form";
import FormInput from "./FormInput";
import { Button } from "keep-react";
import FormUploader from "./FormUploader";
import FormSelect from "./FormSelect";

const MyFormComponent = () => {


  const handleSubmit = (data: any) => {
    console.log("Form Data:", data);
  };


  const fruits = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Blueberry", value: "blueberry" },
    { label: "Grapes", value: "grapes" },
    { label: "Pineapple", value: "pineapple" },
  ];

  return (
    <div className="w-full lg:w-[60%] mx-auto border bg-white shadow-lg p-5 mt-20 rounded">
      <Form
        submitHandler={handleSubmit}
        defaultValues={{ name: "", email: "", fruit: "" }}
      >
        <div className="grid grid-cols-2 gap-5">
          <div className="">
            <FormInput
              name="name"
              type="text"
              placeholder="Enter your name"
              label="Name"
              validation={{ required: "Name is required" }}
            />
          </div>
          <div className="">
            <FormInput
              name="email"
              type="email"
              placeholder="Enter your email"
              label="Email"
              validation={{ required: "Email is required" }}
            />
          </div>
          <div className="">
            <FormInput
              name="password"
              type="password"
              placeholder="Enter your password"
              label="Password"
              validation={{ required: "Password is required" }}
            />
          </div>
          <div>
            <FormSelect
              name="fruit"
              label="Select a Fruit"
              options={fruits}
              validation={{ required: "Please select a fruit" }}
            />
          </div>
          <div>
            <FormUploader name="files" label="Upload Files" />
          </div>
          <Button className="w-40" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default MyFormComponent;

