import React from 'react';
import './Home.css'; 
import '../styles.css';
import article from '../images/article.jpg';

const Home = () => {
    return (
        <main className="index-page">
            <div className="content-wrapper">
                <section className="left-side">
                    <h2>Who are We?</h2>
                    <p>At SkiMastery, we’re passionate about all things skiing, dedicated to helping both newcomers and seasoned skiers navigate the slopes with confidence. Our platform serves as your go-to resource for everything ski-related, offering a variety of tools to keep you informed and engaged. From insightful articles of the week that cover the latest trends in skiing to our fun words of the week that enhance your ski vocabulary, we aim to make your experience enjoyable and enriching. We dive deep into destination analysis, helping you choose the perfect spot for your next adventure, whether you’re after powder-filled slopes or family-friendly trails. Our comprehensive gear guides ensure you're equipped with the right equipment, while our newsletter keeps you updated on essential news and tips. At SkiMastery, we're here to foster a community where skiers of all levels can come together, share experiences, and continue to master the art of skiing. Join us on this exciting journey to explore, learn, and elevate your skiing experience!</p>
                </section>
                <section className="middle-section">
                    <div className="word-week">
                        <h2><strong>Word of the Week</strong></h2>
                        <p><strong>Moguls</strong></p>
                        <p>
                            Definition? Bumps that form on ski slopes when skiers carve turns and push snow into mounds.<br /><br />
                            How are they created? Created when skiers push snow out and away from them while turning.<br /><br />
                            How are they used? To create a challenge for skiers.
                        </p>
                    </div>
                <div className="article-box">
                    <a href="https://snowbrains.com/where-in-the-world-will-it-snow-this-week-these-are-the-top-5-forecasted-resorts-for-the-10-days-of-september-8-17-2024/" target="_blank" rel="noopener noreferrer">
                        <div className="article-img">
                            <img src={article} alt="Featured Article" />
                        </div>
                        <div className="article-title">
                            <p>Featured Article</p>
                        </div>
                    </a>
                </div>
                </section>
                <section className="right-side">
                    <h2>The History of Skiing</h2>
                    <p>Skiing has a rich history that dates back thousands of years, with its origins believed to be in Scandinavia around 5000 BC, where early skiers used wooden planks for transportation across snow-covered landscapes. Initially, skiing served practical purposes, such as hunting and travel, but it gradually evolved into a recreational sport by the 19th century. The first recorded ski club was established in Norway in 1861, and the sport began to gain popularity across Europe and North America. The invention of the modern ski lift in the early 20th century revolutionized the way people accessed slopes, making skiing more accessible and enjoyable. Since then, skiing has continued to develop, with advancements in equipment and technique, leading to the diverse and exhilarating sport we know today, encompassing various styles such as alpine, cross-country, and freestyle skiing. The introduction of skiing as an Olympic sport in 1936 further cemented its status as a beloved winter activity, drawing enthusiasts from all over the world.</p>
                </section>
            </div>
            <div className="video-container">
                <iframe 
                    id="video"
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/rfYUzMRa1yQ?si=xwatYM80o9DrdiXS" 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                </iframe>
            </div>
        </main>
    );
};

export default Home;
