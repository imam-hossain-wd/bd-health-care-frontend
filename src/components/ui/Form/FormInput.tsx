"use client";

import { useFormContext, Controller } from "react-hook-form";


interface IInput {
  name: string;
  type?: string;
  size?: "large" | "small" | "middle";
  value?: string | string[] | undefined;
  defaultValue?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
}

const FormInput = ({
  name,
  type = "text",
  size,
  value,
  id,
  defaultValue,
  placeholder,
  validation,
  label,
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      {label ? (
        <label
          className="block mb-2 text-sm font-medium text-gray-700"
          htmlFor={id}
        >
          {label}
        </label>
      ) : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <input
            type={type}
            //@ts-ignore
            size={size}
            placeholder={placeholder}
            id={id}
            {...field}
            defaultValue={defaultValue ? defaultValue : field.value}
            className="w-full h-10 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none "
          />
        )}
      />
    </>
  );
};

export default FormInput;
