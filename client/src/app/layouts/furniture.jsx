import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getArrayByName, getFurnitureByCategory } from "../store/furniture";
import CurrentCategory from "../components/ui/currentCategory";
import CurrentElem from "../components/ui/currentElem";
import Katalog from "../components/ui/katalog";
import { useSearchElem } from "../hooks/useSearchElem";
const Furniture = () => {
    const { currentCategory, currentElement } = useParams();
    const valueBedrooms = useSelector(getFurnitureByCategory("bedrooms"));
    const valueLivingRooms = useSelector(getFurnitureByCategory("livingRooms"));
    const valueCushionedFurniture = useSelector(
        getFurnitureByCategory("cushionedFurniture")
    );
    const { valueSearch } = useSearchElem();
    const valueSearchFurniture = useSelector(getArrayByName(valueSearch));
    const chooseCategory = () => {
        if (currentCategory === "bedrooms") {
            return valueBedrooms;
        } else if (currentCategory === "livingRooms") {
            return valueLivingRooms;
        } else if (currentCategory === "cushionedFurniture") {
            return valueCushionedFurniture;
        } else if (currentCategory === "search") {
            return valueSearchFurniture;
        }
    };
    return (
        <>
            {currentElement ? (
                <CurrentElem />
            ) : currentCategory ? (
                <CurrentCategory value={chooseCategory()} />
            ) : (
                <Katalog />
            )}
        </>
    );
};

export default Furniture;
