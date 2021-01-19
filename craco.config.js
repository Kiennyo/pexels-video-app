const path = require("path");
module.exports = {
    webpack: {
        alias: {
            '@components': path.resolve(__dirname, "src/components/"),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
        }
    }
}