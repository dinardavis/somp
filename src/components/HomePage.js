import React, { useState, useEffect } from "react";
import NewsletterSignup from "./NewsletterSignup";
import BlogTeaser from "./BlogTeaser";

function HomePage({ onPostClick, onNavigate }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger initial animations
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    // Add scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    // Observe elements for scroll animations
    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => observer.observe(el));

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`homepage ${isVisible ? "visible" : ""}`}>
      <section className="hero">
        <div className="hero-container">
          <div className="hero-left">
            <h1 className="hero-title">Reboot your life! <br></br><span>(and actually enjoy it)</span></h1>
            <p className="hero-subtitle">
              I'm Dinar. I make simple playbooks for big moves—changing cities,
              changing lanes, changing your mind. I've lived in 11 countries, I
              mess up publicly, and I share what actually works. Currently
              reporting from Bangkok, but the lessons travel well.
            </p>
          </div>
          <div className="hero-right">
            <NewsletterSignup />
          </div>
        </div>
      </section>

      <section className="about-preview scroll-animate">
        <div className="about-preview-container">

            <img
              className="about-image"
              src="/images/plane-wing.png"
              alt="Airplane wing against blue sky"
            />
   
          <div className="about-content">
            <h2>What You'll Find Here</h2>
            <p>
              A home base for people who want a bigger life without lighting it
              on fire. I share real costs, doable steps, and the kind of mindset
              shifts that survive jet lag. It's not about "finding yourself" on
              a mountaintop. It's about building a life you actually like—on
              purpose.
            </p>
          </div>
        </div>
      </section>

      <section className="blog-preview scroll-animate">
        <div className="blog-preview-container">
          <h2>Latest from the blog</h2>
          <BlogTeaser onPostClick={onPostClick} onNavigate={onNavigate} />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
