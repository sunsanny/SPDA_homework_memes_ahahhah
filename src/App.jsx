import Feed from './components/Feed.jsx';

export default function App() {
  return (
    <>
      <header className="header">
        <h1>Лента мемов</h1>
      </header>
      <main className="page">
        <Feed />
      </main>
    </>
  );
}
