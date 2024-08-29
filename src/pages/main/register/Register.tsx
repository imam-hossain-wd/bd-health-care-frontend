"use client";

import Button from "@/components/ui/Button/Button";
import Form from "@/components/ui/Form/Form";
import FormInput from "@/components/ui/Form/FormInput";
import FormSelect from "@/components/ui/Form/FormSelect";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { z } from "zod";

// Define the form validation schema using Zod
const registerSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  city: z.enum(["Chattogram", "Dhaka", "Sylhet", "Rajshahi", "Khulna", "Barisal", "Rangpur", "Mymensingh"]),
});

const City = [
    { label: "Chattogram", value: "Chattogram" },
    { label: "Dhaka", value: "Dhaka" },
    { label: "Sylhet", value: "Sylhet" },
    { label: "Rajshahi", value: "Rajshahi" },
    { label: "Khulna", value: "Khulna" },
    { label: "Barisal", value: "Barisal" },
    { label: "Rangpur", value: "Rangpur" },
    { label: "Mymensingh", value: "Mymensingh" },
  ]

type RegisterFormValues = z.infer<typeof registerSchema>;

const RegisterPage = () => {
  const router = useRouter();

  const onSubmit = (data: RegisterFormValues) => {
    // Handle registration logic here, e.g., sending data to an API
    console.log("Registration data:", data);

    // Example redirect after successful registration
    router.push("/dashboard");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-md">
        <h2 className="mb-6 text-2xl font-bold text-center">Register</h2>
        <Form submitHandler={onSubmit}>
          <div className="mb-4">
            <FormInput
              name="name"
              type="text"
              label="Name"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <FormInput
              name="email"
              type="email"
              label="Email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <FormInput
              name="phone"
              type="tel"
              label="Phone Number"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-4">
            <FormInput
              name="password"
              type="password"
              label="Password"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-6">
            <FormSelect
              name="city"
              label="City"
              options={City}
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <Button text="Sign Up" className="w-full py-2 text-white bg-blue-500 rounded-md" />
          </div>
        </Form>
        <div className="text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Please Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
