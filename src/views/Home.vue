<template>
    <div>
        <btn-votar></btn-votar>
        <propuestas></propuestas>  
    </div>
</template>

<script>
export default {
    name: 'HomeView',
    components: {
        BtnVotar: () => import('@/components/common/votar-btn/Index'),
        Propuestas: () => import('@/components/home/propuestas/Index'),
    },
}
</script>
