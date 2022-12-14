import { Product } from '../../graphql/products'

const ProductDetail = ({
    item : {
        title,
        description,
        imageUrl,
        price,
    },
}:{item:Product}) => (
    <li className="product-detail">
        <p className="product-detail__title">{title}</p>
        <p className="product-detail__description">{description}</p>
        <img className="product-detail__image" src={imageUrl} />
        <span className="product-detail__price">${price}</span>
    </li>
)

export default ProductDetail