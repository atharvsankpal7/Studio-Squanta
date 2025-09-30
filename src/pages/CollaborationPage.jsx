import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import CollaborationForm from "../components/CollaborationForm";
import Footer from "../components/Footer";
import Container from "../components/ui/Container";

const CollaborationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black w-full">
      <Container>
        <div className=" text-white t max-w-[100vw]lg:pl-0 pt-18">
          <CollaborationForm />
        </div>
      </Container>
    </div>
  );
};

export default CollaborationPage;
