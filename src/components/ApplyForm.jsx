import React, { useState } from "react";

// A reusable styled input field for the application form
const InputField = ({
  label,
  placeholder,
  type = "text",
  optional = false,
  value,
  onChange,
  onBlur,
  error,
  name,
}) => (
  <div style={{ marginBottom: "clamp(1.75rem, 5vw, 4.31rem)" }}>
    <label
      style={{
        color: "#898989",
        fontFamily: "Montserrat",
        fontSize: "clamp(0.75rem, 2vw, 1.06131rem)",
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "normal",
        marginBottom: "clamp(0.5rem, 1vw, 0.44rem)",
        display: "block",
      }}
    >
      {label} {!optional}
    </label>
    <div style={{ marginBottom: "clamp(1rem, 1vw, 1.06rem)" }}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        style={{
          display: "flex",
          padding: "clamp(0.5rem, 2vw, 1.03006rem) clamp(0.75rem, 2vw, 1.24856rem)",
          justifyContent: "space-between",
          alignItems: "center",
          alignSelf: "stretch",
          width: "100%",
          border: error ? "1px solid #ef4444" : "1px solid #d1d5db",
          borderRadius: "9999px",
          backgroundColor: "white",
          color: "#000",
          outline: "none",
        }}
        className="focus:ring-2 focus:ring-green-500 transition-shadow"
      />
      {error && <p className="text-center text-red-500 text-sm">{error}</p>}
    </div>
  </div>
);

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    notice: "",
    ctc: "",
    portfolio: "",
    resume: null,
  });

  const [errors, setErrors] = useState({});
  const [selectedFileName, setSelectedFileName] = useState("");

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]*$/.test(formData.name)) {
      newErrors.name = "Name should only contain letters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Notice period validation
    if (!formData.notice.trim()) {
      newErrors.notice = "Notice period is required";
    }

    // CTC validation
    if (!formData.ctc.trim()) {
      newErrors.ctc = "CTC is required";
    } else if (!/^\d+(\.\d{1,2})?$/.test(formData.ctc)) {
      newErrors.ctc = "Please enter a valid CTC";
    }

    // Portfolio validation (optional)
    if (
      formData.portfolio &&
      !/^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- .\/\?%&=]*)?$/.test(
        formData.portfolio
      )
    ) {
      newErrors.portfolio = "Please enter a valid URL";
    }

    // Resume validation
    if (!formData.resume) {
      newErrors.resume = "Resume is required";
    } else {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(formData.resume.type)) {
        newErrors.resume = "Please upload a PDF or Word document";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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
    if (name === "notice") {
      if (!value.trim()) return "Notice period is required";
    }
    if (name === "ctc") {
      if (!value.trim()) return "CTC is required";
      if (!/^\d+(\.\d{1,2})?$/.test(value)) return "Please enter a valid CTC";
    }
    if (name === "portfolio" && value) {
      if (!/^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- .\/\?%&=]*)?$/.test(value)) {
        return "Please enter a valid URL";
      }
    }
    return "";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with submission
      console.log("Form submitted:", formData);
      // Add your form submission logic here
    }
  };

  return (
    <div id="apply-form" className="bg-black min-h-screen font-sans antialiased text-white">
      <div className="py-6 md:py-16 px-4 md:px-0">
        <div className="">
          <h1
            style={{
              color: "#FFF",
              fontStyle: "normal",
              fontWeight: 400,
              textTransform: "uppercase",
              marginBottom: "clamp(1rem, 2rem, 3rem)"
            }}
            className="text-center lg:text-left text-[2rem] sm:text-[3rem] lg:text-[6.03563rem] font-alan-sans tracking-wide"
          >
            Apply Here
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-x-8 lg:gap-x-24 items-start">
          <div className="hidden md:flex items-center">
            <div>{/* Decorative/illustration area (kept empty) */}</div>
          </div>

          <form
            noValidate
            onSubmit={handleSubmit}
            className="w-full max-w-[34rem] md:max-w-none mx-auto md:mx-0"
          >
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
              label="What's Your notice?"
              placeholder="Notice Period"
              name="notice"
              value={formData.notice}
              onChange={handleInputChange}
              onBlur={handleBlur}
              error={errors.notice}
            />
            <InputField
              label="Your CTC?"
              placeholder="Your CTC"
              name="ctc"
              value={formData.ctc}
              onChange={handleInputChange}
              onBlur={handleBlur}
              error={errors.ctc}
            />
            <InputField
              label="Your portfolio link"
              placeholder="Your work"
              optional
              name="portfolio"
              value={formData.portfolio}
              onChange={handleInputChange}
              onBlur={handleBlur}
              error={errors.portfolio}
            />

            <div style={{ marginBottom: "clamp(0.75rem, 1.5rem, 1.93rem)" }}>
              <label
                style={{
                  color: "#898989",
                  fontFamily: "Montserrat",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "clamp(0.75rem, 2vw, 1.06131rem)",
                  lineHeight: "normal",
                  marginBottom: "clamp(0.25rem, 0.44rem, 0.44rem)",
                  display: "block",
                }}
              >
                Upload Document
              </label>
              <div
                className={`relative border ${errors.resume ? "border-red-500" : "border-gray-300"
                  } rounded-full hover:border-gray-400`}
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
                    padding: "0 clamp(0.5rem, 0.9rem, 1.24856rem) 0 0",
                    alignItems: "center",
                    alignSelf: "stretch",
                    backgroundColor: "white",
                    borderRadius: "9999px",
                  }}
                >
                  <span
                    className="bg-[#1C1C1C] text-white text-sm font-semibold rounded-full"
                    style={{
                      padding:
                        "clamp(0.5rem, 0.75rem, 1.03006rem) clamp(0.75rem, 1rem, 1.24856rem)",
                    }}
                  >
                    Choose File
                  </span>
                  <span className="ml-3 text-gray-500 truncate text-sm">
                    {selectedFileName || "Upload your resume"}
                  </span>
                </div>
              </div>
              {errors.resume && (
                <p className="text-center text-red-500 text-sm">{errors.resume}</p>
              )}
            </div>

            <button
              type="submit"
              style={{
                display: "flex",
                width: "100%",
                height: "clamp(2.5rem, 3.2rem, 3.93306rem)",
                padding: "clamp(0.4rem, 0.5rem, 0.62431rem)",
                justifyContent: "center",
                alignItems: "center",
                gap: "clamp(0.375rem, 0.5rem, 0.62431rem)",
                flexShrink: 0,
                borderRadius: "clamp(1.5rem, 2.5rem, 3.55844rem)",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "clamp(0.75rem, 0.9rem, 1rem)"
              }}
              className="hover:opacity-90 transition-opacity duration-300 bg-[#1C1C1C] border border-[#00FF26] mx-auto md:mx-0"
            >
              APPLY NOW
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyForm;
