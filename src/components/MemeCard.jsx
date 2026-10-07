// Шаг ① — готово. Карточка мема.
export default function MemeCard({ title, image, likes }) {
  return (
    <article className="card">
      <img className="card__image" src={image} alt={title} />
      <div className="card__body">
        <p className="card__title">{title}</p>
        <button className="like">♡ {likes}</button>
      </div>
    </article>
  );
}
