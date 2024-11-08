import React from 'react';
import './Locations.css';
import colorado from '../images/dest-colorado.jpg';
import cmodal from '../images/colorado.jpg';
import vermont from '../images/dest-vermont.jpg';
import vmodal from '../images/vermont-page.jpg';
import utah from '../images/dest-utah.jpg';
import umodal from '../images/utah-page.jpg';
import maine from '../images/dest-maine.jpg';
import mmodal from '../images/maine-page.jpg';
import ny from '../images/dest-ny.jpg';
import nymodal from '../images/ny-page.jpg';
import canada from '../images/dest-canada.jpg';
import canmodal from '../images/canada-page.jpg';
import cali from '../images/california.jpg';
import calimodal from '../images/california-page.jpg';
import wash from '../images/washington.jpg';
import wmodal from '../images/washington-page.jpg';

    const destinations = [
        {
            title: 'Colorado',
            image: colorado, 
            modalImage: cmodal,
            resorts: ['Vail', 'Breckenridge', 'Aspen', 'Keystone', 'Copper Mountain', 'Telluride', 'Winter Part', 'Steamboat Springs', 'Silverton Mountain'],
            slopes: 'Colorado is home to some of the most diverse and exciting ski slopes in the country. From the powder-filled trails of Aspen to the expansive runs at Vail, there’s something for everyone, whether you are a beginner or an expert. Many resorts feature a mix of wide-open groomed trails, challenging moguls, and thrilling tree runs, allowing skiers to choose their adventure. Whether you are carving your way down a gentle bunny slope or tackling steep black diamonds, the slopes here promise an unforgettable experience.',
            skiSeason: 'Ski season in Colorado typically kicks off in late November and runs through early April, depending on the weather and snowfall. Early season often offers a mix of excitement and anticipation. By mid-December, most resorts are fully operational, with plenty of fresh powder and festive holiday crowds. January and February are usually the peak months for snow, providing some of the best conditions for skiing. As the season progresses into March, warmer temperatures and sunny days become common, making it a great time for spring skiing. The season usually wraps up by early April, but many resorts host special events and spring parties, allowing skiers to enjoy the slopes a little longer.',
            shopping: 'Colorado ski resorts offer a vibrant mix of shopping and dining options that enhance the mountain experience. In the resort villages, you will find charming boutiques selling everything from ski gear to local art, perfect for picking up a unique souvenir. After a day on the slopes, visitors can enjoy a variety of dining experiences, from cozy breakfasts to upscale restaurants featuring gourmet cuisine. Many places emphasize local ingredients and craft beer, giving you a true taste of Colorado. Whether you’re in the mood for a quick bite or a leisurely dinner with stunning mountain views, the options are plentiful and cater to all tastes.',
            facts: ['Home to the highest ski resorts in North America', 'Many resorts are part of the Epic Pass, which offers access to multiple resorts', 'Colorado receives an average of 300 inches of snow annually', 'First ski lift was installed in Sun Valley in 1936'],
            activities: ['Ice Skating', 'Snowshoeing', 'Sleigh Rides', 'Cross-Country Skiing', 'Hot Springs'],
        },
        {
            title: 'Vermont',
            image: vermont, 
            modalImage: vmodal,
            resorts: ['Vail', 'Breckenridge', 'Aspen', 'Keystone', 'Copper Mountain', 'Telluride', 'Winter Part', 'Steamboat Springs', 'Silverton Mountain'],
            slopes: 'Colorado is home to some of the most diverse and exciting ski slopes in the country. From the powder-filled trails of Aspen to the expansive runs at Vail, there’s something for everyone, whether you are a beginner or an expert. Many resorts feature a mix of wide-open groomed trails, challenging moguls, and thrilling tree runs, allowing skiers to choose their adventure. Whether you are carving your way down a gentle bunny slope or tackling steep black diamonds, the slopes here promise an unforgettable experience.',
            skiSeason: 'Ski season in Colorado typically kicks off in late November and runs through early April, depending on the weather and snowfall. Early season often offers a mix of excitement and anticipation. By mid-December, most resorts are fully operational, with plenty of fresh powder and festive holiday crowds. January and February are usually the peak months for snow, providing some of the best conditions for skiing. As the season progresses into March, warmer temperatures and sunny days become common, making it a great time for spring skiing. The season usually wraps up by early April, but many resorts host special events and spring parties, allowing skiers to enjoy the slopes a little longer.',
            shopping: 'Colorado ski resorts offer a vibrant mix of shopping and dining options that enhance the mountain experience. In the resort villages, you will find charming boutiques selling everything from ski gear to local art, perfect for picking up a unique souvenir. After a day on the slopes, visitors can enjoy a variety of dining experiences, from cozy breakfasts to upscale restaurants featuring gourmet cuisine. Many places emphasize local ingredients and craft beer, giving you a true taste of Colorado. Whether you’re in the mood for a quick bite or a leisurely dinner with stunning mountain views, the options are plentiful and cater to all tastes.',
            facts: ['Home to the highest ski resorts in North America', 'Many resorts are part of the Epic Pass, which offers access to multiple resorts', 'Colorado receives an average of 300 inches of snow annually', 'First ski lift was installed in Sun Valley in 1936'],
            activities: ['Ice Skating', 'Snowshoeing', 'Sleigh Rides', 'Cross-Country Skiing', 'Hot Springs'],
        },
        {
            title: 'Utah',
            image: utah, 
            modalImage: umodal,
            resorts: ['Vail', 'Breckenridge', 'Aspen', 'Keystone', 'Copper Mountain', 'Telluride', 'Winter Part', 'Steamboat Springs', 'Silverton Mountain'],
            slopes: 'Colorado is home to some of the most diverse and exciting ski slopes in the country. From the powder-filled trails of Aspen to the expansive runs at Vail, there’s something for everyone, whether you are a beginner or an expert. Many resorts feature a mix of wide-open groomed trails, challenging moguls, and thrilling tree runs, allowing skiers to choose their adventure. Whether you are carving your way down a gentle bunny slope or tackling steep black diamonds, the slopes here promise an unforgettable experience.',
            skiSeason: 'Ski season in Colorado typically kicks off in late November and runs through early April, depending on the weather and snowfall. Early season often offers a mix of excitement and anticipation. By mid-December, most resorts are fully operational, with plenty of fresh powder and festive holiday crowds. January and February are usually the peak months for snow, providing some of the best conditions for skiing. As the season progresses into March, warmer temperatures and sunny days become common, making it a great time for spring skiing. The season usually wraps up by early April, but many resorts host special events and spring parties, allowing skiers to enjoy the slopes a little longer.',
            shopping: 'Colorado ski resorts offer a vibrant mix of shopping and dining options that enhance the mountain experience. In the resort villages, you will find charming boutiques selling everything from ski gear to local art, perfect for picking up a unique souvenir. After a day on the slopes, visitors can enjoy a variety of dining experiences, from cozy breakfasts to upscale restaurants featuring gourmet cuisine. Many places emphasize local ingredients and craft beer, giving you a true taste of Colorado. Whether you’re in the mood for a quick bite or a leisurely dinner with stunning mountain views, the options are plentiful and cater to all tastes.',
            facts: ['Home to the highest ski resorts in North America', 'Many resorts are part of the Epic Pass, which offers access to multiple resorts', 'Colorado receives an average of 300 inches of snow annually', 'First ski lift was installed in Sun Valley in 1936'],
            activities: ['Ice Skating', 'Snowshoeing', 'Sleigh Rides', 'Cross-Country Skiing', 'Hot Springs'],
        },
        {
            title: 'Maine',
            image: maine, 
            modalImage: mmodal,
            resorts: ['Vail', 'Breckenridge', 'Aspen', 'Keystone', 'Copper Mountain', 'Telluride', 'Winter Part', 'Steamboat Springs', 'Silverton Mountain'],
            slopes: 'Colorado is home to some of the most diverse and exciting ski slopes in the country. From the powder-filled trails of Aspen to the expansive runs at Vail, there’s something for everyone, whether you are a beginner or an expert. Many resorts feature a mix of wide-open groomed trails, challenging moguls, and thrilling tree runs, allowing skiers to choose their adventure. Whether you are carving your way down a gentle bunny slope or tackling steep black diamonds, the slopes here promise an unforgettable experience.',
            skiSeason: 'Ski season in Colorado typically kicks off in late November and runs through early April, depending on the weather and snowfall. Early season often offers a mix of excitement and anticipation. By mid-December, most resorts are fully operational, with plenty of fresh powder and festive holiday crowds. January and February are usually the peak months for snow, providing some of the best conditions for skiing. As the season progresses into March, warmer temperatures and sunny days become common, making it a great time for spring skiing. The season usually wraps up by early April, but many resorts host special events and spring parties, allowing skiers to enjoy the slopes a little longer.',
            shopping: 'Colorado ski resorts offer a vibrant mix of shopping and dining options that enhance the mountain experience. In the resort villages, you will find charming boutiques selling everything from ski gear to local art, perfect for picking up a unique souvenir. After a day on the slopes, visitors can enjoy a variety of dining experiences, from cozy breakfasts to upscale restaurants featuring gourmet cuisine. Many places emphasize local ingredients and craft beer, giving you a true taste of Colorado. Whether you’re in the mood for a quick bite or a leisurely dinner with stunning mountain views, the options are plentiful and cater to all tastes.',
            facts: ['Home to the highest ski resorts in North America', 'Many resorts are part of the Epic Pass, which offers access to multiple resorts', 'Colorado receives an average of 300 inches of snow annually', 'First ski lift was installed in Sun Valley in 1936'],
            activities: ['Ice Skating', 'Snowshoeing', 'Sleigh Rides', 'Cross-Country Skiing', 'Hot Springs'],
        },
        {
            title: 'New York',
            image: ny, 
            modalImage: nymodal,
            resorts: ['Vail', 'Breckenridge', 'Aspen', 'Keystone', 'Copper Mountain', 'Telluride', 'Winter Part', 'Steamboat Springs', 'Silverton Mountain'],
            slopes: 'Colorado is home to some of the most diverse and exciting ski slopes in the country. From the powder-filled trails of Aspen to the expansive runs at Vail, there’s something for everyone, whether you are a beginner or an expert. Many resorts feature a mix of wide-open groomed trails, challenging moguls, and thrilling tree runs, allowing skiers to choose their adventure. Whether you are carving your way down a gentle bunny slope or tackling steep black diamonds, the slopes here promise an unforgettable experience.',
            skiSeason: 'Ski season in Colorado typically kicks off in late November and runs through early April, depending on the weather and snowfall. Early season often offers a mix of excitement and anticipation. By mid-December, most resorts are fully operational, with plenty of fresh powder and festive holiday crowds. January and February are usually the peak months for snow, providing some of the best conditions for skiing. As the season progresses into March, warmer temperatures and sunny days become common, making it a great time for spring skiing. The season usually wraps up by early April, but many resorts host special events and spring parties, allowing skiers to enjoy the slopes a little longer.',
            shopping: 'Colorado ski resorts offer a vibrant mix of shopping and dining options that enhance the mountain experience. In the resort villages, you will find charming boutiques selling everything from ski gear to local art, perfect for picking up a unique souvenir. After a day on the slopes, visitors can enjoy a variety of dining experiences, from cozy breakfasts to upscale restaurants featuring gourmet cuisine. Many places emphasize local ingredients and craft beer, giving you a true taste of Colorado. Whether you’re in the mood for a quick bite or a leisurely dinner with stunning mountain views, the options are plentiful and cater to all tastes.',
            facts: ['Home to the highest ski resorts in North America', 'Many resorts are part of the Epic Pass, which offers access to multiple resorts', 'Colorado receives an average of 300 inches of snow annually', 'First ski lift was installed in Sun Valley in 1936'],
            activities: ['Ice Skating', 'Snowshoeing', 'Sleigh Rides', 'Cross-Country Skiing', 'Hot Springs'],
        },
        {
            title: 'Canada',
            image: canada, 
            modalImage: canmodal,
            resorts: ['Vail', 'Breckenridge', 'Aspen', 'Keystone', 'Copper Mountain', 'Telluride', 'Winter Part', 'Steamboat Springs', 'Silverton Mountain'],
            slopes: 'Colorado is home to some of the most diverse and exciting ski slopes in the country. From the powder-filled trails of Aspen to the expansive runs at Vail, there’s something for everyone, whether you are a beginner or an expert. Many resorts feature a mix of wide-open groomed trails, challenging moguls, and thrilling tree runs, allowing skiers to choose their adventure. Whether you are carving your way down a gentle bunny slope or tackling steep black diamonds, the slopes here promise an unforgettable experience.',
            skiSeason: 'Ski season in Colorado typically kicks off in late November and runs through early April, depending on the weather and snowfall. Early season often offers a mix of excitement and anticipation. By mid-December, most resorts are fully operational, with plenty of fresh powder and festive holiday crowds. January and February are usually the peak months for snow, providing some of the best conditions for skiing. As the season progresses into March, warmer temperatures and sunny days become common, making it a great time for spring skiing. The season usually wraps up by early April, but many resorts host special events and spring parties, allowing skiers to enjoy the slopes a little longer.',
            shopping: 'Colorado ski resorts offer a vibrant mix of shopping and dining options that enhance the mountain experience. In the resort villages, you will find charming boutiques selling everything from ski gear to local art, perfect for picking up a unique souvenir. After a day on the slopes, visitors can enjoy a variety of dining experiences, from cozy breakfasts to upscale restaurants featuring gourmet cuisine. Many places emphasize local ingredients and craft beer, giving you a true taste of Colorado. Whether you’re in the mood for a quick bite or a leisurely dinner with stunning mountain views, the options are plentiful and cater to all tastes.',
            facts: ['Home to the highest ski resorts in North America', 'Many resorts are part of the Epic Pass, which offers access to multiple resorts', 'Colorado receives an average of 300 inches of snow annually', 'First ski lift was installed in Sun Valley in 1936'],
            activities: ['Ice Skating', 'Snowshoeing', 'Sleigh Rides', 'Cross-Country Skiing', 'Hot Springs'],
        },
        {
            title: 'California',
            image: cali, 
            modalImage: calimodal,
            resorts: ['Vail', 'Breckenridge', 'Aspen', 'Keystone', 'Copper Mountain', 'Telluride', 'Winter Part', 'Steamboat Springs', 'Silverton Mountain'],
            slopes: 'Colorado is home to some of the most diverse and exciting ski slopes in the country. From the powder-filled trails of Aspen to the expansive runs at Vail, there’s something for everyone, whether you are a beginner or an expert. Many resorts feature a mix of wide-open groomed trails, challenging moguls, and thrilling tree runs, allowing skiers to choose their adventure. Whether you are carving your way down a gentle bunny slope or tackling steep black diamonds, the slopes here promise an unforgettable experience.',
            skiSeason: 'Ski season in Colorado typically kicks off in late November and runs through early April, depending on the weather and snowfall. Early season often offers a mix of excitement and anticipation. By mid-December, most resorts are fully operational, with plenty of fresh powder and festive holiday crowds. January and February are usually the peak months for snow, providing some of the best conditions for skiing. As the season progresses into March, warmer temperatures and sunny days become common, making it a great time for spring skiing. The season usually wraps up by early April, but many resorts host special events and spring parties, allowing skiers to enjoy the slopes a little longer.',
            shopping: 'Colorado ski resorts offer a vibrant mix of shopping and dining options that enhance the mountain experience. In the resort villages, you will find charming boutiques selling everything from ski gear to local art, perfect for picking up a unique souvenir. After a day on the slopes, visitors can enjoy a variety of dining experiences, from cozy breakfasts to upscale restaurants featuring gourmet cuisine. Many places emphasize local ingredients and craft beer, giving you a true taste of Colorado. Whether you’re in the mood for a quick bite or a leisurely dinner with stunning mountain views, the options are plentiful and cater to all tastes.',
            facts: ['Home to the highest ski resorts in North America', 'Many resorts are part of the Epic Pass, which offers access to multiple resorts', 'Colorado receives an average of 300 inches of snow annually', 'First ski lift was installed in Sun Valley in 1936'],
            activities: ['Ice Skating', 'Snowshoeing', 'Sleigh Rides', 'Cross-Country Skiing', 'Hot Springs'],
        },
        {
            title: 'Washington',
            image: wash, 
            modalImage: wmodal,
            resorts: ['Vail', 'Breckenridge', 'Aspen', 'Keystone', 'Copper Mountain', 'Telluride', 'Winter Part', 'Steamboat Springs', 'Silverton Mountain'],
            slopes: 'Colorado is home to some of the most diverse and exciting ski slopes in the country. From the powder-filled trails of Aspen to the expansive runs at Vail, there’s something for everyone, whether you are a beginner or an expert. Many resorts feature a mix of wide-open groomed trails, challenging moguls, and thrilling tree runs, allowing skiers to choose their adventure. Whether you are carving your way down a gentle bunny slope or tackling steep black diamonds, the slopes here promise an unforgettable experience.',
            skiSeason: 'Ski season in Colorado typically kicks off in late November and runs through early April, depending on the weather and snowfall. Early season often offers a mix of excitement and anticipation. By mid-December, most resorts are fully operational, with plenty of fresh powder and festive holiday crowds. January and February are usually the peak months for snow, providing some of the best conditions for skiing. As the season progresses into March, warmer temperatures and sunny days become common, making it a great time for spring skiing. The season usually wraps up by early April, but many resorts host special events and spring parties, allowing skiers to enjoy the slopes a little longer.',
            shopping: 'Colorado ski resorts offer a vibrant mix of shopping and dining options that enhance the mountain experience. In the resort villages, you will find charming boutiques selling everything from ski gear to local art, perfect for picking up a unique souvenir. After a day on the slopes, visitors can enjoy a variety of dining experiences, from cozy breakfasts to upscale restaurants featuring gourmet cuisine. Many places emphasize local ingredients and craft beer, giving you a true taste of Colorado. Whether you’re in the mood for a quick bite or a leisurely dinner with stunning mountain views, the options are plentiful and cater to all tastes.',
            facts: ['Home to the highest ski resorts in North America', 'Many resorts are part of the Epic Pass, which offers access to multiple resorts', 'Colorado receives an average of 300 inches of snow annually', 'First ski lift was installed in Sun Valley in 1936'],
            activities: ['Ice Skating', 'Snowshoeing', 'Sleigh Rides', 'Cross-Country Skiing', 'Hot Springs'],
        },
    ];

    const Locations = () => {

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
            <>
                {destinations.map(destination => (
                    <div key={destination.title} className="dest-box" onClick={() => openModal(destination)}>
                        <h3 className="dest-title">{destination.title}</h3>
                        <img className="dest-img" src={destination.image} alt={destination.title} />
                    </div>
                ))}
    
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
            </>
        );
    };
    
    export default Locations;