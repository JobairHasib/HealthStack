import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
        <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            Welcome to HealthStack, a place where healing and compassion converge. Since our establishment, we have been dedicated to providing exceptional medical care and promoting community wellness. Our journey began with a simple mission: to make quality healthcare accessible to all, and this principle continues to guide us every day.
          </p>
          <p>Our strength lies in our team of highly skilled and dedicated professionals. From our board-certified physicians and specialist surgeons to our compassionate nursing staff and diligent support teams, everyone at HealthStack is committed to your health. We foster a culture of collaboration and continuous learning to ensure we are always at the forefront of medical advancements.</p>
          <p>
            We believe that advanced technology is crucial for modern healthcare. That's why we invest in state-of-the-art medical equipment and cutting-edge facilities. Our institute is designed to provide a safe, comfortable, and efficient environment for our patients, ensuring they receive the best possible diagnosis and treatment.
          </p>
          <p>At HealthStack, we don't just treat illnesses; we care for individuals. Your well-being is our highest priority, and we are honored to be your trusted partner on your journey to a healthier life.</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
