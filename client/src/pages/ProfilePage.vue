<script setup>
import { computed, onMounted, watch } from 'vue';
import { AppState } from '../AppState.js';
import { useRoute } from 'vue-router';
import Pop from '@/utils/Pop.js';
import { profilesService } from '@/services/ProfilesService.js';
import { logger } from '@/utils/Logger.js';
import { postsService } from '@/services/PostsService.js';

const account = computed(() => AppState.account)

const route = useRoute()

const listings = computed(() => AppState.listings)

const profile = computed(() => AppState.activeProfile)

onMounted(() => {
  getProfileById()
  // getListingsByProfileId()
})

watch(route, () => {
  getProfileById()
  // getListingsByProfileId()
})

async function getProfileById() {
  try {
    const profileId = route.params.profileId
    await profilesService.getProfileById(profileId)
  }
  catch (error) {
    Pop.meow(error);
    logger.log('getting profile by id', error)
  }
}

// async function getListingsByProfileId() {
//   try {
//     const profileId = route.params.profileId
//     await postsService.getListingsByProfileId(profileId)
//   }
//   catch (error) {
//     Pop.meow(error);
//     logger.log('getting listings by profile by id', error)
//   }


</script>

<template>
  <div class="container-fluid bg-grey">
    <div v-if="profile">
      <img :src="profile.coverImg" alt="">
      <div class="d-flex justify-content-between align-items-center">
        <div class="ps-5 ms-5">
          <img class="profile-img" :src="profile.picture" alt="" />
          <h3 class="text-primary text-capitalize pt-3"> {{ profile.name }}</h3>
          <p>{{ profile.email }}</p>
          <button class="btn btn-success fw-bold text-primary py-3 mb-5 rounded-4 outline me-4">+ FOLLOW</button>
          <button class="btn btn-success fw-bold text-primary py-3 mb-5 rounded-4 outline">CONTACT US</button>
        </div>
        <div class="card bg-green text-light p-3 pe-5 rounded-4 me-5 fw-bold">
          <a v-if="profile.facebook" class="pb-5 text-light" :href="profile.facebook">FACEBOOK</a>
          <a v-if="profile.linkedIn" class="pb-5 text-light" :href="profile.linkedIn">LINKEDIN</a>
          <a v-if="profile.website" class="text-light" :href="profile.website">COMPANY SITE</a>
        </div>
      </div>
    </div>
    <div v-else>
      <h1 class="text-light mt-5">Loading... <i class="mdi mdi-loading mdi-spin"></i></h1>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-8">
        <h3 class="text-success p-5 mt-5">Recent Posts</h3>
      </div>
      <div class="col-md-3">
        <h3 class="text-success p-5 mt-5">Reviews</h3>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.profile-img {
  border-radius: 50%;
  height: 150px;
  aspect-ratio: 1/1;
  object-fit: cover;
  object-position: center;
}

.bg-grey {
  background-color: #D9D9D9;
}

.bg-green {
  background-color: #194348;
}
</style>
