import React, { useState, useEffect, useRef } from "react";
import FirstSectionWrapper from "./FirstSectionWrapper";

// A reusable styled input field component
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
  <div
    className="flex flex-col w-full mt-[1.5rem] md:mt-[3.25rem]"
    style={{
      height: isDescription ? "auto" : "6.1875rem",
      paddingBottom: "1.0625rem",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
    }}
  >
    <label
      style={{
        color: "#000",
        fontFamily: "Montserrat",
        fontSize: "1.0625rem",
        fontWeight: 700,
        marginBottom: "0.44rem",
        alignSelf: "flex-start",
      }}
    >
      {label}
    </label>
    {as === "textarea" ? (
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="w-full"
        style={{
          display: "flex",
          padding: "1.03125rem 1.25rem",
          borderRadius: "0.3125rem",
          border: "1px solid #787878",
          background: "#FFF",
          height: "7.25rem",
          fontFamily: "Montserrat",
          fontSize: "1rem",
          outline: "none",
          resize: "none",
        }}
      />
    ) : (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="w-full"
        style={{
          display: "flex",
          padding: "1.03125rem 1.25rem",
          borderRadius: "0.3125rem",
          border: "1px solid #787878",
          background: "#FFF",
          fontFamily: "Montserrat",
          fontSize: "1rem",
          outline: "none",
        }}
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
  });

  const [errors, setErrors] = useState({});
  const [selectedFileName, setSelectedFileName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);
  // toggle this to true to always show modal on submit for testing purposes
  const TEST_SHOW_MODAL_ON_SUBMIT = true;

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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (key !== "company") {
        const error = validateField(key, formData[key]);
        if (error) {
          newErrors[key] = error;
        }
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valid = validateForm();
    if (valid) {
      console.log("Form submitted:", formData);
      // reset the form on valid submit
      setFormData({ name: "", email: "", company: "", message: "" });
      setSelectedFileName("");
      setShowModal(true);
      return;
    }
    // For testing: show modal even if validation fails
    if (TEST_SHOW_MODAL_ON_SUBMIT) {
      setShowModal(true);
    }
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        resume: file,
      }));
      setSelectedFileName(file.name);
      // Clear error when file is selected
      if (errors.resume) {
        setErrors((prev) => ({
          ...prev,
          resume: "",
        }));
      }
    }
  };

  // close modal on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setShowModal(false);
    };
    if (showModal) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showModal]);

  return (
    <div className=" ">
      <FirstSectionWrapper>
        <div className="flex flex-col lg:flex-row md:flex-row lg:justify-between md:justify-between  gap-6 lg:gap-8 lg:h-[95rem]">
          {/* Left Column - Image (hidden on mobile) */}
          <div className="hidden lg:block flex-shrink-0 w-1/2 max-w-[44.0625rem]">
            <img
              src="Squanta Assets\383c7fd68a58663286ed1a0b9d36fe4eb6c54a16.jpg"
              alt="Two business people shaking hands over a tablet"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column - Form */}
          <div className="flex flex-col flex-1 min-w-0 justify-center">
            <h3
              className="text-[1.5rem] lg:text-[2rem] md:text-[1.8rem] mt-6 lg:mt-[3.25rem] md:mt-[2.75rem] mb-6 lg:mb-[3.25rem] md:mb-[2.75rem] text-center font-alan-sans"
              style={{ color: "#000" }}
            >
              Got an idea? Let's build it
            </h3>

            <hr
              className="mb-6 lg:mb-[3.12rem] md:mb-[2.75rem] w-full"
              style={{
                height: "0.0625rem",
                background: "rgba(80, 80, 80, 0.10)",
                border: "none",
              }}
            />

            <form onSubmit={handleSubmit} className="w-full">
              <InputField
                label="What's your name?"
                placeholder="Your name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                onBlur={handleBlur}
                error={errors.name}
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
              />
              <InputField
                label="What's the company name?"
                placeholder="Company Name (Optional)"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                onBlur={handleBlur}
                error={errors.company}
                optional
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
              />
              <div
                style={{ marginBottom: "clamp(1.25rem, 1.93rem, 1.93rem)" }}
                className="mt-[1.5rem] md:mt-[3.25rem]"
              >
                <label
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: "clamp(0.875rem, 1.06131rem, 1.06131rem)",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "normal",
                    marginBottom: "clamp(0.25rem, 0.44rem, 0.44rem)",
                    display: "block",
                  }}
                >
                  Upload Document
                </label>
                <div
                  className={`relative border ${
                    errors.resume ? "border-red-500" : "border-gray-300"
                  }  hover:border-gray-400`}
                  style={{
                    borderRadius: "0.3125rem",
                    border: "1px solid rgb(120, 120, 120)",
                    background: "rgb(255, 255, 255)",
                  }}
                >
                  <input
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                  />
                  <div
                    style={{
                      display: "flex",
                      padding: "0 clamp(1rem, 1.24856rem, 1.24856rem) 0 0",
                      alignItems: "center",
                      alignSelf: "stretch",
                      backgroundColor: "white",
                      borderRadius: "9999px",
                    }}
                  >
                    <span
                      className="bg-black text-white text-md font-semibold "
                      style={{
                        padding:
                          "clamp(0.75rem, 1.03006rem, 1.03006rem) clamp(0.75rem, 1.04856rem, 1.04856rem)",
                      }}
                    >
                      Choose File
                    </span>
                    <span className="ml-3 text-gray-500 truncate">
                      {selectedFileName || "No file choosen"}
                    </span>
                  </div>
                </div>
                {errors.resume && (
                  <p className="text-center text-red-500 text-sm">
                    {errors.resume}
                  </p>
                )}
              </div>

              <div className="flex justify-center mt-[1.5rem] md:mt-[5rem] pb-10 ">
                <button
                  type="submit"
                  className="w-[13.6875rem] h-[3.9375rem] rounded-[3.5625rem] bg-black text-white font-semibold text-[1rem] lg:text-[1.125rem] md:text-[1.0625rem] cursor-pointer "
                  style={{
                    fontFamily: "Montserrat",
                    border: "1px solid #FFF",
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
            {/* Success modal overlay (responsive + animations) */}
            {showModal && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center"
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
                    minHeight: "25.875rem",
                    height: "clamp(25.875rem, 50vw, 37.875rem)",
                    maxHeight: "37.875rem",
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
                      className="font-montserrat text-white"
                      style={{
                        fontFamily: "Montserrat",
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
    </div>
  );
};

export default CollaborationForm;
