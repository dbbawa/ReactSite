import React from 'react';
import goggles from '../images/goggles.jpg';
import boots from '../images/boots.jpg';
import poles from '../images/poles.jpg';
import helmet from '../images/helmet.jpg';
import skis from '../images/skis.jpg';
import './Grid.css';

const Grid = () => {
  return (
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
  );
};

export default Grid;
