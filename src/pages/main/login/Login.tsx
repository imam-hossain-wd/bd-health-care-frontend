

"use client";

import Button from "@/components/ui/Button/Button";
import Form from "@/components/ui/Form/Form";
import FormInput from "@/components/ui/Form/FormInput";
import { useRouter } from "next/navigation";
import { z } from "zod";

// Define the form validation schema using Zod
const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const router = useRouter();

  const onSubmit = (data: LoginFormValues) => {
    // Handle login logic here, e.g., sending data to an API
    console.log("Login data:", data);

    // Example redirect after successful login
    router.push("/dashboard");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-md">
        <h2 className="mb-6 text-2xl font-bold text-center">Login</h2>
        <Form submitHandler={onSubmit}>
          <div className="mb-4">
            <FormInput
              name="email"
              type="email"
              label="Email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <FormInput
              name="password"
              type="password"
              label="Password"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <Button text='Login' className="w-full py-2 text-white bg-blue-500 rounded-md" />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
