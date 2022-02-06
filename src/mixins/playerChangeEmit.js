export const playerChangeEmit = {
  methods: {
    playerChangeEmit(to) {
      this.$emit("setting-replace", to);
    },
  },
};
