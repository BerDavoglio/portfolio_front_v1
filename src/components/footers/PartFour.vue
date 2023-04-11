<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div>
    <div class="bg-white h-2 w-[85%] mx-auto my-3 rounded-md"></div>
    <div class="text-2xl font-bold">
      {{ $t('footer.four.title') }}
    </div>
    <div class="grid grid-cols-1 mx-6">
      <div className="cursor-pointer mt-2" @click="goToLinkedin">
        <v-icon name="co-linkedin-in"></v-icon> Linkedin
      </div>
      <div className="cursor-pointer mt-2" @click="goToGithub">
        <v-icon name="bi-github"></v-icon> GitHub
      </div>
      <div className="cursor-pointer mt-2" @click="goToInstagram">
        <v-icon name="bi-instagram"></v-icon> Instagram
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartFour',
  methods: {
    goToLinkedin() {
      window.open('https://www.linkedin.com/in/bernardo-davoglio-487649214/', '_blank');
    },
    goToGithub() {
      window.open('https://github.com/BerDavoglio', '_blank');
    },
    goToInstagram() {
      window.open('https://www.instagram.com/berdavoglio_/', '_blank');
    },
  },
};
</script>
