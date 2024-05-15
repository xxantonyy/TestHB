import { useEffect } from 'react';
import { useTypedDispatch } from '@/hooks/useTypedDispatch';
import { classNames } from '@/shared/classNames/classNames';
import { UserCartActionCreator } from '@/store/reducers/userCart/action-creators';
import { clearBasked } from '@/store/reducers/userCart/services/clearBasked/clearBasked';
import { getBaskedSummary } from '@/store/reducers/userCart/services/getBaskedSummary/getBaskedSummary';
import cls from './CartFinal.module.scss';

interface CartFinalProps {
    className?: string;
}

export const CartFinal = (props: CartFinalProps) => {
    const { className } = props;

    const dispatch = useTypedDispatch();
    const BaskedSummary = UserCartActionCreator.GetBaskedSummary();
    const BaskedLoading = UserCartActionCreator.GetBaskedLoading();

    const handleClearBasked = () => {
        if (BaskedSummary.TotalProducts === 0) return;
        dispatch(clearBasked());
        alert('Корзина очищена');
    };

    const handleConfirmOrder = () => {
        if (BaskedSummary.TotalProducts === 0) return;
        alert(`Заказ оформлен на сумму: ${BaskedSummary.Total} RUB`);
    };

    useEffect(() => {
        dispatch(getBaskedSummary());
    }, [dispatch]);

    return (
        <div className={classNames(cls.CartFinal, {}, [className])}>
            <div>
                <h2>Корзина</h2>
                <div className={cls.BaskedSummary}>
                    {!BaskedLoading && BaskedSummary && (
                        <div>Товаров: {BaskedSummary.TotalProducts} Шт.</div>
                    )}
                    {!BaskedLoading && BaskedSummary && (
                        <div>Общая стоимость: {BaskedSummary.Total} RUB</div>
                    )}
                    {}
                </div>
            </div>
            <div className={cls.buttons}>
                <button
                    onClick={handleClearBasked}
                    className={cls.button}
                    type="button"
                >
                    Очистить корзину
                </button>
                <button
                    onClick={handleConfirmOrder}
                    className={cls.button}
                    type="button"
                >
                    Оформить заказ
                </button>
            </div>
        </div>
    );
};
