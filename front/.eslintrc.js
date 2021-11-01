module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "eqeqeq": "off",
        "semi": "off",
        "curly": "error",
        "quotes": "off",
        "react/prop-types": "off",
        'no-use-before-define': "off",
        'no-param-reassign': "off",
        'no-unused-vars': "off",
        'no-nested-ternary': "off"
    }

};
