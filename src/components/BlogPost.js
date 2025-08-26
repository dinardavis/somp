import React, { useEffect } from "react";

function BlogPost({ post, onBack }) {
  useEffect(() => {
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
      observer.disconnect();
    };
  }, []);

  // Generate content based on post title
  const getPostContent = (title) => {
    switch (title) {
      case "Runway Math for Real Humans":
        return {
          intro:
            "Your money should buy time and options. Here's how I'd plan a $10–15K runway without living like a monk—or a maniac.",
          sections: [
            {
              title: "The Real Math",
              content:
                "Most people get runway planning wrong. They either save like crazy and hate their life, or they wing it and run out of money in month three. Here's the sweet spot.",
            },
            {
              title: "Startup Costs (The Real Ones)",
              content:
                "Security deposits, first month's rent, furniture, visa fees, transportation setup. Plus the stuff you forget: kitchen basics, bedding, and that coffee maker you'll use daily.",
            },
            {
              title: "Monthly Burn Rate",
              content:
                "Rent, utilities, food, transportation, entertainment, and a buffer for the unexpected. I break down exactly what you need, not what the gurus tell you.",
            },
          ],
        };
      case "The First 30 Days in Any New City":
        return {
          intro:
            "A simple checklist to land, settle, and make the place feel yours—faster. Works in Bangkok, Berlin, or Boise.",
          sections: [
            {
              title: "Week 1: Survival Mode",
              content:
                "Get a SIM card, find your grocery store, figure out transportation, and get some sleep. That's it. Don't try to be a local yet.",
            },
            {
              title: "Week 2: Building Routines",
              content:
                "Find your coffee shop, gym, and favorite lunch spot. Start learning basic phrases. Get comfortable with being uncomfortable.",
            },
            {
              title: "Week 3-4: Making It Home",
              content:
                "Decorate your space, join a group or class, start building friendships. This is when the place starts feeling like yours.",
            },
          ],
        };
      case "Bangkok Condo Hunt: What I Look For (and Skip)":
        return {
          intro:
            "Noise, light, location, and the sneaky costs nobody mentions. My current criteria and a few near-miss stories.",
          sections: [
            {
              title: "Location Red Flags",
              content:
                "Too close to nightlife districts, construction zones, dead-end streets that confuse delivery drivers. I've learned these the hard way.",
            },
            {
              title: "Building Must-Haves",
              content:
                "Security, working elevators, good water pressure, and internet infrastructure. Test everything before you sign.",
            },
            {
              title: "Hidden Costs",
              content:
                "Common area fees, parking, internet setup, and the cost of moving if you pick wrong. Budget for these upfront.",
            },
          ],
        };
      case "The 90-Day Dip (and How to Beat It)":
        return {
          intro:
            "Month three is where most people bail. Here's how to push through the wobble and start actually living.",
          sections: [
            {
              title: "Why Month Three Sucks",
              content:
                "The novelty wears off, the language barrier becomes frustrating, and you start comparing everything to 'back home.' This is normal.",
            },
            {
              title: "Survival Strategies",
              content:
                "Build routines, learn the language basics, make local friends, and give yourself grace. You're not supposed to have it all figured out.",
            },
            {
              title: "Why It Gets Better",
              content:
                "After 90 days, you start feeling like you belong. You know which restaurants are good, which streets to avoid, and how to navigate without Google Maps.",
            },
          ],
        };
      case "Tiny Bets: 10 Experiments That Change Your Year":
        return {
          intro:
            "Small, cheap tests that teach you more than a week of overthinking. Pick one, run it this weekend.",
          sections: [
            {
              title: "What Are Tiny Bets?",
              content:
                "Small experiments that cost less than $100 and take less than a day to set up. They teach you more than endless planning.",
            },
            {
              title: "My Favorite Experiments",
              content:
                "Try a new neighborhood for a week, learn three phrases in a new language, cook one local dish, join a meetup group.",
            },
            {
              title: "How to Pick Your First Bet",
              content:
                "Start with something that scares you a little but excites you a lot. The goal is to learn, not to succeed perfectly.",
            },
          ],
        };
      default:
        return {
          intro:
            "This is a sample blog post about making big moves and building a life you actually like.",
          sections: [
            {
              title: "Getting Started",
              content:
                "The key is to start small and build momentum. Don't try to change everything at once.",
            },
            {
              title: "Building Systems",
              content:
                "Create routines and habits that support your goals. Systems beat goals every time.",
            },
            {
              title: "Staying Motivated",
              content:
                "Focus on progress, not perfection. Celebrate small wins and keep moving forward.",
            },
          ],
        };
    }
  };

  const content = getPostContent(post.title);

  return (
    <div className="blog-post">
      <div className="blog-post-container">
        <button className="back-btn" onClick={onBack}> 
          Back to blog
        </button>

        <header className="post-header scroll-animate">
          <div className="post-meta">
            <span className="category">{post.category}</span>
            <span className="read-time">{post.readTime}</span>
          </div>
          <h1 className="post-title">{post.title}</h1>
        </header>

        <div className="post-body scroll-animate">
          <p>{content.intro}</p>

          {content.sections.map((section, index) => (
            <div key={index}>
              <h2>{section.title}</h2>
              <p>{section.content}</p>
            </div>
          ))}

          <h2>What's Next?</h2>
          <p>
            Ready to make your own move? Start with the Bangkok Relocation
            Starter Kit, or pick one of the tiny bets from this post and run it
            this weekend.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
