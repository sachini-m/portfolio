// components
import CirclesImage from "/components/CirclesImage";

// icons
import { BsArrowRight } from "react-icons/bs";

// framer motion
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import Loading from "../../components/Loading";
import { fadeIn } from "../../variants";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    reset,
  } = useForm();

  const notify = (message) => {
    toast(message);
  };

  function onSubmit(data) {
    if (isValid) {
      setIsLoading(true);
      const apiEndpoint = "/api/email";

      fetch(apiEndpoint, {
        method: "POST",
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((response) => {
          notify("Thanks for reaching out.\n I'll get back to you soon!");
          reset();
        })
        .catch((err) => {
          alert(err);
        })
        .finally(() => setIsLoading(false));
    }
    // sendEmail(data);
  }

  return (
    <div className="h-full bg-primary/30">
      {isLoading && <Loading />}
      <div className="container mx-auto py-32 text-center flex items-center justify-center h-full xl:text-left">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-1 flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* input group */}
            <div className="flex w-full gap-x-6">
              <input
                type="text"
                placeholder="name"
                className={`input ${errors.name ? "ring-accent" : ""}`}
                {...register("name", { required: true })}
              />
              <input
                type="email"
                placeholder="email"
                className={`input ${errors.name ? "ring-accent" : ""}`}
                {...register("email", { required: true })}
              />
            </div>
            <input
              type="text"
              placeholder="subject"
              className={`input ${errors.name ? "ring-accent" : ""}`}
              {...register("subject")}
            />
            <textarea
              placeholder="message"
              className={`textarea ${errors.name ? "ring-accent" : ""}`}
              {...register("message", { required: true })}
            />
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let&apos;s talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
      <CirclesImage />
    </div>
  );
};

export default Contact;
