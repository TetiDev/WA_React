import React from 'react';

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <img
          src="public/img/logo.png"
          width="30"
          alt="img"
        />
        <p>@ 2022 Coded by Tetiana Hil</p>
        <a
          href="https://github.com/TetiDev/WA_React"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
      </footer>
    </div>
  );
}
