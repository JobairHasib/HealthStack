import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";

const Appointment = () => {
  return (
    <div className="page-container">
      <Hero
        title={"Schedule Your Appointment | HealthStack"}
        imageUrl={"/signin.png"}
      />
      <AppointmentForm/>
    </div>
  );
};

export default Appointment;