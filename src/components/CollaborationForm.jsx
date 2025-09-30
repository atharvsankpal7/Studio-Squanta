import React, { useState, useEffect, useRef } from "react";
import FirstSectionWrapper from "./FirstSectionWrapper";
import Container from "./ui/Container";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
// Reusable styled input component
const InputField = ({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  name,
  as = "input",
  isDescription = false,
}) => (
  <div className="flex flex-col w-full mt-6 md:mt-12 font-alan-sans">
    <label className="text-white text-[1.0625rem] mb-2 font-medium">
      {label} *
    </label>
    {as === "textarea" ? (
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="w-full p-4 border border-gray-500 rounded-2xl  text-base outline-none resize-none h-28 "
      />
    ) : (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="w-full p-4 border border-gray-500 rounded-2xl  text-base outline-none"
      />
    )}
    {error && <p className="mt-1 text-red-500 text-sm">{error}</p>}
  </div>
);

const CollaborationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    resume: null,
  });

  const [errors, setErrors] = useState({});
  const [selectedFileName, setSelectedFileName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  // toggle to false for real usage
  const TEST_SHOW_MODAL_ON_SUBMIT = false;

  const validateField = (name, value) => {
    if (name === "name") {
      if (!value.trim()) return "Name is required";
      if (!/^[a-zA-Z\s]*$/.test(value))
        return "Name should only contain letters";
    }
    if (name === "email") {
      if (!value.trim()) return "Email is required";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        return "Please enter a valid email address";
    }
    if (name === "message") {
      if (!value.trim()) return "Message is required";
      if (value.length < 10)
        return "Message should be at least 10 characters long";
    }
    return "";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (name !== "company") {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setShowModal(false);
    if (showModal) {
      window.addEventListener("keydown", onKey);

      const timer = setTimeout(() => {
        setShowModal(false);
      }, 3000);

      return () => {
        window.removeEventListener("keydown", onKey);
        clearTimeout(timer);
      };
    }
    return () => window.removeEventListener("keydown", onKey);
  }, [showModal]);

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (key !== "company" && key !== "resume") {
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, resume: file }));
      setSelectedFileName(file.name);
      if (errors.resume) setErrors((prev) => ({ ...prev, resume: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valid = validateForm();
    if (valid) {
      console.log("Form submitted:", formData);
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
        resume: null,
      });
      setSelectedFileName("");
      setShowModal(true);
      return;
    }
    if (TEST_SHOW_MODAL_ON_SUBMIT) setShowModal(true);
  };

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setShowModal(false);
    if (showModal) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showModal]);

  return (
    <>
      <h3 className="text-2xl lg:text-[3rem] pt-6 pb-6  font-alan-sans font-bold">
        Got an idea? Let's build it
      </h3>
      <motion.div
        initial={{ scaleX: 0, originX: 0.5 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full h-[2px] mb-4 bg-gradient-to-r from-[#444] via-white to-[#444]"
      />
      <FirstSectionWrapper>
        <div className="flex flex-col lg:flex-row gap-8 ">
          {/* Left Column */}
          <div className="hidden lg:block my-auto max-w-[44rem]">
            <img
              src="Squanta Assets/collaboration.png"
              alt="Business collaboration"
            />
          </div>

          {/* Right Column - Form */}
          <div className="flex flex-col flex-1 min-w-0 justify-center">
            <form onSubmit={handleSubmit} className="w-full text-white">
              <InputField
                label="What's your name?"
                placeholder="Your name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                onBlur={handleBlur}
                error={errors.name}
                className="bg-black text-white border border-white rounded-md"
              />

              <InputField
                label="How about your Email Address?"
                placeholder="Your Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={handleBlur}
                error={errors.email}
                className="bg-black text-white border border-white rounded-md"
              />

              <InputField
                label="What's the company name?"
                placeholder="Company Name (Optional)"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className="bg-black text-white border border-white rounded-md"
              />

              <InputField
                label="How can we help you?"
                placeholder="Describe your project in detail"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                onBlur={handleBlur}
                error={errors.message}
                as="textarea"
                isDescription={true}
                className="bg-black text-white border border-white rounded-md"
              />

              {/* File upload */}
              <div className="mt-8 font-alan-sans font-medium">
                <label className="block text-base mb-2 text-white">
                  Upload Document *
                </label>
                <div
                  className={`relative border bg-white  text-white rounded-full  ${
                    errors.resume ? "border-red-500" : "border-white"
                  }`}
                >
                  <input
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer "
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                  />
                  <div className="flex items-center">
                    <span className="bg-[#2B2B2B] text-white px-4 py-2 rounded-full ">
                      Choose File
                    </span>
                    <span className="ml-3 text-[#15151580]  truncate">
                      {selectedFileName || "No file chosen"}
                    </span>
                  </div>
                </div>
                {errors.resume && (
                  <p className="text-red-500 text-sm mt-1">{errors.resume}</p>
                )}
              </div>

              {/* Submit button */}
              <div className="flex justify-center mt-12 pb-10">
                <button
                  type="submit"
                  className="w-56 h-16 rounded-full bg-black text-white font-semibold text-lg border border-[#00FF26] cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </form>

            {/* Success modal */}
            {showModal && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center font-alan-sans"
                onClick={() => setShowModal(false)}
                style={{ animation: "overlay-fade 240ms ease forwards" }}
              >
                <style>{`
                  @keyframes overlay-fade { from { background: rgba(0,0,0,0); } to { background: rgba(0,0,0,0.5); } }
                  @keyframes modal-pop { 0% { transform: translateY(8px) scale(0.96); opacity: 0 } 60% { transform: translateY(-4px) scale(1.02); opacity: 1 } 100% { transform: translateY(0) scale(1); opacity: 1 } }
                  @keyframes svg-pop { 0% { transform: scale(0.6); opacity: 0 } 70% { transform: scale(1.05); opacity: 1 } 100% { transform: scale(1); opacity: 1 } }
                `}</style>

                <div
                  ref={modalRef}
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    width: "min(51.875rem, 95%)",
                    maxWidth: "51.875rem",
                    minWidth: "285px",
                    minHeight: "208px",
                    height: "clamp(25.875rem, 50vw, 37.875rem)",
                    maxHeight: "606px",
                    flexShrink: 0,
                    borderRadius: "4.375rem",
                    background: "#1C1C1C",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    padding: "2rem",
                    boxSizing: "border-box",
                    animation:
                      "modal-pop 320ms cubic-bezier(.2,.8,.2,1) forwards",
                  }}
                >
                  {/* 1st text - STUDIO SQUANTA (two words with different colors) */}
                  <div
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      alignItems: "center",
                      flexWrap: "wrap",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      className="font-alan-sans"
                      style={{
                        color: "#FFF",
                        fontFamily: "Rogbold",
                        fontSize: "clamp(1.2rem, 2.2vw, 1.87113rem)",
                        fontWeight: 400,
                        lineHeight: "normal",
                      }}
                    >
                      STUDIO
                    </span>
                    <span
                      className="font-alan-sans"
                      style={{
                        color: "#00FF26",
                        fontFamily: "Rogbold",
                        fontSize: "clamp(1.2rem, 2.2vw, 1.87113rem)",
                        fontWeight: 400,
                        lineHeight: "normal",
                      }}
                    >
                      SQUANTA
                    </span>
                  </div>

                  {/* 2nd - SVG stack (center SVG will pop) */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "8.8125rem",
                        height: "8.8125rem",
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {/* outer SVG */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        viewBox="0 0 141 141"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M70.5 141C109.436 141 141 109.436 141 70.5C141 31.5639 109.436 0 70.5 0C31.5639 0 0 31.5639 0 70.5C0 109.436 31.5639 141 70.5 141Z"
                          fill="#51DC8E"
                          fillOpacity="0.5"
                        />
                      </svg>
                      {/* inner centered circle with pop animation */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "5.72813rem",
                            height: "5.72813rem",
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            animation:
                              "svg-pop 420ms cubic-bezier(.2,.8,.2,1) 120ms both",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            viewBox="0 0 93 93"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M46.4996 92.3258C71.808 92.3258 92.3246 71.8092 92.3246 46.5008C92.3246 21.1923 71.808 0.675781 46.4996 0.675781C21.1911 0.675781 0.674561 21.1923 0.674561 46.5008C0.674561 71.8092 21.1911 92.3258 46.4996 92.3258Z"
                              fill="#00FF26"
                            />
                          </svg>
                          {/* innermost small svg */}
                          <div
                            style={{
                              position: "absolute",
                              width: "1.7625rem",
                              height: "1.7625rem",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="100%"
                              viewBox="0 0 43 31"
                              fill="none"
                            >
                              <path
                                d="M4 16.5L16.5 28L39 4"
                                stroke="#2B2B2B"
                                strokeWidth="8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 3rd - message text */}
                  <div
                    style={{
                      width: "min(31.1875rem, 90%)",
                      textAlign: "center",
                    }}
                  >
                    <p
                      className=" text-white font-alan-sans"
                      style={{
                        fontSize: "clamp(1rem, 2.4vw, 2rem)",
                        fontWeight: 500,
                        lineHeight: "normal",
                      }}
                    >
                      Thank you! We've received your details and will get back
                      to you shortly.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </FirstSectionWrapper>
    </>
  );
};

export default CollaborationForm;
