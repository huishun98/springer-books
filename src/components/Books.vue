<script>
import json from "../json/Free+English+textbooks+with+download_url.json";

export default {
  name: "HelloWorld",
  data() {
    return {
      publicPath: process.env.BASE_URL,
      json: json,
      selected: []
    };
  },
  methods: {
    select(i) {
      this.selected.includes(i)
        ? this.selected.splice(this.selected.indexOf(i), 1)
        : this.selected.push(i);
    },
    openItems() {
      let data_list = [];
      for (let i = 0; i < this.selected.length; i++) {
        const data = this.json[this.selected[i]]
        const downloadUrl = data["Download URL"];
        window.open(downloadUrl)
      }
    }
  }
};
</script>

<style scoped src="./books.css"></style>
<template src="./books.html"></template>

