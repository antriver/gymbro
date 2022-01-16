module.exports = {
    root: true,
    env: {
        node: true,
        jest: true,
    },
    extends: [
        '@antriver/eslint-config-antriver/vue',
    ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

        // Broken: https://github.com/vuejs/eslint-plugin-vue/issues/814
        // https://github.com/vuejs/eslint-plugin-vue/issues/349
        'vue/script-indent': 'off',

        'vue/no-use-v-if-with-v-for': 'off',
    },
    // Use aliases from Webpack config.
    settings: {
        'import/resolver': {
            // "node" is here to fix a problem with built-in packages being amarked as unresolved
            // https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-511007063
            node: {},
            webpack: {
                config: './node_modules/@vue/cli-service/webpack.config.js',
            },
        },
    },
};
