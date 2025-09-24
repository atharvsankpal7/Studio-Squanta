import React, { useState } from "react";
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
    if (validateForm()) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="w-full  ">
      <FirstSectionWrapper>
        <div className="flex flex-col lg:flex-row md:flex-row lg:justify-between md:justify-between  gap-6 lg:gap-8">
          {/* Left Column - Image (hidden on mobile) */}
          <div className="hidden lg:block flex-shrink-0 w-1/2 max-w-[44.0625rem]">
            <img
              src="Squanta Assets\383c7fd68a58663286ed1a0b9d36fe4eb6c54a16.jpg"
              alt="Two business people shaking hands over a tablet"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column - Form */}
          <div className="flex flex-col flex-1 min-w-0">
            <h3
              className="text-[1.5rem] lg:text-[2rem] md:text-[1.8rem] font-semibold mt-6 lg:mt-[3.25rem] md:mt-[2.75rem] mb-6 lg:mb-[3.25rem] md:mb-[2.75rem] text-center"
              style={{ fontFamily: "Montserrat", color: "#000" }}
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

              <div className="flex justify-center mt-6 md:mt-0 pb-10">
                <button
                  type="submit"
                  className="w-[13.6875rem] h-[3.9375rem] rounded-[3.5625rem] bg-black text-white font-semibold text-[1rem] lg:text-[1.125rem] md:text-[1.0625rem] "
                  style={{
                    fontFamily: "Montserrat",
                    border: "1px solid #FFF",
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </FirstSectionWrapper>
    </div>
  );
};

export default CollaborationForm;
