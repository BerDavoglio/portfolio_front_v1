<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="about">
    <div :className=classeFoto>
      <div v-if="haveFoto" className="
                bg-ber bg-cover bg-center bg-no-repeat
                h-[85%] w-[60%]
                my-10 mx-auto
                rounded-3xl
                ring ring-pink-500 ring-offset-4 ring-offset-cyan-500">
      </div>
      <div>
        <p className="
                  text-white text-justify
                  w-[60%] max-h-[32rem]
                  rounded-md
                  mt-10 mx-auto p-4
                  bg-gray-900/75
                  overflow-y-scroll scrollbar">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet, justo eget pretium volutpat, dolor
          erat congue quam, sit amet sollicitudin lacus mi id neque. Nam eu auctor purus, sed ornare ex. Aliquam sagittis
          dignissim sem vitae tincidunt. Quisque sollicitudin ultrices augue, sit amet elementum ligula sodales quis.
          Nulla vestibulum suscipit aliquam. Morbi eget sollicitudin odio. Praesent commodo eros lorem. In id posuere
          dolor. Duis posuere pulvinar risus, non finibus erat. Integer luctus dictum massa, at dapibus arcu tincidunt at.
          Vivamus cursus placerat molestie. Suspendisse accumsan pellentesque nunc id scelerisque. Proin vitae mollis
          ligula.

          Ut lobortis dui ornare semper scelerisque. Sed sed turpis dapibus, scelerisque ex ut, suscipit enim. Phasellus
          viverra sollicitudin lorem sit amet placerat. Donec volutpat vitae nibh sit amet faucibus. Etiam porttitor
          lobortis purus, quis tempus sapien pellentesque ac. Vestibulum eget ligula non quam ornare semper et in nunc.
          Fusce viverra dapibus quam nec fringilla. Pellentesque id iaculis massa. Nunc nisl massa, volutpat sit amet eros
          finibus, aliquet scelerisque lorem. Etiam ac magna velit. Vivamus efficitur pretium accumsan. Phasellus a enim
          tempor, venenatis ex ut, viverra lacus. Integer ullamcorper enim sed felis varius, sed posuere nulla fermentum.
          Curabitur ac quam mattis, ultrices libero ut, vestibulum leo.

          Fusce at nisi libero. Integer condimentum ullamcorper elementum. Mauris diam tortor, malesuada tristique sapien
          in, malesuada tincidunt massa. Mauris placerat dictum tortor, et aliquam ligula porttitor non. Vivamus vitae
          feugiat enim. Donec id fermentum tellus. Donec nec mauris commodo, condimentum nisi quis, aliquam felis.
          Praesent eget mauris sit amet enim elementum ornare vitae vel metus. Aliquam ullamcorper, ipsum ut varius
          bibendum, ipsum ante mattis nisi, dignissim laoreet ex sem non libero. Vestibulum arcu leo, imperdiet semper
          ipsum sit amet, fermentum euismod quam.

          Nullam orci odio, volutpat in sagittis ac, sagittis id augue. Maecenas dui felis, eleifend eu ornare eget,
          fringilla id leo. Sed aliquam ante at eros interdum commodo. Phasellus a arcu consequat, aliquet velit quis,
          egestas neque. Pellentesque tincidunt mauris ut ante euismod, at sodales sapien tincidunt. Sed commodo leo eget
          efficitur euismod. Nunc molestie quam lorem, at scelerisque metus rhoncus et. Vivamus risus dolor, malesuada ac
          libero sit amet, suscipit eleifend nisi.

          Praesent finibus suscipit tincidunt. Integer dictum ut sapien sit amet maximus. Suspendisse et eros mauris.
          Phasellus commodo porttitor turpis, laoreet sagittis augue congue vestibulum. Sed lectus ante, sollicitudin a
          justo ac, posuere interdum metus. Praesent ultricies nisi eget ex vulputate, ut rutrum ipsum lacinia. Proin
          laoreet commodo orci id dignissim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Etiam vitae blandit nulla. Aenean eu orci non urna accumsan pellentesque in at erat. Nulla et
          mauris quis neque consequat finibus. In eu accumsan elit. Vestibulum id luctus arcu. Cras mollis sed sem ac
          auctor. Suspendisse bibendum vehicula diam, sit amet venenatis purus fringilla ac. Sed placerat libero non felis
          facilisis sodales.
        </p>
        <div className="ml-[20%]
                  w-32 bg-red-700 text-white p-2 mt-4 rounded-md hover:bg-red-800
                  active:bg-red-900 cursor-pointer" @click="goAbout">Read More</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutComponent',
  components: {},
  data() {
    return {
      windowWidth: window.innerWidth,
      haveFoto: true,
      classeFoto: 'grid grid-cols-2 bg-js_bg bg-center bg-gray-500 bg-no-repeat w-full h-[42rem]',
    };
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    goAbout() {
      this.$router.push({ name: 'about' });
    },
  },
  watch: {
    windowWidth(newWidth) {
      if (newWidth < 768) {
        this.haveFoto = false;
        this.classeFoto = 'grid grid-cols-1 bg-js_bg bg-center bg-gray-500 bg-no-repeat w-full h-[42rem]';
      } else {
        this.haveFoto = true;
        this.classeFoto = 'grid grid-cols-2 bg-js_bg bg-center bg-gray-500 bg-no-repeat w-full h-[42rem]';
      }
    },
  },
  beforeMount() {
    if (window.innerWidth < 768) {
      this.haveFoto = false;
      this.classeFoto = 'grid grid-cols-1 bg-js_bg bg-center bg-gray-500 bg-no-repeat w-full h-[42rem]';
    } else {
      this.haveFoto = true;
      this.classeFoto = 'grid grid-cols-2 bg-js_bg bg-center bg-gray-500 bg-no-repeat w-full h-[42rem]';
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    });
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize);
  },
};
</script>

<style>
.scrollbar::-webkit-scrollbar {
  width: 5px;
  height: 20px;
}

.scrollbar::-webkit-scrollbar-track {
  border-radius: 100vh;
}

.scrollbar::-webkit-scrollbar-thumb {
  background: #e0cbcb;
  border-radius: 100vh;
  border: 3px solid #f6f7ed;
}

.scrollbar::-webkit-scrollbar-thumb:hover {
  background: #c0a0b9;
}
</style>
