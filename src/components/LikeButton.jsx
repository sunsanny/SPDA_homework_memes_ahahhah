// Шаг ③ — готово. Лайк ставится и снимается.
import { useState } from 'react';

export default function LikeButton({ initialLikes }) {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);

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
