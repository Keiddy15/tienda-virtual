<template>
    <v-app>
        <APP_BAR/>
        <FOOTER/>
    </v-app>
</template>

<script>
import APP_BAR from "@/components/app_bar.vue";
import FOOTER from "@/components/footer.vue";
export default {
    name: 'Hombre',
    components: {
    APP_BAR,FOOTER
    }
}
</script>

<style scoped>

</style>