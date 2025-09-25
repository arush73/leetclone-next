import { axiosInstance } from "@/lib/axios";
import { create } from "zustand";
import { toast } from "sonner";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const useProblemStore = create((set) => ({
  isCodeRunning: false,
  isCodeSubmitting: false,
  problem: null,

  runCode: async (data) => {
    set({ isCodeRunning: true });
    await sleep(3000);
    try {
      const response = await axiosInstance.post(
        `/problem/execute/${data.problemId}`,
        data
      );
    } catch (error) {
      console.log("Error running the code: ", error.message);
    } finally {
      set({ isCodeRunning: false });
    }
  },

  submitCode: async (data) => {
    set({ isCodeSubmitting: true });
    await sleep(3000);
    set({ isCodeSubmitting: false });
  },

  getProblemDetails: async (problemId) => {
    try {
      const response = await axiosInstance.get(`/problem/${problemId}`);
      console.log("problem fetched successfully: ", response.data);
      set({ problem: response.data });
    } catch (error) {
      console.log("Error in fetching the problem: ", error.message);
      toast("error fetching the problem");
    } finally {
    }
  },
}));
