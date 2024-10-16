import { resetters } from '.'

const initialModal = {
  modal: {
    swap: { isOpen: false },
    buy: { isOpen: false, token: {} },
    sell: { isOpen: false, token: {}, available: 0 }
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