<template>
    <div>
        <flash-card></flash-card>
        <div class="deck-buttons-container">
            <button class="btn">Previous</button>
            <button class="btn">Next</button>
        </div>
    </div>
</template>

<script>
import FlashCard from '@/components/FlashCard.vue'; 
export default {
    components: {
        FlashCard
    }
};
</script>

<style scoped>
</style>