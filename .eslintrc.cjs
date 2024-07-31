module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    plugins: [
        'import-newlines',
        'react-refresh'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2021,
    },
    rules: {
        'no-console':                      'warn',
        'no-debugger':                     'warn',
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
        'key-spacing': [
            'error',
            {
                'align': 'value'
            },
        ],
        'import-newlines/enforce':      [
            'error',
            {
                items:     3,
                'max-len': 120,
            },
        ],
        'react-refresh/only-export-components': [
            'warn',
            {
                allowConstantExport: true
            },
        ],
    },
    ignorePatterns: [
        'dist',
        '.eslintrc.cjs'
    ],
}
