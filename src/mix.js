const mix = require('laravel-mix');
class MicroMix {
    register(val) {}
    dependencies() {}
    webpackRules() {
        return {
            test: /\.js?$/,
            include: [/node_modules\/laravel-micro.js/],
            use: [{ loader: 'babel-loader', options: mix.config.babel() }]
        }
    }
    webpackPlugins() {}
}
mix.extend('micro', new MicroMix);