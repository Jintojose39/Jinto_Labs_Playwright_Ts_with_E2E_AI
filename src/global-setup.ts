import fs from 'fs';
import path from 'path';

export default async function globalSetup() {
  const folders = [
     'test-results',
     'playwright-report',
     'allure-results',
     'allure-report'
  ];

  for (const folder of folders) {
    const folderPath = path.join(process.cwd(), folder);

    if (fs.existsSync(folderPath)) {
      fs.rmSync(folderPath, { recursive: true, force: true });
      console.log(`Cleaned: ${folder}`);
    }
  }
}