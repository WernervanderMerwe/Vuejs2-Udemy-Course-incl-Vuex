<template>
    <small>Written by {{ author.firstName }} {{ author.lastName }}</small>
</template>

<script>
    export default {
        props: {
            author: {
                type: Object,
                required: true
            }
        }
    }
</script>