module.exports = function (wallaby) {
    return {
        files: [
            'src/**/*.ts',
            { pattern: 'src/**/*spec.ts', ignore: true }
        ],

        tests: [
            'src/**/*spec.ts'
        ],

        compilers: {
            '**/*.ts': wallaby.compilers.typeScript({ module: 'commonjs' })
        },

        env: { type: 'node' },

        testFramework: 'mocha'
    };
};