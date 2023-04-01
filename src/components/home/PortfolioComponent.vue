<template>
  <div class="portfolio">
    <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events -->
    <div className="teste py-12 px-4 text-2xl text-white cursor-pointer"
    @click="goPage('portfolio')">
      About my Portfolio? Click here and discover more about me!
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioComponent',
  components: {
  },
  methods: {
    goPage(route) {
      this.$router.push({ name: route });
    },
  },
};
</script>

<style scoped>
div.teste {
  background: linear-gradient(124.09deg,
      #D157F2 1.58%, #56308C 20.51%,
      #5D60A6 77.34%, #1F1640 115.83%);
}

div.teste:hover {
  background: linear-gradient(124.09deg,
      #A042BA 1.58%, #381F5B 20.51%,
      #33355B 77.34%, #0D091A 115.83%);
}
</style>
