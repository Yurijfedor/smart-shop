import { ProductsList } from "../ProductsList/ProductsList"
import { CategoryLinkItem, CategoryItemStyled } from "./CategoryItem.styled"

export const CategoryItem = ({ item }) => {
    
    return (
        <CategoryItemStyled>
            <CategoryLinkItem to={"/item"}>{item}</CategoryLinkItem>
            <ProductsList categoryName={item} />
        </CategoryItemStyled>
       
    )
}