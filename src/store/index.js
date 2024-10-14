import { create } from 'zustand'
import { createModalSlice } from './modal.slice'

export const resetters = []

export const useBoundStore = create((...a) => ({
  ...createModalSlice(...a),
  resetAllSlices: () => resetters.forEach(resetter => resetter()),
}))