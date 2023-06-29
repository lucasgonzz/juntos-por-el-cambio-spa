<template>
        <propuestas></propuestas>  
</template>

<script>
export default {
    name: 'HomeView',
    components: {
        Propuestas: () => import('@/components/home/propuestas/Index'),
    },
}
</script>
