// Проверка, что всё готово к паре: npm run check
import { existsSync, readFileSync } from 'node:fs';

let ok = true;
const pass = (msg) => console.log(`✅ ${msg}`);
const fail = (msg, fix) => {
  ok = false;
  console.log(`❌ ${msg}\n   → ${fix}`);
};

// Vite 8 требует Node ^20.19 или >=22.12
const [major, minor] = process.versions.node.split('.').map(Number);
if ((major === 20 && minor >= 19) || (major === 22 && minor >= 12) || major > 22) pass(`Node.js ${process.versions.node}`);
else fail(`Node.js ${process.versions.node} слишком старый`, 'Установите LTS-версию с https://nodejs.org');

if (existsSync('node_modules/react') && existsSync('node_modules/vite')) pass('Зависимости установлены');
else fail('Зависимости не установлены', 'Выполните npm install в папке проекта');

const apiUrl = readFileSync('.env', 'utf8').match(/^VITE_API_URL=(.+)$/m)?.[1].trim();
if (!apiUrl) {
  fail('В .env нет VITE_API_URL', 'Верните файл .env из репозитория');
} else {
  try {
    const res = await fetch(`${apiUrl}/api/memes`, { signal: AbortSignal.timeout(5000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    pass(`Сервер ленты отвечает: ${apiUrl}`);
  } catch (err) {
    // Не ошибка: сервер понадобится только на третьей паре
    console.log(`⚠️  Сервер ленты пока не отвечает (${err.message}). До пары 3 это не мешает.`);
  }
}

console.log(ok ? '\n✅ Всё готово. До встречи на паре!' : '\n❌ Что-то не так. Не страшно — разберёмся на паре.');
process.exitCode = ok ? 0 : 1;
