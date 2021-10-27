import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";


function Notes(props) {
    const [getDeliveryNotes, setGetDeliveryNotes]= useState({
        notes:'',
        // product_id: props.productId
    })
    const params = useParams();


    useEffect(()=>{
        fetchNotes();
       
  }, []);
    

    async function fetchNotes () {
    axios
        .get(`http://127.0.0.1:8000/api/store/delivery/${params.id}/`)
          .then((res) => {
        setGetDeliveryNotes(res.data);
      })
      .catch((err) => console.log(err));

        
    }

    return (
        <div>
           <p>Notes: {getDeliveryNotes.notes} </p>
        </div>
    )
}

export default Notes