<script>
import json from "../json/Free+English+textbooks+with+download_url.json";

export default {
  name: "Books",
  data() {
    return {
      publicPath: process.env.BASE_URL,
      json: json,
      selected: [],
      show: [],
      searchString: null,
      dropDown: false,
      filterString: "",
      filterStringFixed: "",
      filteredList: [],
      searchedList: [],
      modalOpen: false
    };
  },
  mounted() {
    this.filterList("");
    this.searchList("");
  },
  watch: {
    modalOpen: function() {
      if (this.modalOpen) {
        document.documentElement.style.overflow = "hidden";
        return;
      }
      document.documentElement.style.overflow = "auto";
    }
  },
  computed: {
    disableSelectAll() {
      return (
        this.show.filter(item => this.selected.indexOf(item) < 0).length <= 0
      );
    },
    selectedTitles() {
      return Object.keys(this.json)
        .filter(key => this.selected.includes(key))
        .reduce((arr, key) => {
          arr.push({ title: this.json[key]["Book Title"], index: key });
          return arr;
        }, []);
    },
    classificationsFilteredList() {
      return this.classifications.filter(classification => {
        return classification
          .toLowerCase()
          .includes(this.filterString.toLowerCase());
      });
    },
    classifications() {
      const array = Object.values(json);
      let classifications = [];
      for (let i = 0; i < array.length; i++) {
        const classification = array[i]["Subject Classification"].split("; ");
        classifications = [...new Set([...classifications, ...classification])];
      }
      return classifications.sort();
    },
    search: {
      get() {
        return this.searchString;
      },
      set(newVal) {
        this.searchString = newVal;
        this.searchList(newVal);
      }
    },
    filter: {
      get() {
        return this.filterString;
      },
      set(newVal) {
        if (newVal.length <= 0) {
          this.filterList("");
        }
        this.filterString = newVal;
      }
    }
  },
  methods: {
    deselect(i) {
      this.selected = this.selected.filter(index => index !== i);
    },
    calculateResult() {
      this.show = this.searchedList.filter(element =>
        this.filteredList.includes(element)
      );
    },
    filterList(rawClassification) {
      let classification = rawClassification;
      if (classification == this.filterString) {
        classification = "";
      }
      this.filterString = classification;
      this.filterStringFixed = classification;
      const filtered = Object.keys(this.json).filter(key => {
        return this.json[key]["Subject Classification"].includes(
          classification
        );
      });
      this.filteredList = filtered;
      this.calculateResult();
    },
    searchList(searchString) {
      const filtered = Object.keys(this.json).filter(key => {
        return this.json[key]["Book Title"]
          .toLowerCase()
          .includes(searchString.toLowerCase());
      });
      this.searchedList = filtered;
      this.calculateResult();
    },
    selectAll() {
      this.selected = this.selected.concat(
        this.show.filter(item => this.selected.indexOf(item) < 0)
      );
    },
    deselectAll() {
      this.selected = [];
    },
    select(i) {
      this.selected.includes(i)
        ? this.selected.splice(this.selected.indexOf(i), 1)
        : this.selected.push(i);
    },
    openItems() {
      let data_list = [];
      for (let i = 0; i < this.selected.length; i++) {
        const data = this.json[this.selected[i]];
        const downloadUrl = data["Download URL"];
        window.open(downloadUrl);
      }
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style scoped src="./books.css"></style>
<template src="./books.html"></template>

