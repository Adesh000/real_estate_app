import React from "react";

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
                                <p className="text-blue-500 font-semibold text-lg">
                                    $ {price} /month
                                </p>
                                <h2 className="card-title font-bold text-xl">
                                    {propertyName}
                                </h2>
                                <p>{propertyAddress}</p>
                                <hr />
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p>{bedroom} Beds</p>
                                    </div>
                                    <div>
                                        <p>{bathroom} Bathrooms</p>
                                    </div>
                                    <div>
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
