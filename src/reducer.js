export function reducer(state, {type, payload}){
    switch(type){
        case 'CLOSE_ALERT':
            return{
                ...state,
                alertName: ''
            }
        case 'REMOVE_FROM_BASKET':
            return{
                ...state,
                order: state.order.filter((el) => el.mainId !== payload.id)
        }
        case 'PLUS_PRODUCT':
            return{
                ...state,
                order: state.order.map((el) => {
                    if (el.mainId === payload.id) {
                        const newQuantity = el.quantity + 1;
                        return {
                            ...el,
                            quantity: newQuantity,
                        };
                    } else {
                        return el;
                    }
                }),
            }
        case 'MINUS_PRODUCT':
            return{
                ...state,
                order: state.order.map((el) => {
                    if (el.mainId === payload.id) {
                        const newQuantity = el.quantity - 1;
        
                        if (newQuantity <= 0) {
                            
                            return el;
                        } else {
                            return {
                                ...el,
                                quantity: newQuantity,
                            };
                        }
                    }
                    return el;
                })
            }
        case 'TOOGLE_BASKET':
            return{
                ...state,
                isBasketShow: !state.isBasketShow
            }
        case 'ADD_PRODUCT':{
            const itemIndex = state.order.findIndex(
                (orderItem) => orderItem.mainId === payload.mainId
            );
            
            let newOrder = null
            if (itemIndex < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1,
                };
                newOrder = [...state.order, newItem]
            } else {
                const currentOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        };
                    } else {
                        return orderItem;
                    }
                });
            }

            return {
                ...state,
                order: newOrder,
                alertName: payload.name
            }
        }
        case 'SET_GOODS':
            return{
                ...state,
                goods: payload || [],
                loading: false,
            }
        default: 
            return state
    }
}