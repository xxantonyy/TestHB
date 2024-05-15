import { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { classNames } from '@/shared/classNames/classNames';
import cls from './Cart.module.scss';
import { useTypedDispatch } from '@/hooks/useTypedDispatch';
import { UserCartActionCreator } from '@/store/reducers/userCart/action-creators';
import { getShoppingCardProducts } from '@/store/reducers/userCart/services/shoppingCardProducts/shoppingCardProducts';
import { CartItem } from './ui/CartItem/CartItem';
import { CartFinal } from './ui/CartFinal/CartFinal';

const Cart = memo(() => {
    const dispatch = useTypedDispatch();
    const CartItems = UserCartActionCreator.GetShoppingCartItems();

    useEffect(() => {
        dispatch(getShoppingCardProducts());
    }, [dispatch]);

    return (
        <>
            <Helmet>
                <title>Cart</title>
            </Helmet>
            <div className={classNames(cls.Cart, {}, [])}>
                <div className={cls.cartWrapper}>
                    <div className={cls.products}>
                        {CartItems.length
                            ? CartItems.map((item) => <CartItem key={item.Id} item={item} />)
                            : <div>Корзина пуста</div>}
                    </div>
                    <div className={cls.cartFinal}>
                        <CartFinal />
                    </div>
                </div>
            </div>
        </>
    );
});

export default Cart;
