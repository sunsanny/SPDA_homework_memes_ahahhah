// Шаги ④ и ⑤ — готово: лента с сервера и все три исхода запроса.
// Задания ★ пары 2 (сортировка, тёмная тема) в решение не входят: их делают сами.
import { useEffect, useState } from 'react';
import { API_URL } from '../api.js';
import MemeCard from './MemeCard.jsx';

export default function Feed() {
  const [memes, setMemes] = useState([]);
  const [status, setStatus] = useState('loading');

  function load() {
    setStatus('loading');
    fetch(`${API_URL}/api/memes`, { credentials: 'include' })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setMemes(data);
        setStatus('ready');
      })
      .catch(() => setStatus('error'));
  }

  useEffect(load, []);

  if (status === 'loading') return <p className="status">Загружаем мемы…</p>;

  if (status === 'error') {
    return (
      <div className="status">
        <p>Не получилось загрузить ленту.</p>
        <button onClick={load}>Повторить</button>
      </div>
    );
  }

  if (memes.length === 0) return <p className="status">Мемов пока нет</p>;

  return (
    <div className="feed">
      {memes.map((meme) => (
        <MemeCard key={meme.id} {...meme} />
      ))}
    </div>
  );
}
