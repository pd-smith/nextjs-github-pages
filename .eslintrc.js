module.exports = {
    plugins: ['react', 'prettier', 'import', 'react-hooks'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            classes: true
        }
    },
    env: {
        es6: true,
        browser: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:import/recommended',
        'prettier',
        'prettier/react'
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx']
            }
        }
    },
    rules: {
        'prettier/prettier': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn'
    }
};
