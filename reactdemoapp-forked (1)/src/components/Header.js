import "./menuBarStyles.css";

export default function Header() {
  return (
    <ul>
      <li>
        <img
          className="logo"
          alt="2"
          src="https://ichef.bbci.co.uk/news/1024/branded_news/7CC2/production/_118283913_29xp-meme-mobilemasterat3x-v3.jpg"
        />

        {/* use this but grab a small image from google - <img src="pic_trulli.jpg" alt="Italian Trulli"> */}
      </li>
      <li>
        <a href="#home">Home</a>
      </li>
    </ul>
  );
}
