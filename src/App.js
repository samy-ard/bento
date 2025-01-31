import React from "react";

function App() {
  return (
    <main className="page">
      <div className="bento">
        <div className="card card-one bg-purple-500 text-white text-center">
          <h1 className="card-title">
            Social Media <span className="text-yellow-500">10x</span>{" "}
            <em>Faster</em> with AI
          </h1>
          <img src="/assets/images/illustration-five-stars.webp" />
          <p>Over 4,000 5-star reviews</p>
        </div>
        <div className="card card-two bg-white">
          <img src="/assets/images/illustration-multiple-platforms.webp" />
          <h2 className="card-title h3">
            Manage multiple accounts and platforms.
          </h2>
        </div>
        <div className="card card-three bg-yellow-500">
          <h2 className="card-title h3">
            Maintain a consistent posting schedule.
          </h2>
          <img src="/assets/images/illustration-consistent-schedule.webp" />
        </div>
        <div className="card card-four bg-purple-100">
          <h2 className="card-title h3">Schedule to social media.</h2>
          <img src="/assets/images/illustration-schedule-posts.webp" />
          <p>
            Optimize post timings to publish content at the perfect time for
            your audience.
          </p>
        </div>
        <div className="card card-five bg-purple-500 text-center">
          <img src="/assets/images/illustration-grow-followers.webp" />
          <h2 className="card-title h2">
            Grow followers with non-stop content.
          </h2>
        </div>
        <div className="card card-six bg-white">
          <h2 className="card-title h1">&gt;56%</h2>
          <p>faster audience growth</p>
          <img src="/assets/images/illustration-audience-growth.webp" />
        </div>
        <div className="card card-seven bg-yellow-100">
          <h2 className="card-title">
            Create and schedule content{" "}
            <em className="text-purple-500">quicker</em>.
          </h2>
          <img src="/assets/images/illustration-create-post.webp" />
        </div>
        <div className="card card-eight bg-yellow-500">
          <h2 className="card-title">Write your content using AI.</h2>
          <img src="/assets/images/illustration-ai-content.webp" />
        </div>
      </div>
    </main>
  );
}

export default App;
