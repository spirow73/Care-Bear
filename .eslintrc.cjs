module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "overrides": [
        {
            "env": {
                "browser": true, // Define las variables globales del navegador
                "node": true,
                "es2021": true // Asume las características de ECMAScript 2021
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        eqeqeq: "warn", // Advertir sobre el uso de == o != en lugar de === o !==
        "no-unused-vars": "warn", // Advertir sobre variables declaradas pero no utilizadas
        "no-console": "off", // No permitir el uso de console.log()
      },
}
