import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormInput from "../common/Input";

const schema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^\+?[0-9\s-]{7,15}$/, "Invalid phone number")
    .required("Phone number is required"),
  preferences: yup
    .array()
    .of(yup.string())
    .min(1, "Select at least one preference")
    .required(),
  privacy: yup
    .boolean()
    .oneOf([true], "You must agree to the privacy policy")
    .required(),
});

type FormData = yup.InferType<typeof schema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      preferences: [],
      privacy: false,
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    alert("Form submitted successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto  text-white rounded-lg flex flex-col gap-3"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-orange-400">Get in touch</h2>
      <p className="mb-3 sm:mb-4 text-sm sm:text-base" style={{ fontFamily: "Poppins" }}>
        Our friendly team would love to hear from you.
      </p>

      {/* Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <FormInput
          label="First Name"
          type="text"
          placeholder="First name"
          register={register("firstName")}
          error={errors.firstName}
        />
        <FormInput
          label="Last Name"
          type="text"
          placeholder="Last name"
          register={register("lastName")}
          error={errors.lastName}
        />
      </div>

      {/* Email */}
      <FormInput
        label="Email"
        type="email"
        placeholder="you@company.com"
        register={register("email")}
        error={errors.email}
      />

      {/* Phone */}
      <FormInput
        label="Phone"
        type="tel"
        placeholder="+1 (555) 000-0000"
        register={register("phone")}
        error={errors.phone}
      />

      {/* Preferences */}
      <div className="mt-3 sm:mt-4">
        <p className="font-semibold mb-2 text-sm sm:text-base">Email preferences</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {["deals/offers", "menu updates", "jodhpur news", "vacancies"].map((value) => (
            <label key={value} className="custom-checkbox">
            <input
              type="checkbox"
              value={value}
              {...register("preferences")}
            />
            <span className="checkmark"></span>
            <span className="label-text">
              {value}
            </span>
          </label>
          
          ))}
        </div>
        <p className="text-red-300 text-xs sm:text-sm">{errors.preferences?.message}</p>
      </div>

      {/* Privacy Policy */}
      <div className="mt-3 sm:mt-4">
           <label className="custom-checkbox with-white-bg">
  <input type="checkbox" {...register("privacy")} />
  <span className="checkmark"></span>
  <span className="text text-[#667085] text-[16px]">
    You agree to our friendly
    <a href="#" className="underline ml-1">privacy policy</a>
  </span>
</label>
        <p className="text-red-300 text-xs sm:text-sm">{errors.privacy?.message}</p>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="mt-4 sm:mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded text-sm sm:text-base"
      >
        Send message
      </button>
    </form>
  );
}
