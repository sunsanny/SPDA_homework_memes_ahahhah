import LikeButton from './LikeButton.jsx';

export default function MemeCard({ id, title, image, likes, liked }) {
  return (
    <article className="card">
      <img className="card__image" src={image} alt={title} />
      <div className="card__body">
        <p className="card__title">{title}</p>
        <LikeButton id={id} initialLikes={likes} initialLiked={liked} />
      </div>
    </article>
  );
}
