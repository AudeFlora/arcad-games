// Tests pour l'application Arcade Games
console.log('🧪 Démarrage des tests pour Arcade Games...');

// Test 1: Vérifier que les fichiers essentiels existent
const fs = require('fs');
const requiredFiles = [
    'src/index.html',
    'src/style.css',
    'src/script.js'
];

requiredFiles.forEach(file => {
    if (fs.existsSync(file)) {
        console.log(`✅ ${file} existe`);
    } else {
        console.error(`❌ ${file} manquant`);
        process.exit(1);
    }
});

// Test 2: Vérifier le contenu HTML
const htmlContent = fs.readFileSync('src/index.html', 'utf8');
if (htmlContent.includes('<!DOCTYPE html>')) {
    console.log('✅ Structure HTML correcte');
} else {
    console.error('❌ Structure HTML incorrecte');
    process.exit(1);
}

// Test 3: Vérifier le CSS
const cssContent = fs.readFileSync('src/style.css', 'utf8');
if (cssContent.includes('body') && cssContent.includes('container')) {
    console.log('✅ CSS contient les sélecteurs essentiels');
} else {
    console.error('❌ CSS incomplet');
    process.exit(1);
}

// Test 4: Vérifier le JavaScript
const jsContent = fs.readFileSync('src/script.js', 'utf8');
if (jsContent.includes('function') && jsContent.includes('showGame')) {
    console.log('✅ JavaScript contient les fonctions principales');
} else {
    console.error('❌ JavaScript incomplet');
    process.exit(1);
}

console.log('🎉 Tous les tests sont passés avec succès!');