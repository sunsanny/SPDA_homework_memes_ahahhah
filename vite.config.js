import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // ponytail: относительный base — сайт работает по любому адресу, в том числе <ник>.github.io/<репозиторий>/.
  // Добавите роутинг — замените на '/<репозиторий>/'.
  base: './',
});
