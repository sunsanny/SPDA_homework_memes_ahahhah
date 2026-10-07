// Шаг ④ (пара 3). Лента должна приходить с сервера, а не из data/memes.js.
//
// Feed теперь загружает мемы сам, props ему больше не нужны. Общий приём — на слайде «Загружаем ленту»,
// а как правильно написать запрос к нашему серверу — подсказки 1, 2 и 6 в src/api.js.
//
// В ответе у каждого мема есть liked — лайкнули ли вы его раньше. Передайте его через MemeCard в LikeButton
// как начальное состояние, чтобы после перезагрузки ваш лайк был виден сразу.
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
