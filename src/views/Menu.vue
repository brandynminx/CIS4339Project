<template>
    <div>
        <home-plans></home-plans>
        <tour-plans></tour-plans>
    </div>
</template>

<script>
import HomePlans from '@/components/HomePlans';
import TourPlans from '@/components/TourPlans';
export default {
    name: 'Menu',
    components: {
        HomePlans,
        TourPlans
    }
};
</script>

<style scoped></style>