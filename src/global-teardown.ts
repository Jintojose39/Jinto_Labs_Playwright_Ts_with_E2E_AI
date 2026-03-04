import { execSync } from 'child_process';

export default async function globalTeardown() {
  console.log('Test execution completed');

  try {
    execSync('allure generate allure-results --clean -o allure-report', { stdio: 'inherit' });
    execSync('allure open allure-report', { stdio: 'inherit' });
  } catch {
    console.log('Allure report generation failed or skipped');
  }

  try {
    execSync('npx playwright show-report', { stdio: 'inherit' });
  } catch {
    console.log('Playwright HTML report not available');
  }
}