// Шаг ②. Лента.
//
// Компонент получает props.memes — массив мемов из data/memes.js.
// Покажите карточку MemeCard для каждого мема. Во что обёрнута лента — смотрите в макете.
// Потом покажите в App.jsx всю ленту вместо одной карточки.
// Загляните в Console: React подскажет, если чего-то не хватает.
import { useEffect, useState } from 'react';
import { API_URL } from '../api.js';
import MemeCard from './MemeCard.jsx';

export default function Feed() {
  const [status, setStatus] = useState('loading');
  const [memes, setMemes] = useState([]);
  const [sort, setSort] = useState('order');

  function load() {
    setStatus('loading');
    return fetch(`${API_URL}/api/memes`, { credentials: 'include' })
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

  useEffect(() => {
    load();
  }, []);

  if (status === 'loading') {
    return <p className="status">Загружаем мемы…</p>;
  }

  if (status === 'error') {
    return (
      <div className="status" role="alert">
        <p>Не получилось загрузить ленту.</p>
        <button type="button" onClick={load}>
          Повторить
        </button>
      </div>
    );
  }

  if (memes.length === 0) {
    return <p className="status">Мемов пока нет</p>;
  }

  const shown = sort === 'popular' ? [...memes].sort((a, b) => b.likes - a.likes) : memes;

  return (
    <>
      <div className="toolbar sort">
        <label htmlFor="sort">Показать:</label>
        <select id="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="order">по порядку</option>
          <option value="popular">популярные</option>
        </select>
      </div>
      <section className="feed" aria-label="Мемы">
        {shown.map((meme) => (
          <MemeCard key={meme.id} {...meme} />
        ))}
      </section>
    </>
  );
}
