import { Link } from 'react-router-dom'
import { Product } from '../../graphql/products'

const ProductItem = ( {
    id, imageUrl, price, title, description, createdAt
}: Product) => {
    return (
        <li className="product-item">
            <Link to={`/products/${id}`}>
                <p className="product-item__title">{title}</p>
                <img className="product-item__image" src={imageUrl} />
                <p className="product-item__description">{description}</p>
                <span className="product-item__price">${price}</span>
            </Link>
        </li>
    )
}

export default ProductItem