'use strict';
var util = require('util');
var path = require('path');
var yosay = require('yosay');
var Generator = require('yeoman-generator');

var GeneratorApp = Generator.extend({
userDialog: function(){
  return this.prompt([{
        type    : 'input',
        name    : 'name',
        message : 'Your project name',
        default : this.appname // Default to current folder name
      }]).then((answers) => {
        this.name = answers.name;
        this.log('app name', answers.name);
      });
    }
,
scaffoldFolders: function(){

  this.fs.copyTpl(
      this.templatePath('_index.html'),
      this.destinationPath('public/index.html'),
      { site_name : this.name}
    );

},
generateBower: function(){

  this.fs.copyTpl(
      this.templatePath('_bower.json'),
      this.destinationPath('bower.json'),
      { site_name : this.name}

    );

},

end: function () {
    this.bowerInstall()
}

});

module.exports = GeneratorApp;
