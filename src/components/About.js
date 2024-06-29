import React from "react";
import aboutImage from "./img/Band Members.png";
import "./About.css"; // Import the CSS file

function About() {
  return (
    <div className="about-container">
      <section id="about">
        <h2 className="about-title">About Us</h2>
        <div className="about-content">
          <img src={aboutImage} alt="Our Team" className="about-image" />
          <div className="about-text-container">
            <p className="about-text">
              Welcome to <strong>The Generics</strong>, your trusted
              destination for the finest selection of products online. Since our
              inception, we have been committed to providing exceptional value,
              quality, and service to our customers.
            </p>
            <p className="about-text">
              Our journey began in 2015 with a simple yet powerful idea: to
              make top-quality [product category] accessible to everyone,
              regardless of where they live. Over the years, we have grown into
              a leading online retailer, serving thousands of satisfied
              customers across the globe.
            </p>
            <p className="about-text">
              At <strong>The generics</strong>, our mission is to deliver
              unparalleled shopping experiences by offering a wide range of
              carefully curated products that cater to your needs and
              preferences. We believe in the power of choice, and our extensive
              catalog is designed to give you exactly that.
            </p>
            <p className="about-text">
              Our team is passionate about what we do, and we work tirelessly to
              ensure that every product we offer meets our high standards of
              quality and value. We are constantly innovating and expanding our
              offerings to bring you the best the market has to offer.
            </p>
            <p className="about-text">
              We are also dedicated to sustainability and social responsibility.
              We actively seek out eco-friendly products and practices, and we
              strive to minimize our impact on the environment. We believe in
              giving back to the community and support various initiatives that
              promote a better world for all.
            </p>
            <p className="about-text">
              Thank you for choosing <strong>The generics</strong>. We are
              excited to serve you and to help you find exactly what you’re
              looking for. If you have any questions or need assistance, please
              don't hesitate to reach out to our customer support team at
              [thegenerics@product.com].
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
