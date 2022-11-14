module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [],
    'overrides': [
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [],
    'rules': {
        'indent': [
            'error',
            4
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'jsx-quotes': [
            'error',
            'prefer-double'
        ],
        'react/react-in-jsx-scope': 'off'
    }
};
