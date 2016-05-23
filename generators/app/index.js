'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Hi Boloss, Thank you for using '+ chalk.red('Marionettor') +'!!! This project is made and maintained by '+ chalk.blue('Thomas Alves Machado') + ' => '+ chalk.yellow('@t_a_machado')
    ));
    var prompts = [{
      name: 'name',
      message: 'what\'s your project name?'
    }, {
      type: 'confirm',
      name: 'is3d',
      message: 'Do you use 3d on this projet?',
      default: true
    }];

    return this.prompt(prompts).then(function(props) {
      console.log(props)
      this.props = props;
    }.bind(this));
  },
  writing: function() {
    // CONFIG FILES
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'), {
        name: this.props.name
      }
    );
    this.fs.copyTpl(
      this.templatePath('_bower.json'),
      this.destinationPath('bower.json'), {
        name: this.props.name,
        is3d: this.props.is3d
      }
    );
    // Project Files
    this.fs.copy(
      this.templatePath('_gulpfile.js'),
      this.destinationPath('gulpfile.js')
    );
    // Site Basic Structure
    this.fs.copy(
      this.templatePath('_app/_index.html'),
      this.destinationPath('app/index.html')
    );
    this.fs.copy(
      this.templatePath('_app/_404.html'),
      this.destinationPath('app/404.html')
    );
    this.fs.copy(
      this.templatePath('_app/_favicon.ico'),
      this.destinationPath('app/favicon.ico')
    );
    this.fs.copy(
      this.templatePath('_app/_robots.txt'),
      this.destinationPath('app/robots.txt')
    );
    // Views CSS
    this.fs.copy(
      this.templatePath('_app/_styles/_main.scss'),
      this.destinationPath('app/styles/main.scss')
    );
    // APPLICATION JS
    this.fs.copy(
      this.templatePath('_app/_scripts/_app.js'),
      this.destinationPath('app/scripts/app.js')
    );
    this.fs.copy(
      this.templatePath('_app/_scripts/_build.js'),
      this.destinationPath('app/scripts/build.js')
    );
    this.fs.copyTpl(
      this.templatePath('_app/_scripts/_main.js'),
      this.destinationPath('app/scripts/main.js'), {
        is3d: this.props.is3d
      }
    );
    // Views JS
    this.fs.copy(
      this.templatePath('_app/_scripts/_views/_homepage.js'),
      this.destinationPath('app/scripts/views/homepage.js')
    );
    // TEMPLATES
    this.fs.copy(
      this.templatePath('_app/_scripts/_templates/_home.html'),
      this.destinationPath('app/scripts/templates/home.html')
    );
    // UTILS JS
    this.fs.copy(
      this.templatePath('_app/_scripts/_utils/_communicator.js'),
      this.destinationPath('app/scripts/utils/communicator.js')
    );
    this.fs.copy(
      this.templatePath('_app/_scripts/_utils/_regionManager.js'),
      this.destinationPath('app/scripts/utils/regionManager.js')
    );
    if(this.props.is3d){
      this.fs.copy(
        this.templatePath('_app/_scripts/_3d/_world.js'),
        this.destinationPath('app/scripts/3d/world.js')
      );
    };

  },

  install: function() {
//    this.installDependencies();
  }
});
