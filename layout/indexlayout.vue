<template>
    <div>
        Header<br/>
        Navbar<br/>
        <router-view>
            <Home/>
        </router-view>
        Footer
    </div>
</template>

<script>
import Home from "../pages/Home";

export default {
  components: {
    Home
  }
};
</script>

<style scoped>
</style>