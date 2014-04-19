requirejs.config({
    baseUrl: 'scripts',
    paths: {
        'jquery': 'lib/jquery-1.10.1.min',
        'bootstrap': 'lib/bootstrap.min',
        'jsx': 'lib/jsx',
        'JSXTransformer': 'lib/JSXTransformer-0.3.0',
        'react': 'lib/react-0.10.0'
    },
    shim: {
        'jquery': {
            exports: '$'
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'react': {
            exports: 'React'
        },
        'JSXTransformer': {
            exports: "JSXTransformer"
        }
    }
});

define(['jquery', 'bootstrap', 'react', 'jsx!switchCharacter.jsx'], function($, b, React, CharacterSwitcher) {
    // Turn on bootstrap UI specific
    React.renderComponent(new CharacterSwitcher(), $('#js-switcher')[0]);
});