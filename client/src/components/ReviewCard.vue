<script setup>
import { Review } from '@/models/Review';

defineProps({
  reviewProp: { type: Review, required: true }
})
</script>


<template>
  <div class="reviewCard card p-3 mb-3">
    <div class="card-header d-flex align-items-center">
      <div class="me-3">
        <img class="profile-img rounded-circle" :src="reviewProp.creator.picture" alt="">
      </div>
      <div>
        <div class="stars d-flex">
          <svg v-for="index in reviewProp.rating" :key="index" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg" class="me-1" style="width: 20px; height: 20px;">
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
            </path>
          </svg>
        </div>
        <p class="name mb-0 mt-2 fw-bold">{{ reviewProp.creator.name }}</p>
      </div>
    </div>
    <div class="card-body">
      <p class="message mb-0">{{ reviewProp.body }}</p>
    </div>
  </div>


</template>


<style lang="scss" scoped>
.reviewCard {
  background-color: rgba(243, 244, 246, 1);
  padding: 2rem;
  max-width: 320px;
  border-radius: 10px;
  box-shadow: 0 20px 30px -20px rgba(5, 5, 5, 0.24);
  margin-top: 0.75em;
}

.header {
  display: flex;
  align-items: center;
  grid-gap: 1rem;
  gap: 1rem;
}

.header .image {
  height: 4rem;
  width: 4rem;
  border-radius: 9999px;
  object-fit: cover;
  background-color: royalblue;
}

.stars {
  display: flex;
  justify-content: center;
  grid-gap: 0.125rem;
  gap: 0.125rem;
  color: rgba(34, 197, 94, 1);
}

.stars svg {
  height: 1rem;
  width: 1rem;
}

.name {
  margin-top: 0.25rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 600;
  --tw-text-opacity: 1;
  color: rgba(55, 65, 81, 1);
}

.message {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  margin-top: 1rem;
  color: rgba(107, 114, 128, 1);
}

.reviews {
  padding: 0.75em;
}

.profileContent {
  z-index: 2;
  position: relative;
}

.gradient-background {
  background: linear-gradient(to right, #142f32, #4f5749, #5d793e);
}

.coverImg {
  width: 100%;
  z-index: 1;
  margin: 0px;
  padding: 0px;
}

img {
  max-width: 150px;
}

.coverImg {
  height: 200px;
  background-color: #ccc;
  position: relative;
}

.profile-img {
  max-width: 50%;
  margin-bottom: 0px;
  border-radius: 50%;
  object-fit: cover;
}


.bg-green {
  background-color: #28a745;
}

.profileContent {
  margin-top: 80px;
}
</style>