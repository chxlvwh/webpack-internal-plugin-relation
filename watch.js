/**
 * @file watch.js
 * @author zhouhongxuan (zhouhongxuan@baidu.com)
 * @description
 * File Created 2018-09-23 22:45:56, Sunday
 * -----
 * Last Modified 2018-09-23 22:45:56, Sunday
 * Modified By zhouhongxuan (zhouhongxuan@baidu.com>)
 * -----
*/
const chokidar = require('chokidar');
const run = require('./index');
run();

chokidar.watch('./lib').on('change', (event, path) => {
    run();
});