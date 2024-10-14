import { resetters } from '.'

const initialModal = {
  modal: {
    swap: { isOpen: false },
  },
}

export const createModalSlice = (set) => {
  resetters.push(() => set(initialModal))

  return {
    ...initialModal,
    setModalState: (modal) => {
      set((state) => ({
        modal: { ...state.modal, ...modal },
      }))
    },
    resetModal: () => {
      set({ ...initialModal })
    },
  }
}