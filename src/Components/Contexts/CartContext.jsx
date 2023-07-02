import {useState, createContext, useEffect} from 'react'

//create context using hook
export const CartContext = createContext()

export default function CartContextProvider(props){
    //create global state here
    const [cart, setCart] = useState([])

// The useEffect below is used for the local storage

    useEffect(
        ()=>{
            //is there a value in localStorage
            const storedCartProducts = localStorage.getItem('shoppingList')

            //only use if there was a value
            if (storedCartProducts){
                //use this to initialize
                setCart(JSON.parse(storedCartProducts))
            }

        }, [] //runs once when component loads
    ) 

    useEffect(
        ()=>{
            //save new value to localStorage
            localStorage.setItem('shoppingList', JSON.stringify(cart))

        }, [cart] //runs anytime cart changes
    ) 


    const addProduct = (ItemToAdd) =>{
        console.log('adding', ItemToAdd)
        //add ItemToAdd to shopping cart
        let newCart = [...cart, ItemToAdd ]
        console.log(newCart)
        // //replace state
        setCart(newCart)
    }

    const removeProduct = (productId) =>{
        console.log('remove', productId)
        //remove productId
        //keep all the ones that are NOT productId
        let newCart = cart.filter(item => item.id != productId)
        //replace state
        setCart(newCart)
    }

    const clearCart = () => {
        setCart([]);
    }

    return(
        <CartContext.Provider value={{cart, addProduct, removeProduct, clearCart}}>
            {props.children}
        </CartContext.Provider>
    )
}