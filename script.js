document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const closeBtn = document.querySelector('.close-btn');
    const moreButtons = document.querySelectorAll('.btn-more');
    
    // Destination details for the modal
    const destinationDetails = {
        seoul: {
            title: 'Seoul - The Vibrant Capital',
            content: `
                <h3>Top Attractions in Seoul:</h3>
                <ul>
                    <li><strong>Gyeongbokgung Palace</strong> - The largest of the Five Grand Palaces built during the Joseon Dynasty</li>
                    <li><strong>N Seoul Tower</strong> - Offers panoramic views of the city and a famous love locks fence</li>
                    <li><strong>Myeongdong</strong> - The ultimate shopping and street food district</li>
                    <li><strong>Bukchon Hanok Village</strong> - Traditional Korean village with hundreds of hanok (traditional houses)</li>
                    <li><strong>Hongdae</strong> - Trendy area known for its urban arts, indie music culture, and nightlife</li>
                </ul>
                <h3>Best Time to Visit:</h3>
                <p>Spring (April to June) for cherry blossoms or Autumn (September to November) for pleasant weather and fall foliage.</p>
            `
        },
        busan: {
            title: 'Busan - The Coastal City',
            content: `
                <h3>Top Attractions in Busan:</h3>
                <ul>
                    <li><strong>Haeundae Beach</strong> - Most famous beach in Korea with white sand and clear water</li>
                    <li><strong>Gamcheon Culture Village</strong> - Colorful hillside village known as "Korea's Santorini"</li>
                    <li><strong>Jagalchi Fish Market</strong> - Korea's largest seafood market where you can eat fresh seafood</li>
                    <li><strong>Beomeosa Temple</strong> - One of Korea's most important Buddhist temples</li>
                    <li><strong>Gwangalli Beach</strong> - Famous for its night view of the Gwangan Bridge</li>
                </ul>
                <h3>Best Time to Visit:</h3>
                <p>Summer (July-August) for beach activities or during the Busan International Film Festival in October.</p>
            `
        },
        jeju: {
            title: 'Jeju Island - The Hawaii of Korea',
            content: `
                <h3>Top Attractions in Jeju:</h3>
                <ul>
                    <li><strong>Hallasan Mountain</strong> - Highest mountain in South Korea with a crater lake</li>
                    <li><strong>Manjanggul Lava Tube</strong> - One of the longest lava tubes in the world</li>
                    <li><strong>Seongsan Ilchulbong</strong> - Sunrise Peak, a volcanic tuff cone</li>
                    <li><strong>Jeju Loveland</strong> - Outdoor sculpture park focused on erotic art</li>
                    <li><strong>Cheonjiyeon Waterfall</strong> - Beautiful waterfall surrounded by subtropical vegetation</li>
                </ul>
                <h3>Best Time to Visit:</h3>
                <p>April to June for pleasant weather or September to November to avoid the summer crowds.</p>
            `
        },
        gyeongju: {
            title: 'Gyeongju - The Ancient Capital',
            content: `
                <h3>Top Attractions in Gyeongju:</h3>
                <ul>
                    <li><strong>Bulguksa Temple</strong> - UNESCO World Heritage site and masterpiece of Buddhist art</li>
                    <li><strong>Seokguram Grotto</strong> - Hermitage with a monumental statue of the Buddha</li>
                    <li><strong>Cheomseongdae</strong> - Ancient astronomical observatory</li>
                    <li><strong>Daereungwon Tomb Complex</strong> - Large park with ancient royal tombs</li>
                    <li><strong>Anapji Pond</strong> - Beautiful night-time illuminated pond from the Silla period</li>
                </ul>
                <h3>Best Time to Visit:</h3>
                <p>Spring (April-May) for cherry blossoms or Autumn (September-October) for comfortable temperatures.</p>
            `
        },
        dmz: {
            title: 'Korean DMZ - The Border Area',
            content: `
                <h3>Top Attractions in DMZ:</h3>
                <ul>
                    <li><strong>Joint Security Area (JSA)</strong> - Only place where North and South Korean forces stand face-to-face</li>
                    <li><strong>Third Infiltration Tunnel</strong> - Tunnel dug by North Korea for potential invasion</li>
                    <li><strong>Dora Observatory</strong> - View into North Korea with binoculars</li>
                    <li><strong>Dorasan Station</strong> - Northernmost train station symbolizing hope for reunification</li>
                    <li><strong>DMZ Museum</strong> - Exhibits about the history and significance of the DMZ</li>
                </ul>
                <h3>Important Information:</h3>
                <p>Visits to the DMZ must be done through organized tours. Passports are required for the JSA tour. Dress code applies (no ripped jeans, sandals, or military-style clothing).</p>
            `
        }
    };
    
    // Open modal with destination details
    moreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const destination = this.getAttribute('data-destination');
            modalTitle.textContent = destinationDetails[destination].title;
            modalContent.innerHTML = destinationDetails[destination].content;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
});