import { type FieldError, type UseFormRegisterReturn } from "react-hook-form";

interface FormInputProps {
  label?: string;
  type: string;
  placeholder?: string;
  error?: FieldError;
  register: UseFormRegisterReturn;
}

export default function FormInput({
  label,
  type,
  placeholder,
  error,
  register,
}: FormInputProps) {
  return (
    <div className="flex flex-col">
      {label && <label className="mb-1 text-sm sm:text-base">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        {...register}
        className="w-full p-2 rounded-[6px] bg-black opacity-20 placeholder-gray-400 text-sm sm:text-base"
      />
      {error && <p className="text-red-300 text-xs sm:text-sm">{error.message}</p>}
    </div>
  );
}
