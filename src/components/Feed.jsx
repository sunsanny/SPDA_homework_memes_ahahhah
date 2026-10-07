// Шаг ④ — готово: лента приходит с сервера, сервер узнаёт вас по cookie и присылает liked.
//
// Шаг ⑤. Пользователь должен видеть, что происходит:
//   - пока грузится — «Загружаем мемы…»
//   - если ошибка — сообщение и кнопка «Повторить»
//   - если мемов нет — «Мемов пока нет»
// Тексты и вид сообщений — во фреймах ⑤ макета: spda.voisvet.space/design
// Как поймать ошибку и сколько состояний завести — подсказки 2–5 в src/api.js.
import { useEffect, useState } from 'react';
import { API_URL } from '../api.js';
import MemeCard from './MemeCard.jsx';

export default function Feed() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/memes`, { credentials: 'include' })
      .then((res) => res.json())
      .then(setMemes);
  }, []);

  return (
    <div className="feed">
      {memes.map((meme) => (
        <MemeCard key={meme.id} {...meme} />
      ))}
    </div>
  );
}
