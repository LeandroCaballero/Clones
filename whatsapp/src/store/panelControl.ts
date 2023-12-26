import { create } from 'zustand'

interface leftPanelState {
  isOpen: boolean
  type: 'perfil' |'state'| 'communty' | 'channels' | 'newChat',
  changeLeftPanelState: (open: boolean, type?: 'perfil' |'state'| 'communty' | 'channels' | 'newChat') => void
}

interface rightPanelState {
    isOpen: boolean
    changeRightPanelState: (open: boolean) => void
  }

export const leftPanelControlStore = create<leftPanelState>()((set) => ({
    isOpen: false,
    type: 'state',
    changeLeftPanelState: (open, type) => set({isOpen: open, type: type}),
}))

export const rightPanelControlStore = create<rightPanelState>()((set) => ({
    isOpen: false,
    changeRightPanelState: (open) => set({isOpen: open}),
}))