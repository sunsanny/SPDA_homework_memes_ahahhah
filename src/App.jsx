import Feed from './components/Feed.jsx';
import { memes } from './data/memes.js';

export default function App() {
  return (
    <>
      <header className="header">
        <h1>Лента мемов</h1>
      </header>
      <main className="page">
        <Feed memes={memes} />
      </main>
    </>
  );
}
