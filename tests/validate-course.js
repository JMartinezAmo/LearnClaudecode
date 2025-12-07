#!/usr/bin/env node

/**
 * Tests de validación para el curso de Vibe Coding
 * Ejecutar: node tests/validate-course.js
 */

const fs = require('fs');
const path = require('path');

const COURSE_ROOT = path.join(__dirname, '..');
const results = {
  passed: 0,
  failed: 0,
  warnings: 0,
  details: []
};

// Colores para output
const GREEN = '\x1b[32m';
const RED = '\x1b[31m';
const YELLOW = '\x1b[33m';
const RESET = '\x1b[0m';

function log(type, message) {
  const prefix = {
    pass: `${GREEN}✓${RESET}`,
    fail: `${RED}✗${RESET}`,
    warn: `${YELLOW}⚠${RESET}`,
    info: '→'
  };
  console.log(`  ${prefix[type]} ${message}`);
}

function getAllMarkdownFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      if (!item.startsWith('.') && item !== 'node_modules' && item !== 'tests') {
        getAllMarkdownFiles(fullPath, files);
      }
    } else if (item.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  return files;
}

// Test 1: Verificar que todos los archivos existen
function testFileStructure() {
  console.log('\n📁 Test: Estructura de archivos');

  const expectedFiles = [
    'README.md',
    'CLAUDE.md',
    '00-setup/README.md',
    '01-piloto/README.md',
    '01-piloto/E01-landing-page.md',
    '01-piloto/E02-formulario.md',
    '01-piloto/E03-dashboard-simple.md',
    '02-copiloto/README.md',
    '02-copiloto/E01-feature-con-tests.md',
    '02-copiloto/E02-refactor-guiado.md',
    '02-copiloto/E03-debug-sistematico.md',
    '03-director/README.md',
    '03-director/E01-worktrees.md',
    '03-director/E02-pr-automatico.md',
    '03-director/E03-pipeline-completo.md'
  ];

  for (const file of expectedFiles) {
    const fullPath = path.join(COURSE_ROOT, file);
    if (fs.existsSync(fullPath)) {
      log('pass', file);
      results.passed++;
    } else {
      log('fail', `${file} - NO EXISTE`);
      results.failed++;
    }
  }
}

// Test 2: Verificar links internos
function testInternalLinks() {
  console.log('\n🔗 Test: Links internos');

  const files = getAllMarkdownFiles(COURSE_ROOT);
  const linkRegex = /\[([^\]]+)\]\((\.[^)]+)\)/g;

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const dir = path.dirname(file);
    let match;

    while ((match = linkRegex.exec(content)) !== null) {
      const linkText = match[1];
      const linkPath = match[2];
      const targetPath = path.resolve(dir, linkPath);

      if (fs.existsSync(targetPath)) {
        results.passed++;
      } else {
        log('fail', `${path.relative(COURSE_ROOT, file)}: Link roto → ${linkPath}`);
        results.failed++;
      }
    }
  }

  if (results.failed === 0) {
    log('pass', 'Todos los links internos son válidos');
  }
}

// Test 3: Verificar versión en archivos
function testVersioning() {
  console.log('\n📌 Test: Versionado');

  const files = getAllMarkdownFiles(COURSE_ROOT);
  const versionRegex = /Versión:\s*Claude Code/i;

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const relativePath = path.relative(COURSE_ROOT, file);

    // CLAUDE.md no necesita versión explícita
    if (relativePath === 'CLAUDE.md') continue;

    if (versionRegex.test(content)) {
      log('pass', relativePath);
      results.passed++;
    } else {
      log('warn', `${relativePath} - Sin campo de versión`);
      results.warnings++;
    }
  }
}

