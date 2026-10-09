// Шаг ①. Карточка мема.
//
// Компонент получает props: id, title, image, likes.
// Покажите картинку, подпись и кнопку с числом лайков.
// Как карточка устроена и какие у неё классы — смотрите в макете: spda.voisvet.space/design → DevTools → Elements.
// Стили уже готовы: совпадут классы — карточка сразу будет выглядеть как в макете.
// У картинки обязателен alt.
import LikeButton from './LikeButton.jsx';

export default function MemeCard({ id, title, image, likes, liked = false }) {
  return (
    <article className="card">
      <img className="card__image" src={image} alt={title} loading="lazy" />
      <div className="card__body">
        <p className="card__title">{title}</p>
        <LikeButton id={id} initialLikes={likes} initialLiked={liked} />
      </div>
    </article>
  );
}
