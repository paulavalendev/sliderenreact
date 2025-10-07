import React from 'react';
import AILogo from '../assets/copilot-color.svg'
import AILogo2 from '../assets/ChatGPT-Logo.svg'
import AILogo3 from '../assets/Google_Gemini_logo.svg'

function Header({ title }) {
  return (
    <header className="header">
      <div className="header__title-container">
        <h1>{title}</h1>
      </div>
      <nav className="header__nav">
        <a href="https://www.bing.com/images/create" target="_blank" rel="noreferrer" aria-label="Copilot Images">
          <img src={AILogo} className="header__icon" alt="Copilot logo" />
        </a>
        <a href="https://chatgpt.com/" target="_blank" rel="noreferrer" aria-label="ChatGPT">
          <img src={AILogo2} className="header__icon" alt="ChatGPT logo" />
        </a>
        <a href="https://gemini.google.com/app" target="_blank" rel="noreferrer" aria-label="Gemini">
          <img src={AILogo3} className="header__icon" alt="Gemini logo" />
        </a>
      </nav>
    </header>
  )
}

export default Header;
