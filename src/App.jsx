import MemeCard from './components/MemeCard.jsx';
import { memes } from './data/memes.js';

export default function App() {
  return (
    <>
      <header className="header">
        <h1>Лента мемов</h1>
      </header>
      <main className="page">
        {/* Шаг ①: доделайте MemeCard — здесь появится первый мем */}
        <MemeCard {...memes[0]} />
      </main>
    </>
  );
}
