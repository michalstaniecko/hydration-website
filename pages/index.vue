<template>
  <div>
    <div class="py-10">
      <NuxtImg :src="'/icon.png'" class="mx-auto size-[240px] h-auto" />
    </div>
    <div class="px-5 text-2xl md:text-4xl  text-center">
      Welcome to the Tracking Water Hydration!
    </div>
    <div class="text-center p-5">
      <RouterLink to="/privacy-policy" class="text-blue-700 hover:text-blue-900 hover:underline hover:underline-offset-2">Privacy Policy</RouterLink>
    </div>
  </div>
</template>
