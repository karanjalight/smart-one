import { defineStore } from "pinia";
import { meterService } from "@/services/meterList";

export const useMeterStore = defineStore("auth", {
  state: () => ({
    meterdata: [],
  }),
  actions: {
    async getMeterData() {
      try {
        const response = await meterService.getMeterList();
        this.meterdata = response; // Store data in state
      } catch (error) {
        console.error("Error fetching meter data:", error);
      }
    },
  },
});
