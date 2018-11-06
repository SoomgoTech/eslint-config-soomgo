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
        ecmaFeatures: {
            jsx: true,
        },
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: [ 'standard', 'plugin:react/recommended' ],
    // required to lint *.vue files
    plugins: [ 'html', 'react' ],
    // add your custom rules here
    rules: {
        'arrow-parens': 0,
        'generator-star-spacing': 0,
        'indent': [ 'error', 4 ],
        'semi': [ 'error', 'always' ],
        'brace-style': [ 'error', 'stroustrup' ],
        'no-undef': 'error',
        'no-trailing-spaces': [ 'error', { skipBlankLines: true } ],
        'comma-dangle': [ 'error', {
            "arrays": "never",
            "objects": "always-multiline",
            "imports": "never",
            "exports": "never",
            "functions": "never"
        }],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
    },
    globals: {
        ua: true
    }
};
