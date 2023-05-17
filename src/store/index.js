import { createStore } from 'vuex'

export default createStore({
    state: {
        demo: 'vuex'
    },
    getters: {},
    actions: {},
    mutations: {
        DEMO: (states, params) => {
            states.demo = params
        }
    },
    modules: {}
})