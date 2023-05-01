module.exports = {
    env: {browser: true, es2020: true},
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:reset-hooks/recommended',
    ],
    plugins: [
        'unused-imports',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {
                project: './tsconfig.json',
                alwaysTryTypes: true,
            },
        },
    },
    rules: {
        'padding-line-beetween-statements': [
            'error',
            {blankLine: 'always', prev: '*', next: 'return'},
        ],
        'no-unused-vars': 'off',
        'consistent-return': 0,
        'quotes': ['error', 'single'],
        'no-console': ['error'],
        'max-lines': ['error', 200],
        'id-length': ['error', { min: 2, exceptions: ['_'], properties: 'never' }],
        'max-depth': ['warn', 2],
        'object-curly-spacing': ['error', 'always'],
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'warn',
            {
                'vars': 'all',
                'varsIgnorePattern': '^_',
                'args': 'after-used',
                'argsIgnorePattern': '^_',
            },
        ],
    },
}
