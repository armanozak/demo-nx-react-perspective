const PerspectivePlugin = require('@finos/perspective-webpack-plugin');

module.exports = (config, context) => {
  config.node = { global: true };

  config.plugins.push(new PerspectivePlugin());

  const cssRuleSet = config.module.rules.find(isCssRule);

  const cssRule = cssRuleSet.oneOf.find(isCssRule);

  cssRule.exclude = cssRule.exclude || [];
  cssRule.exclude.push(/node_modules\/monaco-editor.*/);

  return config;
};

function isCssRule({ test }) {
  return test.test('this-does-not-matter.css');
}
