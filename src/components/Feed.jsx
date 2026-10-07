// Шаг ② — готово. Лента из карточек.
import MemeCard from './MemeCard.jsx';

export default function Feed({ memes }) {
  return (
    <div className="feed">
      {memes.map((meme) => (
        <MemeCard key={meme.id} {...meme} />
      ))}
    </div>
  );
}
