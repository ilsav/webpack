export const loadCSS = () => ({
    module: {
        rules: [
            {
                test: /\.css$/,
                use:  [ 'style-loader', 'css-loader' ],
            },
        ],
    },
});