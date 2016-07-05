'use strict';
var path = require('path');
var fs = require('fs');
var yeoman = require('yeoman-generator');
var walker = require('walker');
var _ = require('lodash');
var results = [];
var Utils = yeoman.Base.extend({
  _generateTest: function(name, type) {
    this.fs.copyTpl(
      this.templatePath('../../app/templates/_test/_spec/_template.js'),
      this.destinationPath('test/spec/' + type + '/' + name + '.js'), {
        name: name,
        camelCaseName: _.camelCase(name),
        camelCaseSpecType: _.camelCase(type),
        specType: type,
        testDirectory: type
      }
    );
    walker('test/spec/').on('file', function(entry, stat) {
      if (entry.indexOf('testSuite.js') == -1) {
        results.push(entry);
      };
    }).on('end', _.bind(function() {
var myArray =  "'" + results.join("',\n'") + "'";
      this.fs.copyTpl(
        this.templatePath('../../app/templates/_test/_spec/_testSuite.js'),
        this.destinationPath('test/spec/testSuite.js'), {
          testArray: myArray
        }
      );
    }, this));
  }
});

module.exports = Utils;
