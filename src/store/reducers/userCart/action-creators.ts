import { useTypedSelector } from '@/hooks/useTypedSelector';
import { RootState } from '@/store';

export const UserCartActionCreator = {
    GetShoppingCartHeaderUsedGuid: () => useTypedSelector((state: RootState) => state.userCart.UserGuid),
    GetShoppingCartHeaderLogoImg: () => useTypedSelector((state: RootState) => state.userCart.LogoImg),
    GetShoppingCartHeaderUserName: () => useTypedSelector((state: RootState) => state.userCart.UseName),
    GetShoppingCartItems: () => useTypedSelector((state: RootState) => state.userCart.CartItems),
    GetBaskedSummary: () => useTypedSelector((state: RootState) => state.userCart.BaskedSummary),
    GetBaskedLoading: () => useTypedSelector((state: RootState) => state.userCart.loadingBaskedSumary),
    GetStatus: () => useTypedSelector((state: RootState) => state.userCart.status),
};
