<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">Available Tour Types</v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <!--SHIPWRECK TOURS-->
                        <v-img src="https://cdn.geekwire.com/wp-content/uploads/2017/03/170314-oceangate-630x399.jpg" height="500px">
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text">Famous Shipwreck Tours</span>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Shipwrecks</h3>
                            <div>
                                The Tragedy of the Titanic, the mystery of the RMS Republic's hidden fortune, the rich history of the USS Johnston.
                                Starting off at $12,800, you can visit what many will only ever see pictures of.
                            </div>
                        </div>
                    </v-card-text>
                    <!--NEED TO CHANGE TO FAMOUS SHIPWRECK'S-->
                    <v-card-actions v-if="['menu'].includes($route.name)">
                        <v-btn outline block color="dark blue" @click="showTours('keto')">View these tours</v-btn> 
                        <!--<v-btn outline block color="green" @click="showTours()">View these tours</v-btn> -->
                    </v-card-actions>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <!--Mariana's Trench-->
                        <v-img src="https://3.bp.blogspot.com/-0_-fj0OT5jc/XBPeaRs5NcI/AAAAAAAAQqI/bFevl_U-17s9hnffm_If4zouhAK6ofwBACLcBGAs/s1600/File%2Bphoto%2Bof%2Ba%2Bdeep%2Bsea%2Btrench.%2BThe%2BMariana%2BTrench%2Bis%2Bthe%2Bdeepest%2Bnatural%2Bpoint%2Bon%2BEarth.%2B%25281%2529.jpg" height="500px">
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text">Mariana's Trench Tours</span>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Mariana's Trench</h3>
                            <div>
                                Located in the western Pacific Ocean, Mariana's Trench is the deepest oceanic trench on Earth. The max depth known is 10,984 meters, or 36,037 feet.
                                Starting off at $35,600, you can be one of the only humans to ever explore this natural wonder.
                            </div>
                        </div>
                    </v-card-text>
                    <!--NEED TO CHANGE TO MARIANA's TRENCH-->
                    <v-card-actions v-if="['menu'].includes($route.name)">
                        <v-btn outline block color="dark blue" @click="showTours('paleo')">View these tours</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <!--Beneath the Arctic Shelf Tours-->
                        <v-img src="http://ellenlandweber.com/exhibit/show/travel/antarctica/Berg+Mt.jpg" height="500px">
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text">Beneath the Arctic Shelf Tours</span>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Arctic Shelf</h3>
                            <div>
                                At temperatures of up to -50°F, and water temperatures of around 30°F, it's no wonder why the incredible world beneath the arctic shelf has gone undiscovered.
                                Starting off at $8,200, you can see the magnificent ecosystem that scientist can only dream of.
                            </div>
                        </div>
                    </v-card-text>
                    <!--Change to ARCTIC SHELF-->
                    <v-card-actions v-if="['menu'].includes($route.name)">
                        <v-btn outline block color="dark blue" @click="showTours('vegan')">View these tours</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomePlans',
    methods: {
        showTours(plan) {
            this.$store.dispatch('getTours', plan);
            //this.$store.dispatch('getTours', plan);
        },
        /*
        showTours() {
            console.log("SHOW TOURS: " + this.$store.dispatch('getTours'))
            this.$store.dispatch('getTours')
        }  
        */      
    }
};
</script>

<style scoped>
</style>