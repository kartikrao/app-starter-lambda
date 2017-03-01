module.exports = function (wallaby) {
    return {
        files: [{
            pattern: 'src/**/*.ts'
        }],
        tests: [{
            pattern: 'test/spec.*.ts'
        }],
        env: {
            type: 'node',
        },
        testFramework: 'jasmine',
        compilers: {
            '**/*.ts': wallaby.compilers.typeScript({
                module: 'commonjs'
            })
        }
    };
};