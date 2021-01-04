module.exports = {
    ci: {
        assert: {
          assertions: {
              'categories:performance': [
                  'error',
                  { 'minScore': 1.0 },
              ],
              'categories:accessibility': [
                  'error',
                  { 'minScore': 1.0 },
              ],
          }
        },
        collect: {
            uploadArtifacts: true,
        },
    },
};