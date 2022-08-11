import create from "zustand";

interface IUser {
  isAuth: boolean;
  setIsAuth: (value: boolean) => void;
}

export const useUser = create<IUser>((set) => ({
  isAuth: false,
  setIsAuth: (value: boolean) =>
    set({
      isAuth: value,
    }),
}));
