module.exports = {
    "parser": "babel-eslint",
    "extends": "eslint-config-airbnb",
    "plugins": [
        "react",
        "flow-vars"
    ],
    "rules": {
        "indent": [1, 4, {"SwitchCase": 1}],
        "quotes": [1, "double"],
        "no-console": 0,
        "react/prefer-stateless-function": 0,
        "react/jsx-no-bind": 0,
        "react/jsx-indent-props": [1, 4],
        "react/sort-comp": 0,
        "flow-vars/define-flow-type": 1,
        "flow-vars/use-flow-type": 1,
        "space-infix-ops": 0,
        "no-param-reassign": 0,
        "consistent-return": 0,
        "arrow-body-style": 0,
        "no-use-before-define": 0,
        "react/jsx-boolean-value": 1,
        "react/jsx-closing-bracket-location": 1,
        "react/jsx-space-before-closing": 1,
        "react/no-multi-comp": 1,
        "react/prefer-es6-class": 1,
        "react/prop-types": 1,
        "array-bracket-spacing": 1,
        "array-callback-return": 1,
        "arrow-spacing": 1,
        "block-scoped-var": 1,
        "brace-style": 1,
        "camelcase": 1,
        "comma-dangle": 1,
        "comma-spacing": 1,
        "comma-style": 1,
        "computed-property-spacing": 1,
        "curly": 1,
        "default-case": 1,
        "dot-notation": 1,
        "eqeqeq": [1, "allow-null"],
        "guard-for-in": 1,
        "jsx-quotes": 1,
        "key-spacing": 1,
        "keyword-spacing": 1,
        "max-len": [1, {"ignoreTrailingComments": true}],
        "no-case-declarations": 1,
        "no-else-return": 1,
        "no-empty": 1,
        "no-extra-semi": 1,
        "no-fallthrough": 1,
        "no-inner-declarations": 1,
        "no-loop-func": 1,
        "no-multi-spaces": 1,
        "no-multi-str": 1,
        "no-multiple-empty-lines": 1,
        "no-nested-ternary": 1,
        "no-redeclare": 1,
        "no-shadow": 1,
        "no-spaced-func": 1,
        "no-sparse-arrays": 1,
        "no-trailing-spaces": 1,
        "no-undef": 1,
        "no-unneeded-ternary": 1,
        "no-unreachable": 1,
        "no-unused-expressions": 1,
        "no-unused-vars": 1,
        "no-useless-constructor": 1,
        "no-var": 1,
        "new-cap": 1,
        "object-curly-spacing": [1, "always"],
        "object-shorthand": 1,
        "one-var": 1,
        "one-var-declaration-per-line": 1,
        "padded-blocks": 1,
        "prefer-arrow-callback": 1,
        "prefer-const": 1,
        "prefer-rest-params": 1,
        "prefer-template": 1,
        "quote-props": 1,
        "radix": 1,
        "semi": 1,
        "semi-spacing": 1,
        "space-before-blocks": 1,
        "space-before-function-paren": 1,
        "space-in-parens": 1,
        "spaced-comment": 1,
        "vars-on-top": 1,
        "wrap-iife": 1
    }
};
