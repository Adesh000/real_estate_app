import React from "react";
import { IoHeartCircleOutline } from "react-icons/io5";
import {FaBed, FaBath} from "react-icons/fa";
import {FcAreaChart} from "react-icons/fc";

const Cards = (props) => {
    return (
        <>
            <div className="grid grid-cols-3 gap-10 m-10 mx-36">
                {props.items.map((element) => {
                    const {
                        id,
                        price,
                        propertyImage,
                        propertyName,
                        propertyAddress,
                        bedroom,
                        bathroom,
                        propertyArea,
                    } = element;
                    return (
                        <div
                            className="card card-compact bg-base-100 shadow-xl"
                            key={id}
                        >
                            <figure>
                                <img src={propertyImage} />
                            </figure>
                            <div className="card-body p-5">
                                <div className="flex items-center justify-between">
                                    <p className="text-blue-500 font-semibold text-lg">
                                        $ {price} /month
                                    </p>
                                    <IoHeartCircleOutline />
                                </div>
                                <h2 className="card-title font-bold text-xl">
                                    {propertyName}
                                </h2>
                                <p>{propertyAddress}</p>
                                <hr />
                                <div className="flex items-center justify-between">
                                    <div className="flex item-center justify-center">
                                        <FaBed />
                                        <p>{bedroom} Beds</p>
                                    </div>
                                    <div className="flex item-center justify-center">
                                        <FaBath />
                                        <p>{bathroom} Bathrooms</p>
                                    </div>
                                    <div className="flex item-center justify-center">
                                        <FcAreaChart />
                                        <p>{propertyArea} m2</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Cards;
