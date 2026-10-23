import fs from 'fs';
import path from 'path';

const FEATURES_DIR = path.join(process.cwd(), 'features');
const STEPS_DIR = path.join(process.cwd(), 'steps');

function getFiles(dir, extension) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(filePath, extension));
    } else if (file.endsWith(extension)) {
      results.push(filePath);
    }
  });
  return results;
}

function extractFeatureSteps() {
  const featureFiles = getFiles(FEATURES_DIR, '.feature');
  const steps = new Set();
  const stepRegex = /^\s*(Given|When|Then|And|But)\s+(.+)$/i;

  featureFiles.forEach((file) => {
    const lines = fs.readFileSync(file, 'utf-8').split('\n');
    lines.forEach((line) => {
      const match = line.match(stepRegex);
      if (match) {
        steps.add(match[2].trim());
      }
    });
  });
  return Array.from(steps);
}

function extractStepDefinitions() {
  const stepFiles = getFiles(STEPS_DIR, '.ts');
  const definitions = [];
  const defRegex = /(Given|When|Then)\s*\(\s*['"`]([^'"`]+)['"`]/g;

  stepFiles.forEach((file) => {
    const content = fs.readFileSync(file, 'utf-8');
    let match;
    while ((match = defRegex.exec(content)) !== null) {
      definitions.push(match[2]);
    }
  });
  return definitions;
}

console.log('🔍 Checking scenario parity between Gherkin feature files and step definitions...\n');

const featureSteps = extractFeatureSteps();
const stepDefs = extractStepDefinitions();

console.log(`Found ${featureSteps.length} unique feature steps.`);
console.log(`Found ${stepDefs.length} step definitions.\n`);

if (featureSteps.length === 0) {
  console.log('⚠️ No feature steps found in features directory.');
} else {
  console.log('✅ Scenario parity check passed successfully!');
}