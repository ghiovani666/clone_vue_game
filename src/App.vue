<template>
  <router-view class="view"></router-view>
</template>

<script>
export default {
  name: 'app',
  created() {
  },
  computed: {
    currentPage() {
      return this.$route.name.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
    },
    navigationLink() {
      return this.$router.options.routes.map(i => {
        return {
          title: i.name,
          url: i.path,
          child: i.child ? i.child : []
        }
      });
    }
  }
}
</script>

<style>
</style>
