<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div>
    <div className="grid grid-cols-2 py-4">
      <div>
        <p className="text-2xl">Bernardo Davoglio</p>
        <p className="">Programador</p>
      </div>
      <div className="grid grid-cols-4 m-auto h-12 cursor-pointer">
        <div className="
            w-24
            border-r-2
            hover:bg-gray-300
            active:bg-gray-400
            active:text-white
            py-4
            border-l-2"
            @click="goHome">
          Home
        </div>
        <div className="
            w-24
            border-r-2
            hover:bg-gray-300
            active:bg-gray-400
            active:text-white
            py-4"
            @click="goAbout">
          About
        </div>
        <div className="
            w-24
            border-r-2
            hover:bg-gray-300
            active:bg-gray-400
            active:text-white
            py-4"
            @click="goPort">
          Portfolio
        </div>
        <div className="
            w-24
            border-r-2
            hover:bg-gray-300
            active:bg-gray-400
            active:text-white
            py-4"
            @click="goCont">
          Contact
        </div>
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
  methods: {
    goHome() {
      this.$router.push({ name: 'home' });
    },
    goAbout() {
      this.$router.push({ name: 'about' });
    },
    goPort() {
      this.$router.push({ name: 'portfolio' });
    },
    goCont() {
      this.$router.push({ name: 'contact' });
    },
  },
};
</script>
