<template>
  <div>
    <div class="bg-white h-2 w-[85%] mx-auto my-3 rounded-md"></div>
    <div class="text-2xl font-bold mb-3">
      {{ $t('footer.three.title') }}
    </div>
    <div class="text-sm">
      <strong>
        {{ $t('footer.three.address') }}:
      </strong></div>
    <div class="bg-white h-[1px] w-[80%] mx-auto my-3 rounded-md"></div>
    <div class="text-sm">
      <strong>{{ $t('footer.three.cellphone') }}: </strong>+55 41 9 8477-6477
    </div>
    <div class="bg-white h-[1px] w-[80%] mx-auto my-3 rounded-md"></div>
    <div class="text-sm"><strong>E-mail: </strong>berdavoglio@gmail.com</div>
  </div>
</template>

<script>
export default {
  name: 'PartThree',
};
</script>
