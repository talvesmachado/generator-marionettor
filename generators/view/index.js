'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var yeomanExtended = require('../utils');

module.exports =  yeomanExtended.extend({
  prompting: function() {

    var prompts = [{
      type: 'input',
      name: 'viewName',
      message: 'what\'s your view name?'
    }, {
      type: 'list',
      name: 'viewType',
      message: 'Wich kind of view do you whant to create?',
      choices: [{
        name: 'View',
        value: 0
      }, {
        name: 'ItemView',
        value: 1
      }, {
        name: 'CollectionView',
        value: 2
      }, {
        name: 'CompositeView',
        value: 3
      }, {
        name: 'LayoutView',
        value: 4
      }],
      default: 0
    }, {
      type: 'input',
      name: 'viewTemplateName',
      message: 'what\'s your view HTML TEMPLATE name?',
      default: function(pt) {
        return pt.viewName;
      }
    }];

    return this.prompt(prompts).then(function(props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function() {
    this.fs.copyTpl(
      this.templatePath('_view.js'),
      this.destinationPath('app/scripts/views/'+this.props.viewName+'.js'), {
        viewName: this.props.viewName,
        viewType: this.props.viewType,
        viewTemplateName: this.props.viewTemplateName
      }
    );

    this.fs.copyTpl(
          this.templatePath('_template.html'),
          this.destinationPath('app/scripts/templates/'+this.props.viewTemplateName+'.html'), {
            viewName: this.props.viewName
          }
        );
    this._generateTest(this.props.viewName, 'views');
  }
});
