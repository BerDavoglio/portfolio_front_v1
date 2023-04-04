<!-- eslint-disable max-len -->
<template>
  <div className="h-[14rem] max-w-[60rem] grid grid-cols-4 gap-4 m-auto mt-2 p-[1rem] cursor-pointer rounded-xl"
    style="background: linear-gradient(124.09deg, #D157F2 1.58%, #56308C 20.51%,#5D60A6 77.34%, #1F1640 84%);">
    <img :src="['http://drive.google.com/uc?export=view&id=' + this.obj.image[0]]" alt=""
      className="object-cover h-48 w-max m-auto">
    <div className="col-span-3">
      <div className="text-white text-lg font-semibold">{{ $t(this.obj.title) }}</div>
      <div className="h-0.5 max-w-[65rem] m-auto bg-gray-300 my-2"></div>
      <div className="text-white text-justify overflow-y-scroll scrollbar px-2 h-28">{{ $t(this.obj.subtitle) }}</div>
      <div className="mt-3 text-gray-300">{{ $t('portfolio.readMore') }}</div>
    </div>
  </div>
  <div className="h-0.5 max-w-[65rem] m-auto bg-gray-300 my-2"></div>
</template>

<script>
export default {
  name: 'PortfolioBlockComponent',
  props: [
    'obj',
  ],
};
</script>