// Test 4: Verificar estructura de ejercicios
function testExerciseStructure() {
  console.log('\n📝 Test: Estructura de ejercicios');

  const requiredSections = [
    'Objetivo',
    'Contexto',
    'Instrucciones',
    'Criterio de éxito'
  ];

  const exerciseFiles = getAllMarkdownFiles(COURSE_ROOT)
    .filter(f => path.basename(f).startsWith('E0'));

  for (const file of exerciseFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const relativePath = path.relative(COURSE_ROOT, file);
    const missingSections = [];

    for (const section of requiredSections) {
      const regex = new RegExp(`^##\\s+${section}`, 'im');
      if (!regex.test(content)) {
        missingSections.push(section);
      }
    }

    if (missingSections.length === 0) {
      log('pass', relativePath);
      results.passed++;
    } else {
      log('fail', `${relativePath} - Faltan secciones: ${missingSections.join(', ')}`);
      results.failed++;
    }
  }
}

// Test 5: Verificar criterios de éxito con checkboxes
function testSuccessCriteria() {
  console.log('\n☑️  Test: Criterios de éxito con checkboxes');

  const exerciseFiles = getAllMarkdownFiles(COURSE_ROOT)
    .filter(f => path.basename(f).startsWith('E0'));

  const checkboxRegex = /- \[ \]/g;

  for (const file of exerciseFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const relativePath = path.relative(COURSE_ROOT, file);

    // Buscar sección de criterio de éxito
    const criterioMatch = content.match(/## Criterio de éxito[\s\S]*?(?=\n## |$)/i);

    if (criterioMatch) {
      const checkboxes = (criterioMatch[0].match(checkboxRegex) || []).length;
      if (checkboxes >= 3) {
        log('pass', `${relativePath} (${checkboxes} criterios)`);
        results.passed++;
      } else {
        log('warn', `${relativePath} - Solo ${checkboxes} criterios (recomendado: 3+)`);
        results.warnings++;
      }
    } else {
      log('fail', `${relativePath} - No tiene sección de criterios`);
      results.failed++;
    }
  }
}

// Test 6: Verificar navegación (links de volver)
function testNavigation() {
  console.log('\n🧭 Test: Navegación');

  const files = getAllMarkdownFiles(COURSE_ROOT)
    .filter(f => !['README.md', 'CLAUDE.md'].includes(path.basename(f)) ||
                 path.dirname(f) !== COURSE_ROOT);

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const relativePath = path.relative(COURSE_ROOT, file);

    const hasBackLink = content.includes('Volver al índice') ||
                        content.includes('Volver al nivel');

    if (hasBackLink) {
      log('pass', relativePath);
      results.passed++;
    } else {
      log('warn', `${relativePath} - Sin link de navegación`);
      results.warnings++;
    }
  }
}

// Test 7: Verificar que no hay placeholders
function testNoPlaceholders() {
  console.log('\n🚫 Test: Sin placeholders');

  const files = getAllMarkdownFiles(COURSE_ROOT);
  // Busca: "Placeholder" al inicio, o TODO/FIXME como comentarios (mayúsculas)
  const placeholderRegex = /^>\s*Placeholder|^\s*<!--\s*(TODO|FIXME)|por desarrollar/im;

  let hasPlaceholders = false;
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const relativePath = path.relative(COURSE_ROOT, file);

    if (placeholderRegex.test(content)) {
      log('fail', `${relativePath} - Contiene placeholder`);
      results.failed++;
      hasPlaceholders = true;
    }
  }

  if (!hasPlaceholders) {
    log('pass', 'Ningún archivo contiene placeholders');
    results.passed++;
  }
}

// Ejecutar todos los tests
console.log('═══════════════════════════════════════════');
console.log('  VALIDACIÓN DEL CURSO DE VIBE CODING');
console.log('═══════════════════════════════════════════');

testFileStructure();
testInternalLinks();
testVersioning();
testExerciseStructure();
testSuccessCriteria();
testNavigation();
testNoPlaceholders();

// Resumen
console.log('\n═══════════════════════════════════════════');
console.log('  RESUMEN');
console.log('═══════════════════════════════════════════');
console.log(`  ${GREEN}Pasados:${RESET}    ${results.passed}`);
console.log(`  ${RED}Fallidos:${RESET}   ${results.failed}`);
console.log(`  ${YELLOW}Warnings:${RESET}   ${results.warnings}`);
console.log('═══════════════════════════════════════════\n');

process.exit(results.failed > 0 ? 1 : 0);
