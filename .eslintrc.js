// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html',
        'vue'
    ],
    // add your custom rules here
    'rules': {
        'comma-spacing': [2, {
            'before': false,
            'after': true
        }], // 逗号后带空格
        'indent': [2, 4], //缩进风格
        // 'linebreak-style': [2, 'windows'],  // 换行风格
        'linebreak-style': 0, // 换行风格
        // 'quotes': [2, 'single'], // 引号，单引号
        "no-console": 0, //不禁用console
        // 'semi': [2, 'always'], // 始终分号结尾
        "semi": 0, //不强制使用分号
        'no-extra-semi': 2, // 禁止不必要的分号
        'space-before-function-paren': [2, 'never'], //禁止函数圆括号之前有一个空格

        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
}
