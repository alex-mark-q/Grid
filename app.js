var bem = require('@bem/gulp');

// Создаём хелпер для сборки проекта
var project = bem({
    bemconfig: {
        'blocks': { scheme: 'nested' }
    }
});
console.log(project);
// Создаём хелпер для сборки бандла
var bundle = project.bundle({
    path: 'desktop.bundles/index',
    declPath: 'index.bemdecl.js'
});
console.log(bundle);