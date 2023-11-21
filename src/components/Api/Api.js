import axios from "axios"
import { useEffect, useState } from "react"
import Products from "../Products/products"
import {Container,Row} from 'reactstrap'
import Cardview from "../Cardview/Cardview"
import img1 from"../../img/loa1.png"
import img2 from "../../img/loa2.webp"
import img3 from "../../img/loa3.webp"
import img4 from "../../img/loa4.webp"
import img5 from"../../img/loa5.png"
import img6 from"../../img/loa6.png"
import img7 from"../../img/loa7.png"
import img8 from"../../img/loa8.webp"
import img9 from"../../img/loa9.webp"
import img10 from"../../img/loa10.png"
import img11 from"../../img/loa11.png"

export default function Api() {
    const url = `https://6525460267cfb1e59ce6fe2b.mockapi.io/Student`
    const [data, setData] = useState([])
    const img = [
        img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11
    ]
    useEffect(() => {
        axios
            .get(url)
            .then(function (reponse) {
                console.log(reponse)
                setData(reponse.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])
    return (
        <div>
            <Container>
                <Row>
                    {data.map((item, index) => {
                        return (
                        <Cardview item={item} key={index} img={img[index]}/>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}