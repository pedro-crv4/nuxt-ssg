import axios from 'axios';

import Vue from 'vue';

Vue.mixin({
    beforeCreate() {
        const options = this.$options;

        if (options.ajax) {
            this.$ajax = options.ajax;
        } else if (options.parent && options.parent.$ajax) {
            this.$ajax = options.parent.$ajax;
        }
    },
});

const makeAjax = (baseURL) => axios.create({
    baseURL,
    headers: { 'Content-Type': 'application/json' },
});

export default makeAjax;
