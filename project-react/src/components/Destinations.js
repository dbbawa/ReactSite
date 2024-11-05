import React from 'react';
import './Destinations.css'; 
import '../styles.css';

    const Destinations = () => {
        const destinations = [
        {
            title: 'Colorado',
            image: '/images/dest-colorado.jpg', 
            modalImage: '/images/colorado.jpg',
            resorts: ['Vail', 'Breckenridge', 'Aspen', 'Keystone', 'Copper Mountain', 'Telluride', 'Winter Part', 'Steamboat Springs', 'Silverton Mountain'],
            slopes: 'Colorado is home to some of the most diverse and exciting ski slopes in the country. From the powder-filled trails of Aspen to the expansive runs at Vail, there’s something for everyone, whether you are a beginner or an expert. Many resorts feature a mix of wide-open groomed trails, challenging moguls, and thrilling tree runs, allowing skiers to choose their adventure. Whether you are carving your way down a gentle bunny slope or tackling steep black diamonds, the slopes here promise an unforgettable experience.',
            skiSeason: 'Ski season in Colorado typically kicks off in late November and runs through early April, depending on the weather and snowfall. Early season often offers a mix of excitement and anticipation. By mid-December, most resorts are fully operational, with plenty of fresh powder and festive holiday crowds. January and February are usually the peak months for snow, providing some of the best conditions for skiing. As the season progresses into March, warmer temperatures and sunny days become common, making it a great time for spring skiing. The season usually wraps up by early April, but many resorts host special events and spring parties, allowing skiers to enjoy the slopes a little longer.',
            shopping: 'Colorado ski resorts offer a vibrant mix of shopping and dining options that enhance the mountain experience. In the resort villages, you will find charming boutiques selling everything from ski gear to local art, perfect for picking up a unique souvenir. After a day on the slopes, visitors can enjoy a variety of dining experiences, from cozy breakfasts to upscale restaurants featuring gourmet cuisine. Many places emphasize local ingredients and craft beer, giving you a true taste of Colorado. Whether you’re in the mood for a quick bite or a leisurely dinner with stunning mountain views, the options are plentiful and cater to all tastes.',
            facts: ['Home to the highest ski resorts in North America', 'Many resorts are part of the Epic Pass, which offers access to multiple resorts', 'Colorado receives an average of 300 inches of snow annually', 'First ski lift was installed in Sun Valley in 1936'],
            activities: ['Ice Skating', 'Snowshoeing', 'Sleigh Rides', 'Cross-Country Skiing', 'Hot Springs'],
        },
        {
            title: 'Vermont',
            image: '/images/dest-vermont.jpg', 
            modalImage: '/images/vermont-page.jpg',
            resorts: ['Vail', 'Breckenridge', 'Aspen', 'Keystone', 'Copper Mountain', 'Telluride', 'Winter Part', 'Steamboat Springs', 'Silverton Mountain'],
            slopes: 'Colorado is home to some of the most diverse and exciting ski slopes in the country. From the powder-filled trails of Aspen to the expansive runs at Vail, there’s something for everyone, whether you are a beginner or an expert. Many resorts feature a mix of wide-open groomed trails, challenging moguls, and thrilling tree runs, allowing skiers to choose their adventure. Whether you are carving your way down a gentle bunny slope or tackling steep black diamonds, the slopes here promise an unforgettable experience.',
            skiSeason: 'Ski season in Colorado typically kicks off in late November and runs through early April, depending on the weather and snowfall. Early season often offers a mix of excitement and anticipation. By mid-December, most resorts are fully operational, with plenty of fresh powder and festive holiday crowds. January and February are usually the peak months for snow, providing some of the best conditions for skiing. As the season progresses into March, warmer temperatures and sunny days become common, making it a great time for spring skiing. The season usually wraps up by early April, but many resorts host special events and spring parties, allowing skiers to enjoy the slopes a little longer.',
            shopping: 'Colorado ski resorts offer a vibrant mix of shopping and dining options that enhance the mountain experience. In the resort villages, you will find charming boutiques selling everything from ski gear to local art, perfect for picking up a unique souvenir. After a day on the slopes, visitors can enjoy a variety of dining experiences, from cozy breakfasts to upscale restaurants featuring gourmet cuisine. Many places emphasize local ingredients and craft beer, giving you a true taste of Colorado. Whether you’re in the mood for a quick bite or a leisurely dinner with stunning mountain views, the options are plentiful and cater to all tastes.',
            facts: ['Home to the highest ski resorts in North America', 'Many resorts are part of the Epic Pass, which offers access to multiple resorts', 'Colorado receives an average of 300 inches of snow annually', 'First ski lift was installed in Sun Valley in 1936'],
            activities: ['Ice Skating', 'Snowshoeing', 'Sleigh Rides', 'Cross-Country Skiing', 'Hot Springs'],
        },
        {
            title: 'Utah',
            image: '/images/dest-utah.jpg', 
            modalImage: '/images/utah-page.jpg',
            resorts: ['Vail', 'Breckenridge', 'Aspen', 'Keystone', 'Copper Mountain', 'Telluride', 'Winter Part', 'Steamboat Springs', 'Silverton Mountain'],
            slopes: 'Colorado is home to some of the most diverse and exciting ski slopes in the country. From the powder-filled trails of Aspen to the expansive runs at Vail, there’s something for everyone, whether you are a beginner or an expert. Many resorts feature a mix of wide-open groomed trails, challenging moguls, and thrilling tree runs, allowing skiers to choose their adventure. Whether you are carving your way down a gentle bunny slope or tackling steep black diamonds, the slopes here promise an unforgettable experience.',
            skiSeason: 'Ski season in Colorado typically kicks off in late November and runs through early April, depending on the weather and snowfall. Early season often offers a mix of excitement and anticipation. By mid-December, most resorts are fully operational, with plenty of fresh powder and festive holiday crowds. January and February are usually the peak months for snow, providing some of the best conditions for skiing. As the season progresses into March, warmer temperatures and sunny days become common, making it a great time for spring skiing. The season usually wraps up by early April, but many resorts host special events and spring parties, allowing skiers to enjoy the slopes a little longer.',
            shopping: 'Colorado ski resorts offer a vibrant mix of shopping and dining options that enhance the mountain experience. In the resort villages, you will find charming boutiques selling everything from ski gear to local art, perfect for picking up a unique souvenir. After a day on the slopes, visitors can enjoy a variety of dining experiences, from cozy breakfasts to upscale restaurants featuring gourmet cuisine. Many places emphasize local ingredients and craft beer, giving you a true taste of Colorado. Whether you’re in the mood for a quick bite or a leisurely dinner with stunning mountain views, the options are plentiful and cater to all tastes.',
            facts: ['Home to the highest ski resorts in North America', 'Many resorts are part of the Epic Pass, which offers access to multiple resorts', 'Colorado receives an average of 300 inches of snow annually', 'First ski lift was installed in Sun Valley in 1936'],
            activities: ['Ice Skating', 'Snowshoeing', 'Sleigh Rides', 'Cross-Country Skiing', 'Hot Springs'],
        },
        {
            title: 'Maine',
            image: '/images/dest-maine.jpg', 
            modalImage: '/images/maine-page.jpg',
            resorts: ['Vail', 'Breckenridge', 'Aspen', 'Keystone', 'Copper Mountain', 'Telluride', 'Winter Part', 'Steamboat Springs', 'Silverton Mountain'],
            slopes: 'Colorado is home to some of the most diverse and exciting ski slopes in the country. From the powder-filled trails of Aspen to the expansive runs at Vail, there’s something for everyone, whether you are a beginner or an expert. Many resorts feature a mix of wide-open groomed trails, challenging moguls, and thrilling tree runs, allowing skiers to choose their adventure. Whether you are carving your way down a gentle bunny slope or tackling steep black diamonds, the slopes here promise an unforgettable experience.',
            skiSeason: 'Ski season in Colorado typically kicks off in late November and runs through early April, depending on the weather and snowfall. Early season often offers a mix of excitement and anticipation. By mid-December, most resorts are fully operational, with plenty of fresh powder and festive holiday crowds. January and February are usually the peak months for snow, providing some of the best conditions for skiing. As the season progresses into March, warmer temperatures and sunny days become common, making it a great time for spring skiing. The season usually wraps up by early April, but many resorts host special events and spring parties, allowing skiers to enjoy the slopes a little longer.',
            shopping: 'Colorado ski resorts offer a vibrant mix of shopping and dining options that enhance the mountain experience. In the resort villages, you will find charming boutiques selling everything from ski gear to local art, perfect for picking up a unique souvenir. After a day on the slopes, visitors can enjoy a variety of dining experiences, from cozy breakfasts to upscale restaurants featuring gourmet cuisine. Many places emphasize local ingredients and craft beer, giving you a true taste of Colorado. Whether you’re in the mood for a quick bite or a leisurely dinner with stunning mountain views, the options are plentiful and cater to all tastes.',
            facts: ['Home to the highest ski resorts in North America', 'Many resorts are part of the Epic Pass, which offers access to multiple resorts', 'Colorado receives an average of 300 inches of snow annually', 'First ski lift was installed in Sun Valley in 1936'],
            activities: ['Ice Skating', 'Snowshoeing', 'Sleigh Rides', 'Cross-Country Skiing', 'Hot Springs'],
        },
        {
            title: 'New York',
            image: '/images/dest-ny.jpg', 
            modalImage: '/images/ny-page.jpg',
            resorts: ['Vail', 'Breckenridge', 'Aspen', 'Keystone', 'Copper Mountain', 'Telluride', 'Winter Part', 'Steamboat Springs', 'Silverton Mountain'],
            slopes: 'Colorado is home to some of the most diverse and exciting ski slopes in the country. From the powder-filled trails of Aspen to the expansive runs at Vail, there’s something for everyone, whether you are a beginner or an expert. Many resorts feature a mix of wide-open groomed trails, challenging moguls, and thrilling tree runs, allowing skiers to choose their adventure. Whether you are carving your way down a gentle bunny slope or tackling steep black diamonds, the slopes here promise an unforgettable experience.',
            skiSeason: 'Ski season in Colorado typically kicks off in late November and runs through early April, depending on the weather and snowfall. Early season often offers a mix of excitement and anticipation. By mid-December, most resorts are fully operational, with plenty of fresh powder and festive holiday crowds. January and February are usually the peak months for snow, providing some of the best conditions for skiing. As the season progresses into March, warmer temperatures and sunny days become common, making it a great time for spring skiing. The season usually wraps up by early April, but many resorts host special events and spring parties, allowing skiers to enjoy the slopes a little longer.',
            shopping: 'Colorado ski resorts offer a vibrant mix of shopping and dining options that enhance the mountain experience. In the resort villages, you will find charming boutiques selling everything from ski gear to local art, perfect for picking up a unique souvenir. After a day on the slopes, visitors can enjoy a variety of dining experiences, from cozy breakfasts to upscale restaurants featuring gourmet cuisine. Many places emphasize local ingredients and craft beer, giving you a true taste of Colorado. Whether you’re in the mood for a quick bite or a leisurely dinner with stunning mountain views, the options are plentiful and cater to all tastes.',
            facts: ['Home to the highest ski resorts in North America', 'Many resorts are part of the Epic Pass, which offers access to multiple resorts', 'Colorado receives an average of 300 inches of snow annually', 'First ski lift was installed in Sun Valley in 1936'],
            activities: ['Ice Skating', 'Snowshoeing', 'Sleigh Rides', 'Cross-Country Skiing', 'Hot Springs'],
        },
        {
            title: 'Canada',
            image: '/images/dest-canada.jpg', 
            modalImage: '/images/canada-page.jpg',
            resorts: ['Vail', 'Breckenridge', 'Aspen', 'Keystone', 'Copper Mountain', 'Telluride', 'Winter Part', 'Steamboat Springs', 'Silverton Mountain'],
            slopes: 'Colorado is home to some of the most diverse and exciting ski slopes in the country. From the powder-filled trails of Aspen to the expansive runs at Vail, there’s something for everyone, whether you are a beginner or an expert. Many resorts feature a mix of wide-open groomed trails, challenging moguls, and thrilling tree runs, allowing skiers to choose their adventure. Whether you are carving your way down a gentle bunny slope or tackling steep black diamonds, the slopes here promise an unforgettable experience.',
            skiSeason: 'Ski season in Colorado typically kicks off in late November and runs through early April, depending on the weather and snowfall. Early season often offers a mix of excitement and anticipation. By mid-December, most resorts are fully operational, with plenty of fresh powder and festive holiday crowds. January and February are usually the peak months for snow, providing some of the best conditions for skiing. As the season progresses into March, warmer temperatures and sunny days become common, making it a great time for spring skiing. The season usually wraps up by early April, but many resorts host special events and spring parties, allowing skiers to enjoy the slopes a little longer.',
            shopping: 'Colorado ski resorts offer a vibrant mix of shopping and dining options that enhance the mountain experience. In the resort villages, you will find charming boutiques selling everything from ski gear to local art, perfect for picking up a unique souvenir. After a day on the slopes, visitors can enjoy a variety of dining experiences, from cozy breakfasts to upscale restaurants featuring gourmet cuisine. Many places emphasize local ingredients and craft beer, giving you a true taste of Colorado. Whether you’re in the mood for a quick bite or a leisurely dinner with stunning mountain views, the options are plentiful and cater to all tastes.',
            facts: ['Home to the highest ski resorts in North America', 'Many resorts are part of the Epic Pass, which offers access to multiple resorts', 'Colorado receives an average of 300 inches of snow annually', 'First ski lift was installed in Sun Valley in 1936'],
            activities: ['Ice Skating', 'Snowshoeing', 'Sleigh Rides', 'Cross-Country Skiing', 'Hot Springs'],
        },
        {
            title: 'California',
            image: '/images/california.jpg', 
            modalImage: '/images/california-page.jpg',
            resorts: ['Vail', 'Breckenridge', 'Aspen', 'Keystone', 'Copper Mountain', 'Telluride', 'Winter Part', 'Steamboat Springs', 'Silverton Mountain'],
            slopes: 'Colorado is home to some of the most diverse and exciting ski slopes in the country. From the powder-filled trails of Aspen to the expansive runs at Vail, there’s something for everyone, whether you are a beginner or an expert. Many resorts feature a mix of wide-open groomed trails, challenging moguls, and thrilling tree runs, allowing skiers to choose their adventure. Whether you are carving your way down a gentle bunny slope or tackling steep black diamonds, the slopes here promise an unforgettable experience.',
            skiSeason: 'Ski season in Colorado typically kicks off in late November and runs through early April, depending on the weather and snowfall. Early season often offers a mix of excitement and anticipation. By mid-December, most resorts are fully operational, with plenty of fresh powder and festive holiday crowds. January and February are usually the peak months for snow, providing some of the best conditions for skiing. As the season progresses into March, warmer temperatures and sunny days become common, making it a great time for spring skiing. The season usually wraps up by early April, but many resorts host special events and spring parties, allowing skiers to enjoy the slopes a little longer.',
            shopping: 'Colorado ski resorts offer a vibrant mix of shopping and dining options that enhance the mountain experience. In the resort villages, you will find charming boutiques selling everything from ski gear to local art, perfect for picking up a unique souvenir. After a day on the slopes, visitors can enjoy a variety of dining experiences, from cozy breakfasts to upscale restaurants featuring gourmet cuisine. Many places emphasize local ingredients and craft beer, giving you a true taste of Colorado. Whether you’re in the mood for a quick bite or a leisurely dinner with stunning mountain views, the options are plentiful and cater to all tastes.',
            facts: ['Home to the highest ski resorts in North America', 'Many resorts are part of the Epic Pass, which offers access to multiple resorts', 'Colorado receives an average of 300 inches of snow annually', 'First ski lift was installed in Sun Valley in 1936'],
            activities: ['Ice Skating', 'Snowshoeing', 'Sleigh Rides', 'Cross-Country Skiing', 'Hot Springs'],
        },
        {
            title: 'Washington',
            image: '/images/washington.jpg', 
            modalImage: '/images/washington-page.jpg',
            resorts: ['Vail', 'Breckenridge', 'Aspen', 'Keystone', 'Copper Mountain', 'Telluride', 'Winter Part', 'Steamboat Springs', 'Silverton Mountain'],
            slopes: 'Colorado is home to some of the most diverse and exciting ski slopes in the country. From the powder-filled trails of Aspen to the expansive runs at Vail, there’s something for everyone, whether you are a beginner or an expert. Many resorts feature a mix of wide-open groomed trails, challenging moguls, and thrilling tree runs, allowing skiers to choose their adventure. Whether you are carving your way down a gentle bunny slope or tackling steep black diamonds, the slopes here promise an unforgettable experience.',
            skiSeason: 'Ski season in Colorado typically kicks off in late November and runs through early April, depending on the weather and snowfall. Early season often offers a mix of excitement and anticipation. By mid-December, most resorts are fully operational, with plenty of fresh powder and festive holiday crowds. January and February are usually the peak months for snow, providing some of the best conditions for skiing. As the season progresses into March, warmer temperatures and sunny days become common, making it a great time for spring skiing. The season usually wraps up by early April, but many resorts host special events and spring parties, allowing skiers to enjoy the slopes a little longer.',
            shopping: 'Colorado ski resorts offer a vibrant mix of shopping and dining options that enhance the mountain experience. In the resort villages, you will find charming boutiques selling everything from ski gear to local art, perfect for picking up a unique souvenir. After a day on the slopes, visitors can enjoy a variety of dining experiences, from cozy breakfasts to upscale restaurants featuring gourmet cuisine. Many places emphasize local ingredients and craft beer, giving you a true taste of Colorado. Whether you’re in the mood for a quick bite or a leisurely dinner with stunning mountain views, the options are plentiful and cater to all tastes.',
            facts: ['Home to the highest ski resorts in North America', 'Many resorts are part of the Epic Pass, which offers access to multiple resorts', 'Colorado receives an average of 300 inches of snow annually', 'First ski lift was installed in Sun Valley in 1936'],
            activities: ['Ice Skating', 'Snowshoeing', 'Sleigh Rides', 'Cross-Country Skiing', 'Hot Springs'],
        }
    ];

    const openModal = (destination) => {
        const modal = document.getElementById('destination-modal');
        modal.style.display = 'block'; 

        document.getElementById('modal-image').src = destination.modalImage;
        document.getElementById('modal-title').innerText = destination.title;
        document.getElementById('modal-resorts').innerHTML = destination.resorts.map(resort => `<li>${resort}</li>`).join('');
        document.getElementById('modal-slopes').innerText = destination.slopes;
        document.getElementById('modal-ski-season').innerText = destination.skiSeason;
        document.getElementById('modal-shopping').innerText = destination.shopping;
        document.getElementById('modal-facts').innerHTML = destination.facts.map(fact => `<li>${fact}</li>`).join('');
        document.getElementById('modal-activities').innerHTML = destination.activities.map(activity => `<li>${activity}</li>`).join('');
    };

    const closeModal = () => {
        const modal = document.getElementById('destination-modal');
        modal.style.display = 'none'; 
    };

    return (
        <main className="dest-page">
            <section className="horizontal-boxes">
                <div className="text-box">
                    <h2>Different Types of Destinations</h2>
                    <p>Skiing destinations offer a rich variety of terrains and experiences, making it easy to find the perfect spot for every skier. Colorado is renowned for its breathtaking Rocky Mountain slopes, offering diverse runs that range from longer, wider trails to steep, along with stunning views and vibrant après-ski scenes. Vermont is known for its charming, snow-covered villages and well-groomed trails, perfect for families and those seeking a cozy atmosphere, often featuring wider runs for easier navigation. New York’s Adirondacks provide a unique blend of rugged terrain with varying conditions, while Maine has a more laid-back vibe and excellent powder conditions. Canada’s Whistler Blackcomb is a world-famous resort, offering expansive ski areas with diverse terrain, including bowls and glade skiing that appeal to more adventurous skiers. Utah attracts skiers with its light, powdery snow, ideal for those seeking a soft, fluffy experience, and impressive mountain ranges with trails that can vary from icy to powdery. Each of these locations features distinct seasons, ensuring a wide array of options. With trails that vary in length, width, and snow conditions, skiers can explore different environments and challenges, making every trip unique.</p>
                </div>
                <div className="text-box">
                    <h2>What Makes up a Ski Resort</h2>
                    <p>A ski resort is more than just a collection of slopes; it encompasses a vibrant village atmosphere, diverse amenities, and accessibility that enhance the overall skiing experience. The location of the resort often plays a crucial role, with proximity to the slopes allowing for easy access, reducing the hassle of transportation. Weather conditions are essential, as they can impact snow quality and the overall enjoyment of the resort. Amenities such as ski rentals, equipment shops, and ski schools cater to both beginners and seasoned skiers, ensuring everyone has the tools they need for a great day on the mountain. Dining options range from casual eateries to upscale restaurants, providing a variety of culinary experiences. Additionally, the resort's association with ski passes like the Ikon Pass or Epic Pass can influence its popularity and accessibility. The busyness of the resort varies with the season and time of week, affecting the overall atmosphere and wait times for lifts, making it important to plan visits accordingly. All these factors come together to create a unique skiing experience tailored to the needs and preferences of visitors.</p>
                </div>
            </section>

            <section id="destinations-section" className="dest-container">
                {destinations.map(destination => (
                    <div key={destination.title} className="dest-box" onClick={() => openModal(destination)}>
                        <h3 className="dest-title">{destination.title}</h3>
                        <img className="dest-img" src={destination.image} alt={destination.title} />
                    </div>
                ))}
            </section>

            <div id="destination-modal" className="modal" aria-hidden="true" style={{ display: 'none' }}>
                <div className="modal-content">
                    <span className="close-button" onClick={closeModal}>&times;</span>
                    <img id="modal-image" src="" alt="Destination" />
                    <h2 id="modal-title"></h2>
                    <p id="modal-description"></p>
                    
                    <h3>Resorts</h3>
                    <ul id="modal-resorts"></ul>
                
                    <h3>Slope Details</h3>
                    <p id="modal-slopes"></p>
                
                    <h3>Ski Season</h3>
                    <p id="modal-ski-season"></p>
                
                    <h3>Shopping & Restaurants</h3>
                    <p id="modal-shopping"></p>
                
                    <h3>Special Facts</h3>
                    <ul id="modal-facts"></ul>
                
                    <h3>Activities</h3>
                    <ul id="modal-activities"></ul>
                </div>
            </div>
        </main>
    );
};

export default Destinations;