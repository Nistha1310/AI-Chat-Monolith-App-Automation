import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();
const envExamplePath = path.join(projectRoot, '.env.example');
const envPath = path.join(projectRoot, '.env');

console.log('Initializing environment configuration...');

if (!fs.existsSync(envExamplePath)) {
  console.warn('⚠️  Warning: .env.example file not found.');
} else if (!fs.existsSync(envPath)) {
  fs.copyFileSync(envExamplePath, envPath);
  console.log('✅ Created .env file from .env.example');
} else {
  console.log('ℹ️  .env file already exists. Skipping creation.');
}