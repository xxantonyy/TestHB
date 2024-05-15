import { memo } from 'react';
import cls from './CartItem.module.scss';
import { classNames } from '@/shared/classNames/classNames';
import { CartItem as CartItemType } from '@/store/reducers/userCart/types';
import Garbage from '@/assets/icons8-мусорка.svg';
import { UserCartActionCreator } from '@/store/reducers/userCart/action-creators';
import { useTypedDispatch } from '@/hooks/useTypedDispatch';
import { deleteProduct } from '@/store/reducers/userCart/services/deleteProduct/deleteProduct';
import { quantityIncrease } from '@/store/reducers/userCart/services/quantityIncrease/quantityIncrease';
import { userCartActions } from '@/store/reducers/userCart';
import { quantityDecrease } from '@/store/reducers/userCart/services/quantityDecrease/quantityDecrease';

interface CartItemProps {
    item: CartItemType;
}

export const CartItem = memo((props: CartItemProps) => {
    const {
        item: {
            Id, Name, Images, Price, Quantity, Unit, Сurrency,
        },
    } = props;

    const dispatch = useTypedDispatch();
    const UserGuid = UserCartActionCreator.GetShoppingCartHeaderUsedGuid();

    const handleDeleteProduct = () => {
        dispatch(deleteProduct({ id: Id, UserGuid }));
        dispatch(userCartActions.deleteCartItem({ id: Id }));
    };
    const handleQuantityIncrease = () => {
        dispatch(quantityIncrease({ id: Id, UserGuid }));
        dispatch(userCartActions.increaseCartItem({ id: Id }));
    };
    const handleQuantityDecrease = () => {
        dispatch(quantityDecrease({ id: Id, UserGuid }));
        dispatch(userCartActions.decreaseCartItem({ id: Id }));
    };

    return (
        <div className={classNames(cls.CartItem, {}, [])}>
            <div className={cls.CartItemHeader}>
                <img
                    className={cls.HeaderLogo}
                    height={30} width={30} src={`data:image/png;base64,${Images[0].Image}`}
                    alt={Images[0].FileName}
                />
                <div>{Name}</div>
            </div>
            <div className={cls.CartItemPriceBlock}>
                <div className={cls.price}>{Price}</div>
                <div className={cls.Сurrency}>{Сurrency}</div>
                {' '}

                <div className={cls.Quantity}>
                    <span onClick={handleQuantityDecrease} className={cls.Decrease}>{'<'}</span>
                    <p>{Quantity}</p>
                    <span onClick={handleQuantityIncrease} className={cls.increase}>{'>'}</span>
                </div>

                {' '}
                {Unit}
                {' '}
                <div>
                    <Garbage
                        onClick={handleDeleteProduct}
                        className={cls.GarbagePic}
                    />
                </div>
            </div>
        </div>
    );
});
