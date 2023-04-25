import "./item.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Item = ({itemData, getPost}) => {
    return (
        <div className="box-container">
            <LazyLoadImage onClick={() => getPost(itemData)} src={process.env.PUBLIC_URL + itemData.pic} className="img-fluid mw-100-100 mw-md-50 mw-lg-25 port-image" alt={itemData.alt}/>
        </div>
    )
}

export default Item;