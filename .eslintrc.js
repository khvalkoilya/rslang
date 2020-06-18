module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": "airbnb",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "import",
        "jsx-a11y",
        "react-hooks",
    ],
    "rules": {
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    }
};
