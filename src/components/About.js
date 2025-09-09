// About.jsx
import React, { useEffect, useState } from "react";
import {
  FiBookOpen,
  FiMapPin,
  FiPieChart,
  FiFilm,
  FiMail,
  FiClock,
  FiGlobe,
  FiCheckCircle,
} from "react-icons/fi";
import { TbConfetti, TbPigMoney } from "react-icons/tb";
import { LuIceCreamBowl } from "react-icons/lu";

function AboutEyebrow({ children }) {
  return <p className="about-eyebrow">{children}</p>;
}

function AboutSectionHeader({ eyebrow, title, lead }) {
  return (
    <header className="about-section-header">
      {eyebrow && <AboutEyebrow>{eyebrow}</AboutEyebrow>}
      <h2 className="about-section-title">{title}</h2>
      {lead && <p className="about-section-lead">{lead}</p>}
    </header>
  );
}

function AboutCard({ icon: Icon, title, children, className = "" }) {
  return (
    <article className={`about-card ${className}`}>
      {Icon && (
        <div className="about-card-icon" aria-hidden="true">
          <Icon size={22} />
        </div>
      )}
      {title && <h3 className="about-card-title">{title}</h3>}
      <div className="about-card-body">{children}</div>
    </article>
  );
}

function AboutIconPill({ icon: Icon, children }) {
  return (
    <span className="about-icon-pill">
      <span className="about-icon" aria-hidden="true">
        <Icon size={16} />
      </span>
      <span>{children}</span>
    </span>
  );
}

