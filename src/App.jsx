import { useState } from 'react';
import Feed from './components/Feed.jsx';

export default function App() {
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    setTheme(next);
  }

  return (
    <>
      <header className="header">
        <h1>Лента мемов</h1>
        <div className="toolbar">
          <button type="button" onClick={toggleTheme}>
            {theme === 'dark' ? '☀️ Светлая' : '🌙 Тёмная'}
          </button>
        </div>
      </header>
      <main className="page">
        {/* Шаг ①: доделайте MemeCard — здесь появится первый мем */}
        <Feed />
      </main>
    </>
  );
}
