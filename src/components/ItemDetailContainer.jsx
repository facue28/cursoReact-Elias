import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import {getDoc, getFirestore, doc} from "firebase/firestore"
import LoadingScreen from "./LoadingScreen";
        
const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
        
    useEffect(() => {
        const db = getFirestore();
        const producto = doc(db, "productos", id)
        getDoc(producto).then(resp => {
            setLoading(false)
            setItem({id:resp.id, ...resp.data()});
        })
    },[id]);
        
    return (
        <>
            {loading ? <LoadingScreen/> : <ItemDetail item={item}/>}
        </>
    )
}
export default ItemDetailContainer;

