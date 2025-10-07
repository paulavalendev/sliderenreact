import React from 'react';

const ratings = [
  { name: 'Gemini', stars: 5, description: 'It kept the floor perspective and made chalk detailed but playful' },
  { name: 'Copilot', stars: 4, description: 'Probably the most detailed and park scene is beautiful with bench' },
  { name: 'ChatGPT', stars: 3, description: 'It used chalk but thought park scene was part of illustration' },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__ratings">
        {ratings.map((rating) => (
          <div key={rating.name} className="footer__rating-item">
            <div className="footer__stars">
              {[...Array(rating.stars)].map((_, i) => (
                <span key={i} className="material-symbols-outlined">star</span>
              ))}
            </div>
            <div className="footer__rating-text">
              <p className="footer__rating-name">{rating.name}</p>
              {rating.description && <p className="footer__rating-description">{rating.description}</p>}
            </div>
          </div>
        ))}
      </div>
      <div className="footer__prompt">
        <h1>Prompt</h1>
        <div className="footer__prompt-content">
          <span className="material-symbols-outlined">radio_button_checked</span>
          <p>"Create a park scene where a detailed illustration of a squirrell holding a nut has been drawn with chalk on the concrete"</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
