module.exports = {
    ci: {
        assert: {
            assertions: {
                'categories:performance': [
                    'error',
                    { 'minScore': 0.8 },
                ],
                'categories:accessibility': [
                    'error',
                    { 'minScore': 0.8 },
                ],
            }
        },
        collect: {
            uploadArtifacts: true,
        },
    },
};