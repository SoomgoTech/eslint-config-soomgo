module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
        jquery: true,
        worker: true,
        commonjs: true,
        mocha: true,
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 8,
        sourceType: 'module',
    },
    // add your custom rules here
    rules: {
        'arrow-parens': 0,
        'generator-star-spacing': 0,
        'indent': ['error', 4],
        'semi': ['error', 'always'],
        'brace-style': ['error', 'stroustrup'],
        'no-undef': 'error',
        'no-trailing-spaces': ['error', { skipBlankLines: true }],
        'comma-dangle': ['error', {
            "arrays": "never",
            "objects": "always-multiline",
            "imports": "never",
            "exports": "never",
            "functions": "never"
        }],
    },
    globals: {
        ua: true
    }
};
