import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export default create(
  subscribeWithSelector((set: any) => {
    return {
      blocksCount: 3,

      phase: "ready",

      start: () => {
        set((state: any) => {
          if (state.phase === "playing" || state.phase === "ended")
            return { phase: "ready" };

          return {};
        });
      },

      restart: () => {
        set(() => {
          return { phase: "ready" };
        });
      },

      end: () => {
        set((state: any) => {
          if (state.phase === "playing") return { phase: "ended" };

          return {};
        });
      },
    };
  })
);
