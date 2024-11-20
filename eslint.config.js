export default [
    {
        files: ['*/.js'], // Apply to all JavaScript files
        ignores: ['node_modules', 'dist'], // Ignore specific directories
        languageOptions: {
            ecmaVersion: 'latest', // Use the latest ECMAScript version
            sourceType: 'module', // Support ES modules
        },
        rules: {
            'no-unused-vars': 'warn', // Warn about unused variables
            semi: ['error', 'always'], // Enforce semicolons
            quotes: ['error', 'double'], // Enforce double quotes
            eqeqeq: 'error', // Require strict equality checks
        },
    },
]
