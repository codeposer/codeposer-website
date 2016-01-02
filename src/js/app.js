var Vue = require('vue');
var $ = global.jQuery = require('jquery');
require('fullpage.js');

var language = {
    'zh-CN': require('./languages/zh-CN'),
    'en': require('./languages/en')
}

jQuery('#fullpage').fullpage({
    sectionsColor: ['#EBE3E0', '#EDD5D1', '#E3D6C6', '#DDE0CD', '#F9A646'],
});

new Vue({
    el: document.body,
    data: language.en,
    methods: {
        switchLanguage(lang) {
            this.$data = language[lang];
        }
    }
});