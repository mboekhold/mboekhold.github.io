<template>
  <div>
    <div class="p-2 lg:px-32 flex flex-col-reverse lg:flex-row text-white mt-10">
      <div class="w-full mb-10 md:mb-0">
        <img src="@/assets/game_screenshot.png" alt="Game Screenshot" />
      </div>
      <div class="lg:ml-10 w-full p-6 lg:p-10 mb-20">
        <div class="font-bold text-5xl md:text-6xl text-center">
          Play Dominoes Online
        </div>
        <div class="mt-5 text-center">
          Be part of the largest growing Dominoes community. Compete in tournaments and climb to the top of the
          leaderboard.
        </div>
        <div class="mt-10 w-full mx-auto md:w-1/2 lg:w-full">
          <button disabled class="cursor-not-allowed block text-center bg-blue-600 text-gray-300 p-4 rounded-lg h-16 w-full text-xl font-bold">
            Play Online (Coming soon)
          </button>
          <button @click="playComputer()" class="block text-center bg-white hover:bg-gray-100 text-black p-4 rounded-lg h-16 w-full text-xl mt-5 font-bold">
            Play Computer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    playComputer() {
      this.$router.push({ name: 'computer' });
    }
  }
}
</script>