<template>
    <div class="home">
        <img alt="Vue logo"
             src="../../assets/logo.png">

        <h2>Start New Workout</h2>

        <a class="btn btn-dark"
           @click.prevent="newWorkout('push')">Push</a>
        <a class="btn btn-dark"
           @click.prevent="newWorkout('pull')">Pull</a>
        <a class="btn btn-dark"
           @click.prevent="newWorkout('legs')">Legs</a>

        <a class="btn btn-dark">Test</a>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { Workout } from '../../lib/models/Workout';

export default {
    name: 'Home',

    components: {

    },

    computed: {
        ...mapState(['currentWorkoutType']),
    },

    methods: {
        newWorkout(type) {
            const workoutId = (new Date()).getTime();

            const workout = new Workout({ workoutId, type });
            console.log(workout);
            this.$store.commit('addWorkout', workout);
            this.$router.push(`/workout/${workoutId}`);
        },

        setCurrentWorkoutType(type) {
            this.$store.commit('setCurrentWorkoutType', type);
        },
    },
};
</script>
