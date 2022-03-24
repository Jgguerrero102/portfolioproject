export default function MenuItem({ itemName, itemPrice, itemId, itemDescription }) {
    return (
        <div className="menu-item" id={`menu-item-${itemId}`}>
            <span>${itemPrice}</span>
            <h2>{itemName}</h2>
            <p>{itemDescription}</p>
            <button>Add to Cart</button>
        </div>
    );
}