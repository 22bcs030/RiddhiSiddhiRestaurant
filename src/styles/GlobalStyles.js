import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-red: #D32F2F;
    --primary-gold: #FFD700;
    --primary-purple: #9C27B0;
    --secondary-red: #F44336;
    --secondary-gold: #FFC107;
    --secondary-purple: #7B1FA2;
    --text-dark: #333;
    --text-light: #FFF;
    --text-gray: #666;
    --background-light: #FFF9F0;
    --background-dark: #1A1A1A;
    --border-radius: 8px;
    --transition: all 0.3s ease;
    --box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    --gradient-primary: linear-gradient(135deg, var(--primary-red), var(--primary-gold));
    --gradient-secondary: linear-gradient(135deg, var(--primary-purple), var(--primary-gold));
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--background-light);
    color: var(--text-dark);
    line-height: 1.6;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
    margin-bottom: 1rem;
    line-height: 1.3;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 1.8rem;
  }

  p {
    margin-bottom: 1rem;
  }

  button {
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  section {
    padding: 5rem 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .gradient-text {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
  }

  @media (max-width: 992px) {
    h1 {
      font-size: 2.5rem;
    }
  
    h2 {
      font-size: 2rem;
    }
  
    h3 {
      font-size: 1.5rem;
    }
  
    section {
      padding: 4rem 0;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
  
    h2 {
      font-size: 1.8rem;
    }
  
    section {
      padding: 3rem 0;
    }
  
    .container {
      padding: 0 1.5rem;
    }
  }

  @media (max-width: 576px) {
    h1 {
      font-size: 1.8rem;
    }
  
    h2 {
      font-size: 1.5rem;
    }
  
    section {
      padding: 2.5rem 0;
    }
  }
`;

export default GlobalStyles; 