import React from 'react';
import './Home.css'; 
import '../styles.css';

const Home = () => {
    return (
        <main className="index-page">
            <div className="content-wrapper">
                <div className="left-side">
                    <h2>Who are We?</h2>
                    <p>At SkiMastery, we’re passionate about all things skiing...</p> {/* Content from your original HTML */}
                </div>
                <div className="middle-section">
                    <div className="word-week">
                        <h2>Word of the Week</h2>
                        <p><strong>Moguls</strong></p>
                        <p>Definition? ...</p>
                    </div>
                    <div className="article-box">
                        <a href="...">...</a>
                    </div>
                </div>
                <div className="right-side">
                    <h2>The History of Skiing</h2>
                    <p>Skiing has a rich history that dates back thousands of years...</p>
                </div>
            </div>
            <div className="video-container">
                <iframe 
                    id="video"
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/rfYUzMRa1yQ?si=xwatYM80o9DrdiXS" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                </iframe>
            </div>
        </main>
    );
};

export default Home;
