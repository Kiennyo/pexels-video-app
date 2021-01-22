const path = require("path");
module.exports = {
    webpack: {
        alias: {
            '@/components': path.resolve(__dirname, "src/components/"),
            '@/containers': path.resolve(__dirname, 'src/containers/'),
            '@/hooks': path.resolve(__dirname, 'src/hooks/'),
            '@/utils': path.resolve(__dirname, 'src/utils/'),
        }
    },
    jest: {
        configure: {
            moduleDirectories: ["src", "node_modules"],
            moduleNameMapper: {
                '^@/components(.*)$': '<rootDir>/src/components$1',
                '^@/containers(.*)$': '<rootDir>/src/containers$1',
                '^@/hooks(.*)$': '<rootDir>/src/hooks$1',
                '^@/utils(.*)$': '<rootDir>/src/utils$1',
            },
            coveragePathIgnorePatterns: ["node_modules"]
        }
    }
}