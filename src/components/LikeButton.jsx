// ★ Лайк отправляется на сервер.
// ★★ Оптимистичное обновление: интерфейс меняется сразу, а при ошибке сервера — откатывается.
import { useState } from 'react';
import { API_URL } from '../api.js';

export default function LikeButton({ id, initialLikes, initialLiked = false }) {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(initialLiked);
  const [pending, setPending] = useState(false);

  function toggle() {
    const nextLiked = !liked;
    setLiked(nextLiked);
    setLikes(nextLiked ? likes + 1 : likes - 1);
    setPending(true); // двойной клик не отправит два запроса

    fetch(`${API_URL}/api/memes/${id}/like`, { method: nextLiked ? 'POST' : 'DELETE', credentials: 'include' })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        // лайки общие для группы — берём точные числа с сервера
        setLikes(data.likes);
        setLiked(data.liked);
      })
      .catch(() => {
        setLiked(liked);
        setLikes(likes);
      })
      .finally(() => setPending(false));
  }

  return (
    <button className="like" onClick={toggle} aria-pressed={liked} disabled={pending}>
      {liked ? '♥' : '♡'} {likes}
    </button>
  );
}
