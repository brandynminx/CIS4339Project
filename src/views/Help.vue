<template>
    <v-container>
        <v-layout column>

            <h1 class="title my-3">FAQ (Frequently Asked Questions)</h1>
            <!--Create another section like this but calling different sections of the database (i.e. Location, Tourname, etc)-->      
            <v-simple-table 
                class="elevation-1 mytable">     
                <template v-slot: default> 
                    <thead>
                        <tr>
                        <th 
                        class = "text-left"
                        style="background-color: grey; color: white; font-size: 20px;"
                        >
                        Q: Can we change our tour date after it's been confirmed?
                        <p></p>
                        A: Absolutely. We give users the opportunity to switch their current tour date with any remaining dates within the 'Profile' page.
                        </th>
                        </tr>
                        <p></p>
                        <tr>
                        <th 
                        class = "text-left"
                        style="background-color: grey; color: white; font-size: 20px;"
                        >
                        Q: Are there refunds on the tour if we change our minds?
                        <p></p>
                        A: Our policy allows a full refund as long as the refund request is made at least 30 days in advance. 
                        It takes our submarine pilots and engineers weeks to prepare for our guest's tours. If the reauest is made within the 30 day window, 
                        a half refund is allowed until 7 days before the scheduled tour. After that, refunds will be denied.
                        </th>
                        </tr>
                        <p></p>
                        <tr>
                        <th 
                        class = "text-left"
                        style="background-color: grey; color: white; font-size: 20px;"
                        >
                        Q: How do we learn about the safety involved in these tours?
                        <p></p>
                        A: When you arrive for your tour, we hold a 60 minute debriefing session that will describe safety protocols.
                        </th>
                        </tr>
                        <p></p>
                        <tr>
                        <th 
                        class = "text-left"
                        style="background-color: grey; color: white; font-size: 20px;"
                        >
                        Q: I have a group of 22 wanting to attend, but your occupancy maxes out at 20. Can we still bring the 2 extra people?
                        <p></p>
                        A: Unfortunately, we have a maximum occupancy for the safety of our guests. If we were to go over that maximum, especially at the depths
                        we go, we would be risking the lives of all of the guests, as well as our crew.
                        </th>
                        </tr>
                        <p></p>
                        <tr>
                        <th 
                        class = "text-left"
                        style="background-color: grey; color: white; font-size: 20px;"
                        >
                        Q: Why does it cost so much for a tour?
                        <p></p>
                        A: Being the first touring company to offer deep sea submarine tours, the technology is still new and expensive. We price our tours at just 
                        enough to cover the costs of operating the tour, as well as a 15% return in revenue. This is much below standard mark-up rates.
                        </th>
                        </tr>
                        <p></p>
                        <tr>
                        <th 
                        class = "text-left"
                        style="background-color: grey; color: white; font-size: 20px;"
                        >
                        Q: I booked by accident and now my account is overdrafted. What do I do?
                        <p></p>
                        A: Please reach out to us via the contact information at the bottom of this page so that we may better assist you.
                        </th>
                        </tr>
                        <p></p>
                        <tr>
                        <th 
                        class = "text-left"
                        style="background-color: grey; color: white; font-size: 20px;"
                        >
                        Q: Generally, how long do the tours take?
                        <p></p>
                        A: Our tour times range from 2-7 hours. Our longest tour is our Arctic Shelf tour, which allows you to explore the 
                        underside of the recently unexplored arctic shelf.
                        </th>
                        </tr>
                        <p></p>
                        <tr>
                        <th 
                        class = "text-left"
                        style="background-color: grey; color: white; font-size: 20px;"
                        >
                        Q: I went on one of your tours before and wasn't happy with my experience. Can I get a refund?
                        <p></p>
                        A: We are deeply sorry to hear that you did not enjoy your experience with us. Please reach out to use via the contact 
                        information at the bottom of the page so that we can look further into this and assist you.
                        </th>
                        </tr>
                        <p></p>
                        <tr>
                        <th 
                        class = "text-left"
                        style="background-color: lightblue; color: black; font-size: 20px; align-content: center;"
                        >
                        <h3> Contact Information </h3>
                        <a v-bind:href="url">{{ url }}</a>
                        <p></p>
                        <a v-bind:href="phone">{{ phone }}</a>
                        </th>
                        </tr>
                    </thead>
            </template>
            </v-simple-table>
        </v-layout>
    </v-container>
    
</template>

<script>

export default {
    name: 'Help',
    data() {
        return {
             url: 'dssubtours@gmail.com',
             phone: '1(800)-775-5555'
        }
    },
    computed: {
    },
    mounted() {
    },

};
</script>

<style scoped>
.mytable .v-table tbody tr:not(:last-child) {
    background-color:lightblue;
    font-size: 80px;
    
}
</style>