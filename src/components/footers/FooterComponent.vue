<template>
  <div>
    <div class="bg-black w-full h-[24rem] pt-10 grid grid-cols-4 text-white mt-8">
      <part-one></part-one>
      <part-two></part-two>
      <part-three></part-three>
      <part-four></part-four>
    </div>
  </div>
  <div class="bg-black w-full h-12 text-white">
    <div>© Todos os direitos reservados, Bernardo Davoglio, 2022.</div>
  </div>
</template>

<script>
import PartOne from './PartOne.vue';
import PartTwo from './PartTwo.vue';
import PartThree from './PartThree.vue';
import PartFour from './PartFour.vue';

export default {
  name: 'FooterComponent',
  components: {
    PartOne,
    PartTwo,
    PartThree,
    PartFour,
  },
};
</script>
