import "./item.css";

const Item = ({itemData, getPost}) => {
    return (
        <img onClick={() => getPost(itemData)} src={itemData.pic} loading="lazy" className="img-fluid mw-100-100 mw-md-50 mw-lg-25 port-image" alt={itemData.alt}></img>
    )
}

export default Item;