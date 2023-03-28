<template>
  <div>
    <div className="grid grid-cols-2 py-4">
      <div>
        <p className="text-2xl">Bernardo Davoglio</p>
        <p className="">Programador</p>
      </div>
      <div className="grid grid-cols-4 m-auto">
        <div className="w-24">Home</div>
        <div className="w-24">About</div>
        <div className="w-24">Portfolio</div>
        <div className="w-24">Contact</div>
      </div>
    </div>
    <div className="w-[95%] h-0.5 bg-black m-auto"></div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  components: {
  },
};
</script>
