<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable max-len -->
<template>
  <div className="h-[14rem] max-w-[60rem] grid grid-cols-4 gap-4 m-auto my-2 p-[1rem] cursor-pointer rounded-xl"
    style="background: linear-gradient(124.09deg, #D157F2 1.58%, #56308C 20.51%,#5D60A6 77.34%, #1F1640 84%);"
    @click="goPage('portfolio', this.index + 1)">
    <img :src=this.obj.image[0] alt=""
      className="object-cover h-48 w-max m-auto">
    <div className="col-span-3">
      <div className="text-white text-lg font-semibold">{{ $t(this.obj.title) }}</div>
      <div className="h-0.5 max-w-[65rem] m-auto bg-gray-300 my-2"></div>
      <div className="text-white text-justify overflow-y-scroll scrollbar px-2 h-28">{{ $t(this.obj.subtitle) }}</div>
      <div className="mt-3 text-gray-300">{{ $t('portfolio.readMore') }}</div>
    </div>
  </div>
  <div className="h-0.5 max-w-[65rem] m-auto bg-gray-300 mb-2"></div>
</template>

<script>
export default {
  name: 'PortfolioBlockComponent',
  props: [
    'obj',
    'index',
  ],
  methods: {
    goPage(route, params) {
      this.$router.push({ name: route, params: { id: params } });
    },
  },
};
</script>
