<template>
    <div>
        <pre>{{ activity }}</pre>
    </div>
</template>

<script>
export default {
    props: {
        activity: {
            type: Object,
            required: true,
        },
    },
};
</script>
