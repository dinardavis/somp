import React, { useState, useEffect } from "react";

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd send this to your backend
    console.log("Contact form submitted:", contactForm);
    setIsSubmitted(true);
    setContactForm({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={`about-page ${isVisible ? "visible" : ""}`}>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-container">
          <div className="about-hero-content">
            <h1 className="about-hero-title">About seatofmyplans</h1>
            <p className="about-hero-subtitle">
              Practical courage for people who want a bigger life.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="about-intro scroll-animate">
        <div className="about-intro-container">
          <div className="about-intro-content">
            <h2>Hey, I'm Dinar.</h2>
            <p>
              I was born in Hiroshima, raised mostly in California, and I've
              basically been in motion ever since. Family legend says I took my
              first steps in an airport during a 32-hour odyssey of missed
              flights from Japan to the U.S. If you're wondering how I ended up
              building a life around travel… yeah, that tracks.
            </p>
            <p>
              Since then I've traveled to 20+ countries and lived in 11. In
              2022, I left for "a couple months." It turned into two years and a
              very convincing answer to the question, "What if I just kept
              going?"
            </p>
          </div>
          <div className="about-intro-image">
            <img
              src="/images/me_cheers.jpg"
              alt="Dinar cheers"
              className="intro-photo"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission scroll-animate">
        <div className="about-mission-container">
          <h2>What seatofmyplans is</h2>
          <p className="mission-intro">
            A friendly toolkit for big moves and better days:
          </p>
          <div className="mission-features">
            <div className="mission-feature">
              <h3>Playbooks for relocating</h3>
              <p>Without burning your life down</p>
            </div>
            <div className="mission-feature">
              <h3>City cheat sheets</h3>
              <p>Bangkok now; more countries rolling out</p>
            </div>
            <div className="mission-feature">
              <h3>Budgets & templates</h3>
              <p>That work in the real world</p>
            </div>
            <div className="mission-feature">
              <h3>Stories with the bloopers left in</h3>
              <p>Because that's where the learning lives</p>
            </div>
          </div>
          <p className="mission-closing">
            I share what I try, what breaks, and what I fix—so you can skip a
            few potholes and get where you're going faster.
          </p>
        </div>
      </section>

      {/* Beliefs Section */}
      <section className="about-beliefs scroll-animate">
        <div className="about-beliefs-container">
          <h2>What I believe</h2>
          <div className="beliefs-grid">
            <div className="belief-item">
              <h3>Fun is a strategy</h3>
              <p>If it's miserable, it won't be sustainable.</p>
            </div>
            <div className="belief-item">
              <h3>Small bets > giant leaps</h3>
              <p>Try the thing, learn, adjust, repeat.</p>
            </div>
            <div className="belief-item">
              <h3>Money buys time and options</h3>
              <p>
                Plan your runway so adventure isn't panic wearing a cute hat.
              </p>
            </div>
            <div className="belief-item">
              <h3>Home is a skill</h3>
              <p>You can learn to build it anywhere.</p>
            </div>
            <div className="belief-item">
              <h3>Tell the truth</h3>
              <p>About costs, visas, loneliness, wins—the whole thing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Section */}
      <section className="about-personal scroll-animate">
        <div className="about-personal-container">
          <div className="about-personal-image">
            <img
              src="/images/me_songkran.png"
              alt="Dinar at Songkran festival"
              className="personal-photo"
            />
          </div>
          <div className="about-personal-content">
            <h2>My kind of day</h2>
            <p>
              I love getting dressed up and settling into a beautiful bar for a
              proper cocktail… and I also love a beer at a neighborhood pub
              where the floor is doing its best. I will always pick the
              strawberry option on any menu (sorry, not sorry). And overcast
              days? They smell like home.
            </p>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="about-journey scroll-animate">
        <div className="about-journey-container">
          <h2>How I got here (the short version)</h2>
          <div className="journey-steps">
            <div className="journey-step">
              <h3>Born in Hiroshima, raised in California</h3>
              <p>Traveled my whole life.</p>
            </div>
            <div className="journey-step">
              <h3>Took my first steps in an airport</h3>
              <p>During a long-haul chaos parade.</p>
            </div>
            <div className="journey-step">
              <h3>2022: left for "a couple months"</h3>
              <p>Kept the suitcase rolling for two years.</p>
            </div>
            <div className="journey-step">
              <h3>Now: helping you design a life you actually enjoy</h3>
              <p>Where "someday" has a date.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA Banner */}
      <section className="newsletter-banner">
        <div className="newsletter-banner-container">
          <div className="newsletter-banner-content">
            <h2>Ready to start your adventure?</h2>
            <p>
              Join the newsletter and grab the Bangkok Starter Kit now. Next up:
              quick-hit Country Cheat Sheets, a Runway Calculator, and a 30-Day
              Life Reboot that doesn't require perfection (or kale).
            </p>
            <div className="newsletter-banner-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-banner-input"
              />
              <button className="btn btn-primary">Get the Starter Kit</button>
            </div>
            <p className="newsletter-banner-note">
              Zero spam. Occasional bad jokes. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="about-contact scroll-animate">
        <div className="about-contact-container">
          <h2>Get in touch</h2>
          {isSubmitted ? (
            <div className="contact-success">
              <h3>Message sent!</h3>
              <p>Thanks for reaching out. I'll get back to you soon.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={contactForm.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="form-textarea"
                  placeholder="Questions, wins, 'I'm terrified but I'm doing it'? Let me know!"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

export default About;
