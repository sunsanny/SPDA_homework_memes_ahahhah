// Шаг ③. Кнопка лайка.
//
// Получает props: id, initialLikes.
// Клик ставит лайк (+1), повторный клик снимает (−1). Иконка: ♡ — лайка нет, ♥ — лайк поставлен.
// В макете нажатая кнопка яркая: найдите в DevTools, какой атрибут кнопки за это отвечает, и ставьте его сами.
// Потом используйте LikeButton в MemeCard вместо обычной кнопки.

export default function LikeButton(props) {
  return <button className="like">♡ {props.initialLikes}</button>;
}
