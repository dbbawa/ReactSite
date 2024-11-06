import React from 'react';
import './CostGear.css'; 
import '../styles.css';
import skis from '../images/skis.jpg';
import goggles from '../images/goggles.jpg';
import boots from '../images/boots.jpg';
import poles from '../images/poles.jpg';
import helmet from '../images/helmet.jpg';

const Basics = () => {
  return (
    <main>
      <div className="content-wrapper">
        <div className="wear">
          <h2>What to Wear</h2>
          <p>
            Choosing the right attire for skiing is essential for comfort and safety on the slopes. Start with a base layer that keeps you dry, followed by an insulating mid-layer. A waterproof and breathable outer jacket and pants shield you from cold winds and snow. Don’t forget ski socks, gloves, and a warm hat or helmet liner to keep your extremities protected. Wearing appropriate clothing helps prevent cold-related issues. Choosing the wrong clothing can leave you wet and cold. The right gear will help you have a safe and pleasurable skiing experience.
          </p>
        </div>
        <div className="more-info">
          <h2>More Information Sources</h2>
          <a href="https://www.treelinereview.com/gear-list/what-to-wear-skiing" className="btn">What to Wear</a>
          <a href="https://www.wagnerskis.com/blogs/journal/the-idiot-s-guide-to-buying-skis" className="btn">What Skis to Get</a>
          <a href="https://www.skiutah.com/blog/authors/annie-davis/ski-boot-fitting-dos-don-ts-and-what/" className="btn">How to Fit your Ski Boots</a>
          <a href="https://www.levelninesports.com/learn-center/gear-sizing-charts/general-helmet-size/ski--snowboard-helmet-sizing-guide?srsltid=AfmBOoodj7QnQkCMAtmqF2bJufIcf_Y-ZfedamwNdLq3AdjzkxQNZpSf" className="btn">Helmet Size Guide</a>
        </div>
        <div className="lift-tickets">
          <h2>Lift Tickets</h2>
          <p>
            Lift tickets are essential for accessing ski slopes. Prices vary by resort and time of year, ranging from $50 to $200 per day. Prices may also vary due to type of ticket. There are night passes, half-day, full-day, children's tickets, adult tickets, senior tickets, and military discounts. Many resorts offer discounts for purchasing in advance or multi-day passes. It's important to consider the ticket type that best fits your skiing plans, whether for a single day or a week-long trip.
          </p>
        </div>
      </div>
      <div className="two-column-layout">
        <div className="middle">
          <h2><strong>Gear Used</strong></h2>
          <p>
            Skiing gear includes several key components that enhance safety, comfort, and performance on the slopes. Skis are designed for specific conditions and styles, influencing your ability to maneuver effectively and respond to changing terrain. Bindings connect your boots to the skis and play a crucial role in safety; they release during falls to prevent injuries, reducing the risk of serious damage to your knees and ankles. Ski boots ensure proper control and energy transfer, allowing for precise movements and better balance. Goggles protect your eyes from glare and harsh weather, allowing for better visibility, which is essential for navigating slopes safely. Helmets provide essential head protection against falls and collisions, significantly reducing the risk of concussions. Additionally, layers of clothing, including moisture-wicking base layers, insulating mid-layers, and waterproof outer shells, help regulate body temperature and keep you dry. Taking care of your gear is equally important for maintaining its performance. Regularly waxing your skis enhances their glide and protects the base from damage. Ensuring that bindings are correctly adjusted and maintained can improve safety and efficiency. Cleaning and storing your goggles properly helps prevent scratches and fogging, while inspecting and replacing worn-out ski boots can enhance comfort and control. Each component is vital for performance and safety; having the right fit and functionality can mean the difference between an enjoyable day on the slopes and a potentially hazardous situation.
          </p>
        </div>
      </div>
      <div className="grid-container">
        <div className="grid-item goggles-box">
          <img src={goggles} alt="Ski Goggles" />
          <h3>Goggles</h3>
          <p>
            Ski goggles range from $50-$300, there are many different brands and qualities that affect the price of them. Ski goggles protect your eyes from UV rays and are vital for keeping the snow out. While enhancing visibility, they reduce glare and improve contrast, ensuring a clear view on the slopes.
          </p>
        </div>
        <div className="grid-item">
          <img src={poles} alt="Ski Poles" />
          <h3>Poles</h3>
          <p>
            Ski poles generally range from $30-$150. Ski poles provide balance and rhythm while skiing. They help with timing your turns and navigating tricky terrain, while also being a helping hand to new skiers! Properly fitting ski poles should reach your armpits when inverted; this ensures optimal support and reduces the risk of injury.
          </p>
        </div>
        <div className="grid-item">
          <img src={boots} alt="Ski Boots" />
          <h3>Boots</h3>
          <p>
            Ski boots can range from $100-$800, being on the more expensive side. Ski boots are designed to connect you to your skis, providing support and responsiveness. They feature a stiff exterior for stability and a snug fit for control, ensuring that your movements translate effectively to the skis.
          </p>
        </div>
        <div className="grid-item">
          <img src={helmet} alt="Ski Helmet" />
          <h3>Helmet</h3>
          <p>
            A ski helmet can range from $50-$300, there is a lot of variety when it comes to helmets. A ski helmet is essential for protecting your head while navigating the slopes. Designed to absorb impacts and provide insulation, helmets enhance safety without sacrificing comfort. With adjustable features and ventilation, they ensure a snug fit and breathability.
          </p>
        </div>
        <div className="grid-item">
          <img src={skis} alt="Skis" />
          <h3>Skis</h3>
          <p>
            Skis can range from $300-$1,300. Designed for various conditions and styles, skis come in different lengths, widths, and flexes to match your skill level and terrain preferences. Whether you're carving turns on groomed trails or navigating powder, the right skis enhance your control, stability, and overall skiing experience.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Basics;