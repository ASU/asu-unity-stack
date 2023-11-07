const inquirer = require('inquirer');
const originalAdapter = require('cz-conventional-changelog');
const getPackageNames = require('./getPackageNames').getPackageNames;
const path = require('path');
const packagesPath = path.resolve(__dirname, '../packages');
const scopes = ['', ...getPackageNames(packagesPath)];

inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));

exports.prompter = function (cz, commit) {
  originalAdapter.prompter(
    {
      ...cz,
      prompt: (questions) => {
        const modifiedQuestions = questions.map((question) => {
          if (question.name === 'scope') {
            return {
              ...question,
              type: 'autocomplete',
              message: 'Select a scope or input a custom one:',
              source: (answersSoFar, input = '') => {
                return new Promise((resolve) => {
                  resolve(scopes.filter((scope) => scope.includes(input)));
                });
              },
            };
          }
          return question;
        });

        return inquirer.prompt(modifiedQuestions);
      },
    },
    commit
  );
};
