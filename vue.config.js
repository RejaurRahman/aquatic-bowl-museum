const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
        ? 'http://rejaurrahmanprojects.co.uk/Aquatic-Bowl-Museum/'
        : '/',
    assetsDir: 'src/assets'
};