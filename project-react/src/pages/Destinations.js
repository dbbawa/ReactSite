import React from 'react';
import '../components/Locations.css'; 
import Locations from '../components/Locations';
import '../styles.css';

    const Destinations = () => {
    return (
        <main className="dest-page">
            <section className="horizontal-boxes">
                <div className="left-types">
                    <h2>Different Types of Destinations</h2>
                    <p>Skiing destinations offer a rich variety of terrains and experiences, making it easy to find the perfect spot for every skier. Colorado is renowned for its breathtaking Rocky Mountain slopes, offering diverse runs that range from longer, wider trails to steep, along with stunning views and vibrant après-ski scenes. Vermont is known for its charming, snow-covered villages and well-groomed trails, perfect for families and those seeking a cozy atmosphere, often featuring wider runs for easier navigation. New York’s Adirondacks provide a unique blend of rugged terrain with varying conditions, while Maine has a more laid-back vibe and excellent powder conditions. Canada’s Whistler Blackcomb is a world-famous resort, offering expansive ski areas with diverse terrain, including bowls and glade skiing that appeal to more adventurous skiers. Utah attracts skiers with its light, powdery snow, ideal for those seeking a soft, fluffy experience, and impressive mountain ranges with trails that can vary from icy to powdery. Each of these locations features distinct seasons, ensuring a wide array of options. With trails that vary in length, width, and snow conditions, skiers can explore different environments and challenges, making every trip unique.</p>
                </div>
                <div className="right-makes">
                    <h2>What Makes up a Ski Resort</h2>
                    <p>A ski resort is more than just a collection of slopes; it encompasses a vibrant village atmosphere, diverse amenities, and accessibility that enhance the overall skiing experience. The location of the resort often plays a crucial role, with proximity to the slopes allowing for easy access, reducing the hassle of transportation. Weather conditions are essential, as they can impact snow quality and the overall enjoyment of the resort. Amenities such as ski rentals, equipment shops, and ski schools cater to both beginners and seasoned skiers, ensuring everyone has the tools they need for a great day on the mountain. Dining options range from casual eateries to upscale restaurants, providing a variety of culinary experiences. Additionally, the resort's association with ski passes like the Ikon Pass or Epic Pass can influence its popularity and accessibility. The busyness of the resort varies with the season and time of week, affecting the overall atmosphere and wait times for lifts, making it important to plan visits accordingly. All these factors come together to create a unique skiing experience tailored to the needs and preferences of visitors.</p>
                </div>
            </section>

            <section id="destinations-section" className="dest-container">
                <Locations />
            </section>
        </main>
    );
};

export default Destinations;