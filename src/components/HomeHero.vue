<template>
<v-container fluid fill-height class="home-hero" style="max-height: 100vh;">        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black white--text text-xs-center">EXPLORE THE WORLD</div>
            <div class="display-4 font-weight-black white--text text-xs-center mb-3">LIKE NO HUMAN HAS BEFORE</div>
            <div class="display-1 font-weight-bold white--text text-xs-center">Approximately 5% of the ocean has been explored. Find out what's in the other 95%.</div>
            <!-- COMMENTED OUT TO USE FOR A BUTTON LATER
            <v-btn fab class="mt-5 brown darken-4">
            <v-icon large color="white">expand_more</v-icon>
            </v-btn>
            -->
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeHero'
};
</script>

<style scoped>
.home-hero {
    background: url('https://www.teahub.io/photos/full/105-1050062_1920x1080-data-id-155135-data-src-walls-full.jpg');
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>