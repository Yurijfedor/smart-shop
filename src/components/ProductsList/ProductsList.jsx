import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectProducts } from "../../redux/products/selector"
import { fetchProductsByCategory } from "../../redux/products/operation"
import { ProductItem } from "../ProductItem/ProductItem"


export const ProductsList = ({categoryName}) => {
    const products = useSelector(selectProducts)
    const dispatch = useDispatch()

    useEffect(() => {
    dispatch(fetchProductsByCategory(categoryName));
  }, [dispatch, categoryName]);


    return (
        products.map(product => {
            return <ProductItem key={product.id} item={ product} />
        })
    )
}