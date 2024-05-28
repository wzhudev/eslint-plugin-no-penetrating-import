module.exports = {
  meta: {
    type: "problem",
    messages: {
      noPenetrating: `Should not use import from files of another package. Import from the package's root instead.`
    },
    schema: [] // no options
  },
  create: function(context) {
    return {
      ImportDeclaration: function(node) {
        const value = node.source.value;
        if (value) {
          if (value.startsWith('@') && value.endsWith('.js')) {
            context.report({
              node: node,
              messageId: "noPenetrating",
            });
          }
        }
      }
    }
  }
}
