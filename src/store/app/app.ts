import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { UserCredentials } from '@/types'

type AppStates = {
  userCredentials: UserCredentials | null
  isVisibleAppSpinner: boolean
}

type AppActions = {
  appClear: VoidFunction
  setIsVisibleAppSpinner: (newStatus: boolean) => void
  setUserCredentials: (userCredentials: UserCredentials | null) => void
}

type AppStore = AppStates & AppActions

const initialState: AppStates = {
  userCredentials: null,
  isVisibleAppSpinner: true,
}

export const useAppStore = create<AppStore>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,

        setIsVisibleAppSpinner: (newStatus) => set({ isVisibleAppSpinner: newStatus }),
        setUserCredentials: (userCredentials: UserCredentials | null) => set({ userCredentials }),

        appClear: () => set({ ...initialState }),
      }),
      {
        name: 'appStore',
      },
    ),
  ),
)

export const useAppState = () =>
  useAppStore((state) => ({
    userCredentials: state.userCredentials,
    isVisibleAppSpinner: state.isVisibleAppSpinner,
  }))

export const useAppActions = () =>
  useAppStore((state) => ({
    setIsVisibleAppSpinner: state.setIsVisibleAppSpinner,
    setUserCredentials: state.setUserCredentials,

    appClear: state.appClear,
  }))

export const getUserCredentials = () => useAppStore.getState().userCredentials
export const clearApp = () => useAppStore.getState().appClear
