// Шаги ③ и ④ — готово. Лайк ставится и снимается; liked с сервера — начальное состояние.
// ★ Пусть лайк уходит на сервер: POST ставит, DELETE снимает. Адрес и опции запроса — в src/api.js.
//   Сервер отвечает мемом с точными likes и liked — возьмите числа оттуда: лайки ставит вся группа.
import { useState } from 'react';

export default function LikeButton({ initialLikes, initialLiked = false }) {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(initialLiked);

  function toggle() {
    setLikes(liked ? likes - 1 : likes + 1);
    setLiked(!liked);
  }

  return (
    <button className="like" onClick={toggle} aria-pressed={liked}>
      {liked ? '♥' : '♡'} {likes}
    </button>
  );
}
