<template>
    <div>
        <div v-if="!workout" />
        <div v-else>
            <pre>{{ workout }}</pre>
            <a class="btn btn-dark"
               @click.prevent="newActivity">New Activity</a>
            <Activity v-if="selectedActivity"
                      :workout="workout"
                      :activity="selectedActivity" />
        </div>
    </div>
</template>

<script>
import { Activity } from '@/lib/models/Activity';
import ActivityView from '@/views/Workout/Activity.vue';

export default {
    name: 'WorkoutView',
    components: { Activity: ActivityView },
    data() {
        return {
            selectedActivity: null,
            workout: null,
        };
    },

    created() {
        const workoutId = this.$route.params.workoutId;
        console.log('workoutId', workoutId);
        this.workout = this.$store.state.workouts[workoutId];
    },

    methods: {
        newActivity() {
            const activity = new Activity();
            this.selectedActivity = activity;
        },
    },
};
</script>
