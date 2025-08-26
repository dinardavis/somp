import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import BlogIndex from "./components/BlogIndex";
import BlogPost from "./components/BlogPost";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentPost, setCurrentPost] = useState(null);

  const navigateTo = (page, post = null) => {
    setCurrentPage(page);
    setCurrentPost(post);

    // Scroll to top when navigating to a new page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Also scroll to top when the component mounts or when currentPage changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <HomePage
            onPostClick={(post) => navigateTo("post", post)}
            onNavigate={navigateTo}
          />
        );
      case "blog":
        return <BlogIndex onPostClick={(post) => navigateTo("post", post)} />;
      case "post":
        return (
          <BlogPost post={currentPost} onBack={() => navigateTo("blog")} />
        );
      case "about":
        return <About />;
      default:
        return (
          <HomePage
            onPostClick={(post) => navigateTo("post", post)}
            onNavigate={navigateTo}
          />
        );
    }
  };

  return (
    <div className="App">
      <Header onNavigate={navigateTo} currentPage={currentPage} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
