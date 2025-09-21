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
  <div style={{ marginBottom: "clamp(2rem, 3rem, 4.31rem)" }}>
    <label
      style={{
        color: "#898989",
        fontFamily: "Montserrat",
        fontSize: "clamp(0.875rem, 1.06131rem, 1.06131rem)",
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "normal",
        marginBottom: "clamp(0.25rem, 0.44rem, 0.44rem)",
        display: "block",
      }}
    >
      {label} {!optional && <span className="text-red-500">*</span>}
    </label>
    <div style={{ marginBottom: "clamp(0.75rem, 1.06rem, 1.06rem)" }}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        style={{
          display: "flex",
          padding: "clamp(0.75rem, 1.03006rem, 1.03006rem) clamp(1rem, 1.24856rem, 1.24856rem)",
          justifyContent: "space-between",
          alignItems: "center",
          alignSelf: "stretch",
          width: "100%",
          border: error ? "1px solid #ef4444" : "1px solid #d1d5db",
          borderRadius: "9999px",
          backgroundColor: "white",
          outline: "none",
        }}
        className="focus:ring-2 focus:ring-blue-500 transition-shadow"
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
      !/^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?$/.test(
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
      if (!/^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?$/.test(value)) {
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
     <div
       id="apply-form"
       className="bg-white min-h-screen font-sans antialiased text-gray-900"
     >
       <div className="py-8 md:py-16 px-4 md:px-0">
         <div className="">
           <h1
             style={{
               color: "#000",
               fontFamily: "Montserrat, sans-serif",
               fontStyle: "normal",
               fontWeight: 600,
               lineHeight: "normal",
               textTransform: "capitalize",
               marginBottom: "clamp(2rem, 3rem, 3rem)"
             }}
             className="text-center lg:text-left text-[3rem] sm:text-[4.5rem] lg:text-[6.03563rem]"
           >
             Apply Here
           </h1>
         </div>
         <div className="grid md:grid-cols-2 gap-x-16 lg:gap-x-24 items-center">
           <div className="hidden md:flex  items-center">
             <div className="">
               <img
                src="All Images Landing page Altecht\Careers.jpg"
                alt="A rowing team working in unison"
                style={{
                  width: "34.625rem",
                  height: "47.125rem",
                  flexShrink: 0,
                }}
                className="object-cover shadow-lg"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/600x800/e2e8f0/e2e8f0?text=Image";
                }}
              />
            </div>
          </div>
          <form noValidate onSubmit={handleSubmit}>
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

             <div style={{ marginBottom: "clamp(1.25rem, 1.93rem, 1.93rem)" }}>
               <label
                 style={{
                   color: "#898989",
                   fontFamily: "Montserrat",
                   fontSize: "clamp(0.875rem, 1.06131rem, 1.06131rem)",
                   fontStyle: "normal",
                   fontWeight: 700,
                   lineHeight: "normal",
                   marginBottom: "clamp(0.25rem, 0.44rem, 0.44rem)",
                   display: "block",
                 }}
               >
                 Upload Document <span className="text-red-500">*</span>
               </label>
              <div
                className={`relative border ${
                  errors.resume ? "border-red-500" : "border-gray-300"
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
                     padding: "0 clamp(1rem, 1.24856rem, 1.24856rem) 0 0",
                     justifyContent: "space-between",
                     alignItems: "center",
                     alignSelf: "stretch",
                     backgroundColor: "white",
                     borderRadius: "9999px",
                   }}
                 >
                   <span
                     className="bg-blue-600 text-white text-sm font-semibold rounded-full"
                     style={{
                       padding: "clamp(0.75rem, 1.03006rem, 1.03006rem) clamp(1rem, 1.24856rem, 1.24856rem)",
                       background:
                         "linear-gradient(0deg, #007AEC 0%, #007AEC 100%), #000",
                     }}
                   >
                     Choose File
                   </span>
                  <span className="ml-3 text-gray-500 truncate">
                    {selectedFileName || "Upload your resume"}
                  </span>
                </div>
              </div>
              {errors.resume && (
                <p className="text-center text-red-500 text-sm">
                  {errors.resume}
                </p>
              )}
            </div>

             <button
               type="submit"
               style={{
                 display: "flex",
                 width: "100%",
                 maxWidth: "38.747rem",
                 height: "clamp(3rem, 3.93306rem, 3.93306rem)",
                 padding: "clamp(0.5rem, 0.62431rem, 0.62431rem)",
                 justifyContent: "center",
                 alignItems: "center",
                 gap: "clamp(0.5rem, 0.62431rem, 0.62431rem)",
                 flexShrink: 0,
                 borderRadius: "clamp(2rem, 3.55844rem, 3.55844rem)",
                 background:
                   "linear-gradient(0deg, #007AEC 0%, #007AEC 100%), #000",
                 border: "none",
                 color: "white",
                 fontWeight: "bold",
                 cursor: "pointer",
                 fontSize: "clamp(0.875rem, 1rem, 1rem)"
               }}
               className="hover:opacity-90 transition-opacity duration-300"
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
