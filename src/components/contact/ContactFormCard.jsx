import { useForm } from "react-hook-form";
import { IoArrowForward } from "react-icons/io5";
import Field from "./Field";

function ContactFormCard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const handleFormSubmit = (formData) => {
    console.log(formData);
    reset();
  };

  return (
    <div>
      <h3 className="text-3xl font-semibold text-heading-color mb-3 text-center mt-10 ">
        Get In Touch
      </h3>
      <section className="p-6 pt-1 dark:bg-gray-100 dark:text-gray-900">
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-1 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
            <div className="grid grid-cols-1 gap-4 col-span-full lg:col-span-2">
              <div className="col-span-full sm:col-span-1">
                <Field error={errors.firstName}>
                  <input
                    {...register("firstName", {
                      required: "This field is required",
                    })}
                    id="firstName"
                    type="text"
                    placeholder="First name"
                    className="w-[90%] py-4 ml-2 border-b focus:border-b-service-golden-color dark:text-gray-50  focus:dark:ring-violet-600 dark:border-gray-300 outline-none text-gray-500"
                  />
                </Field>
              </div>
              <div className="col-span-full sm:col-span-1">
                <Field error={errors.lastName}>
                  <input
                    {...register("lastName", {
                      required: "This field is required",
                    })}
                    id="lastName"
                    type="text"
                    placeholder="Last name"
                    className="w-full pl-2 py-4 border-b focus:border-b-service-golden-color dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 outline-none text-gray-500"
                  />
                </Field>
              </div>
              <div className="col-span-full sm:col-span-2">
                <Field error={errors.email}>
                  <input
                    {...register("email", {
                      required: "email field is required",
                    })}
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="w-full pl-2 py-4 border-b focus:border-b-service-golden-color dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 outline-none text-gray-500"
                  />
                </Field>
              </div>
              <div className="col-span-full sm:col-span-2">
                <Field error={errors.category}>
                  <select
                    {...register("category", { required: "category is empty" })}
                    name="category"
                    id="category"
                    className="w-full pl-1 py-4 border-b focus:border-b-service-golden-color outline-none text-gray-500 focus:dark:ring-violet-600 dark:border-gray-300"
                  >
                    <option value="">choose a category</option>
                    <option value="react-dev">
                      Web Development with React
                    </option>
                    <option value="next-dev">
                      Web development with Next.js{" "}
                    </option>
                    <option value="laravel-dev">
                      Web development with Laravel
                    </option>
                  </select>
                </Field>
              </div>
              <div className="col-span-full sm:col-span-2">
                <Field error={errors.bio}>
                  <textarea
                    {...register("bio", { required: "field is required" })}
                    id="bio"
                    placeholder="Message"
                    className="w-full h-40 pl-2 py-4 border-b focus:border-b-service-golden-color dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 outline-none text-gray-500"
                  ></textarea>
                </Field>
              </div>
              <div className="col-span-full sm:col-span-2 mt-4 flex justify-center">
                <div>
                  {" "}
                  <button
                    className="bg-primary-theme-color flex items-center justify-center gap-2 sm:gap-4 text-white font-semibold text-sm sm:text-base px-3 py-2 lg:px-8 lg:py-4  rounded-3xl lg:rounded-[40px]"
                    type="submit"
                  >
                    Submit Now <IoArrowForward />
                  </button>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
}

export default ContactFormCard;
