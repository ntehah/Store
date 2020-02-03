import React from 'react';
import ListProduct from "./ListOfProduct";
import image from "../pc.png";


const ListOfpro = [
    {
        id: 1,
        prix: "300000 MRU",
        title: "فورد موستانگ",
        img: { image },
        location: "NKC",
    },
    {
        id: 2,
        prix: "300000 MRU",
        title: "فورد موستانگ",
        img: { image },
        location: "NKC",
    },
    {
        id: 3,
        prix: "300000 MRU",
        title: "فورد موستانگ",
        img: { image },
        location: "NKC",
    }
];


function Data() {
    return (
        <div className="App" >
            <ListProduct color="#ffc272" NameList={"سيارات"} List={ListOfpro} />
        </div>
    );
}

export default Data;