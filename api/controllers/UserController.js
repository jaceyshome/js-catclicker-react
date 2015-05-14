/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

require('node-jsx').install();
var React = require('react/addons');
var ReactApp = React.createFactory(require('../../app/components/ReactApp.js').ReactApp);

module.exports = {
  hi: function (req, res) {
// React.renderToString takes your component
    // and generates the markup
    var reactHtml = React.renderToString(ReactApp({}));
    //var reactHtml = 'foo';
    // Output html rendered by react
    // console.log(myAppHtml);
    res.render('index.handlebars', {reactOutput: reactHtml});
  }
};

