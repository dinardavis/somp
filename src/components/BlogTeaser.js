import React from "react";

function BlogTeaser({ onPostClick, onNavigate }) {
  const samplePosts = [
    {
      id: 1,
      title: "Runway Math for Real Humans",
      excerpt:
        "Your money should buy time and options. Here's how I'd plan a $10–15K runway without living like a monk—or a maniac.",
      date: "2025-08-15",
      readTime: "5 min read",
      category: "Budgeting",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      title: "The First 30 Days in Any New City",
      excerpt:
        "A simple checklist to land, settle, and make the place feel yours—faster. Works in Bangkok, Berlin, or Boise.",
      date: "2025-08-10",
      readTime: "6 min read",
      category: "Playbook",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    },
    {
      id: 3,
      title: "Bangkok Condo Hunt: What I Look For (and Skip)",
      excerpt:
        "Noise, light, location, and the sneaky costs nobody mentions. My current criteria and a few near-miss stories.",
      date: "2025-08-05",
      readTime: "7 min read",
      category: "Housing",
      image:
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600&h=400&fit=crop",
    },
  ];

  return (
    <>
      <div className="blog-teaser-grid">
        {samplePosts.map((post) => (
          <article
            key={post.id}
            className="blog-teaser-card"
            onClick={() => onPostClick(post)}
          >
            <div className="blog-teaser-image">
              {post.image ? (
                <img src={post.image} alt={post.title} />
              ) : (
                <span>Image coming soon</span>
              )}
            </div>
            <div className="blog-teaser-content">
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="blog-teaser-meta">
                <span className="category">{post.category}</span>
                <span className="read-time">{post.readTime}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="blog-teaser-cta">
        <button
          className="btn btn-secondary"
          onClick={() => onNavigate("blog")}
        >
          Want more? Read the full blog →
        </button>
      </div>
    </>
  );
}

export default BlogTeaser;
