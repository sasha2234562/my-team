import {RootState} from "../hook";

export const teamSelector = (state: RootState) => state.team;
export const currentPageSelector = (state: RootState) => state.team.currentPage;
export const preloaderSelector = (state: RootState) => state.team.preloader;