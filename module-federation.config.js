module.exports = {
    name: 'employee',
    exposes: {
        './Module': './src/app/remote-entry/remote-entry.module.ts',
    },
};