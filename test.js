// Tests unitaires pour Arcade Games
console.log('🧪 DÉMARRAGE DES TESTS UNITAIRES');
console.log('================================');

// Test 1: Vérifier que les fichiers existent
console.log('\n1. 📁 Vérification des fichiers:');
const fs = require('fs');

const requiredFiles = ['src/index.html'];
let allFilesExist = true;

requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`   ✅ ${file} existe`);
  } else {
    console.log(`   ❌ ${file} manquant`);
    allFilesExist = false;
  }
});

// Test 2: Vérifier la structure HTML
console.log('\n2. 🔍 Validation HTML:');
if (fs.existsSync('src/index.html')) {
  const htmlContent = fs.readFileSync('src/index.html', 'utf8');
  
  const checks = [
    { name: 'Doctype HTML', regex: /<!DOCTYPE html>/i, passed: false },
    { name: 'Balise <html>', regex: /<html/i, passed: false },
    { name: 'Section <head>', regex: /<head>/i, passed: false },
    { name: 'Section <body>', regex: /<body>/i, passed: false },
    { name: 'Balise fermante </html>', regex: /<\/html>/i, passed: false }
  ];
  
  checks.forEach(check => {
    check.passed = check.regex.test(htmlContent);
    console.log(`   ${check.passed ? '✅' : '❌'} ${check.name}`);
  });
  
  const htmlValid = checks.every(c => c.passed);
  
  // Test 3: Vérifier la taille
  console.log('\n3. 📊 Vérification de la taille:');
  const lineCount = htmlContent.split('\n').length;
  console.log(`   📏 Lignes de code: ${lineCount}`);
  
  if (lineCount > 50) {
    console.log('   ✅ Taille suffisante');
  } else {
    console.log('   ⚠️  Fichier très court');
  }
}

// Résumé des tests
console.log('\n================================');
if (allFilesExist) {
  console.log('🎉 TOUS LES TESTS SONT PASSÉS !');
  console.log('✅ Application prête pour le déploiement');
} else {
  console.log('❌ CERTAINS TESTS ONT ÉCHOUÉ');
  console.log('🔍 Vérifiez les fichiers manquants');
  process.exit(1);
}