export default function About() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("about-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    document
      .querySelectorAll(".about-section")
      .forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    setContactForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setContactForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="about-page">

      {/* Hero */}
      <section className="about-section about-hero">
        <div className="about-section-content about-hero-inner">
          <div className="about-hero-copy">
            <p className="about-eyebrow">About</p>
            <h1 className="about-hero-title">
              The guy behind{" "}
              
            </h1>
            <img
                src="/images/somp.png"
                alt="Seat Of My Plans"
                className="about-hero-logo"
              />
            <p className="about-hero-lead">Practical moves for a life you enjoy.</p>
          </div>

          <div className="about-hero-media">
            <div className="about-media">
              <img
                src="/images/me_cheers.jpg"
                alt="Dinar in Bangkok"
                className="about-media-img"
              />
              <div className="about-media-tag">
                <AboutIconPill icon={FiMapPin}>Bangkok, Thailand</AboutIconPill>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="about-section about-story about-section--white">
        <div className="about-section-content about-split">
          <div className="about-col">
            <div className="about-media about-media--tall the-story-img">
              <img
                src="/images/me_songkran.png"
                alt="Dinar at Songkran"
                className="about-media-img "
              />
              <div className="about-media-tag">
                <AboutIconPill icon={TbConfetti}>Songkran Festival</AboutIconPill>
              </div>
            </div>
          </div>

          <div className="about-col">
            <AboutSectionHeader
              eyebrow="The story"
              title="Hi, I’m Dinar."
              lead="Airports were the backdrop. I took my first steps between flights."
            />
            <div className="about-prose">
              <p>
                I was born in Hiroshima and grew up in California. I have lived in 11 countries and visited many more. In 2022 I left for a short trip. It turned into two years and a better way to live.
              </p>
              <p>
                I try things, show the work, and keep what holds up in real life.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Mission / Features */}
      <section className="about-section about-mission about-tint-peach">
        <div className="about-section-content">
          <AboutSectionHeader
            eyebrow="The mission"
            title="What Seat Of My Plans does"
            lead="Tools and stories for big moves that still feel human."
          />
          <blockquote className="about-pull-quote">
            I share the process so you skip a few potholes and get where you’re going sooner.
          </blockquote>

          <div className="about-feature-grid">
            <AboutCard icon={FiBookOpen} title="Relocation playbooks">
              <p>Clear steps you can follow and repeat.</p>
            </AboutCard>
            <AboutCard icon={FiMapPin} title="City cheat sheets">
              <p>Neighborhoods, costs, and how to land on your feet.</p>
            </AboutCard>
            <AboutCard icon={TbPigMoney} title="Budgets and templates">
              <p>Simple tools that help you decide faster.</p>
            </AboutCard>
            <AboutCard icon={FiFilm} title="Videos with real lessons">
              <p>What worked, what failed, and how I fixed it.</p>
            </AboutCard>
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="about-section about-beliefs">
        <div className="about-section-content">
          <AboutSectionHeader
            eyebrow="The philosophy"
            title="What I believe"
          />
          <div className="about-beliefs-grid">
            <AboutCard title="Fun is a strategy">
              <p>If it feels miserable, you will not keep doing it.</p>
            </AboutCard>
            <AboutCard title="Small bets beat giant leaps">
              <p>Test, learn, adjust, repeat.</p>
            </AboutCard>
            <AboutCard title="Money buys time and options">
              <p>Build a runway so adventure is a plan, not a panic.</p>
            </AboutCard>
            <AboutCard title="Home is a skill">
              <p>You can learn to build it anywhere.</p>
            </AboutCard>
            <AboutCard title="Tell the truth">
              <p>About costs, visas, loneliness, wins. All of it.</p>
            </AboutCard>
          </div>
        </div>
      </section>

      {/* Personal Snapshot */}
      <section className="about-section about-personal about-tint-blue">
        <div className="about-section-content about-split">
          <div className="about-col">
            <AboutSectionHeader eyebrow="The person" title="My kind of day" />
            <div className="about-prose">
              <p>
                I like a good bar and a quiet pub. I will always pick the strawberry option. Overcast days feel like home.
              </p>
            </div>

            <ul className="about-details">
              <li>
                <span className="about-detail-label">Favorite drink:</span>{" "}
                <span>Strawberry anything</span>
              </li>
              <li>
                <span className="about-detail-label">Current city:</span>{" "}
                <span>Bangkok, Thailand</span>
              </li>
              <li>
                <span className="about-detail-label">Weather preference:</span>{" "}
                <span>Overcast and cozy</span>
              </li>
            </ul>
          </div>

          <div className="about-col">
            <div className="about-media the-person-img">
              <img
                src="/images/gelato.jpg"
                alt="Strawberry gelato in Istanbul"
                className="about-media-img"
              />
               <div className="about-media-tag">
                <AboutIconPill icon={LuIceCreamBowl}>Gelato in Istanbul</AboutIconPill>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="about-section about-newsletter">
        <div className="about-section-content">
          <div className="about-newsletter-card">
            <div className="about-newsletter-copy">
              <h2 className="about-section-title">Start your move</h2>
              <p className="about-section-lead">
                Join the newsletter and get the Bangkok Starter Kit. I send practical tools, real costs, and small challenges you can finish in a weekend.
              </p>
            </div>

            <form
              className="about-newsletter-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email"
              />
              <button className="about-btn about-btn-primary" type="submit">
                Get the Starter Kit
              </button>
            </form>

            <p className="about-form-note">Zero spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="about-section about-contact">
        <div className="about-section-content">
          <AboutSectionHeader
            eyebrow="Let’s connect"
            title="Get in touch"
            lead="Questions or wins. I read every message."
          />

          {isSubmitted ? (
            <div className="about-contact-success">
              <div className="about-success-icon" aria-hidden="true">
                <FiCheckCircle size={24} />
              </div>
              <h3>Message sent</h3>
              <p>Thanks for reaching out. I will reply soon.</p>
            </div>
          ) : (
            <div className="about-contact-layout">
              <form className="about-contact-form" onSubmit={handleContactSubmit}>
                <div className="about-form-row">
                  <div className="about-form-group">
                    <label htmlFor="name">Your name</label>
                    <input
                      id="name"
                      name="name"
                      value={contactForm.name}
                      onChange={handleInputChange}
                      required
                      placeholder="What should I call you?"
                    />
                  </div>
                  <div className="about-form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={contactForm.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="about-form-group">
                  <label htmlFor="message">Your message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={contactForm.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell me about your plans, ask a question, or just say hi."
                  />
                </div>

                <div className="about-form-footer">
                  <button className="about-btn about-btn-primary" type="submit">
                    Send message
                  </button>
                </div>
              </form>

              <aside className="about-contact-info">
                <div className="about-info-item">
                  <div className="about-info-icon" aria-hidden="true">
                    <FiMail size={20} />
                  </div>
                  <div className="about-info-body">
                    <h4>Email</h4>
                    <a href="mailto:dinar@seatofmyplans.com">
                      dinar@seatofmyplans.com
                    </a>
                  </div>
                </div>

                <div className="about-info-item">
                  <div className="about-info-icon" aria-hidden="true">
                    <FiClock size={20} />
                  </div>
                  <div className="about-info-body">
                    <h4>Availability</h4>
                    <p>When I'm Awake</p>
                  </div>
                </div>

                <div className="about-info-item">
                  <div className="about-info-icon" aria-hidden="true">
                    <FiGlobe size={20} />
                  </div>
                  <div className="about-info-body">
                    <h4>Time zone</h4>
                    <p>Bangkok (GMT+7)</p>
                  </div>
                </div>
              </aside>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
