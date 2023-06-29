<template>
    <div id="app">
        <nav-banner></nav-banner>
        <b-container fluid>
            <router-view/>

            <foto-elecciones></foto-elecciones>  

            <contacto></contacto>    

            <footer-component></footer-component>
        </b-container>
    </div>
</template>
<script>
export default {
    components: {
        NavBanner: () => import('@/components/nav-banner/Index'),
        FotoElecciones: () => import('@/components/common/foto-elecciones/Index'),
        Contacto: () => import('@/components/common/contacto/Index'),
        FooterComponent: () => import('@/components/common/footer/Index'),
    },
}
</script>
<style lang="scss">
@import '@/sass/app.sass';
#app {
  font-family: Nunito, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
