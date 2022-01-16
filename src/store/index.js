import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        workouts: {},
    },
    mutations: {
        /**
         * @param state
         * @param {Workout} workout
         */
        addWorkout(state, workout) {
            Vue.set(state.workouts, workout.workoutId, workout);
        },
    },
    actions: {
    },
    modules: {
    },
});
