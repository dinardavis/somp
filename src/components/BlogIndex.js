import React from "react";

function BlogIndex({ onPostClick }) {
  const blogPosts = [
    {
      id: 1,
      title: "How Much Money Do You Really Need to Move to Bangkok?",
      image: "/images/thai_baht.jpg",
      excerpt:
        "The honest breakdown of startup costs, monthly expenses, and how to build your runway without the guru math. I'll walk you through exactly what I spent in my first year, plus what I wish I'd budgeted for.",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Budgeting",
    },
    {
      id: 2,
      title: "Bangkok Condo Hunting: What to Look For (And What to Avoid)",
      image: "/images/bangkok_condo.jpg",
      excerpt:
        "From location red flags to hidden costs, here's what I wish I knew before signing my first lease. Learn how to spot a good deal from a mile away and avoid the common traps that catch new arrivals.",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Housing",
    },
    {
      id: 3,
      title: "The 90-Day Rule: Why Most People Fail at Moving Abroad",
      image: "/images/sad_guy.jpg",
      excerpt:
        "The three-month slump is real. Here's how to survive it and actually build a life in your new country. Most people give up right when things are about to get good.",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Mindset",
    },
    {
      id: 4,
      title: "Visa Options for Thailand: Tourist vs. Education vs. Business",
      image: "/images/thai_visa.jpg",
      excerpt:
        "A practical guide to staying in Thailand legally without becoming a visa expert. I'll break down the options that actually work for most people.",
      date: "2024-01-01",
      readTime: "8 min read",
      category: "Legal",
    },
    {
      id: 5,
      title: "Building a Social Life in Bangkok When You Don't Know Anyone",
      image: "/images/bangkok_bar.png",
      excerpt:
        "How to make friends, find your tribe, and avoid the expat bubble. It's easier than you think, but you need to know where to look.",
      date: "2023-12-28",
      readTime: "6 min read",
      category: "Social",
    },
  ];

  return (
    <div className="blog-index">
      <div className="blog-index-container">
        <header className="blog-index-header">
          <h1>The Blog</h1>
          <p>Practical advice for moving abroad, without the guru nonsense.</p>
        </header>

        <div className="blog-posts">

          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="blog-post-card"
              onClick={() => onPostClick(post)}
            >
              <div className="article-left">
                <img
                  src={post.image}
                  alt={post.altText}
                />
              </div>
              <div className="article-right">
              <div className="post-meta">
                <span className="category">{post.category}</span>
                <span className="read-time">{post.readTime}</span>
              </div>

              <h2 className="post-title">{post.title}</h2>
              <p className="post-excerpt">{post.excerpt}</p>

              <button className="read-more-btn">Read more </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogIndex;
