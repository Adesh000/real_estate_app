import React from "react";

const Filter = () => {
    return (
        <div className="bg-slate-100 py-10">
            <div className="flex items-center justify-around">
                <h1 className="text-5xl font-semibold">
                    Search Properties to rent
                </h1>
                <div>
                    <input
                        type="text"
                        name="search-bar"
                        id="search-bar"
                        placeholder="Search with search bar"
                        className="px-5 py-3 rounded-md mx-5"
                    />
                    <button
                        type="button"
                        class="px-8 py-3 font-semibold rounded bg-blue-500 text-white dark:bg-gray-100 dark:text-gray-800"
                    >
                        Search
                    </button>
                </div>
            </div>
            <div className="bg-white mx-36 mt-10 rounded-lg p-5 flex items-center justify-evenly">
                <div>
                    <p className="text-slate-300">Location</p>
                    <h1 className="font-bold text-2xl">Jhansi, India</h1>
                </div>
                <div className="w-1 h-10 bg-slate-200"></div>
                <div>
                    <p className="text-slate-300">When</p>
                    <input type="date" name="" id="move-in-date" className="font-bold text-2xl"/>
                </div>
                <div className="w-1 h-10 bg-slate-200"></div>
                <div>
                    <p className="text-slate-300">Price</p>
                    <select name="property-price" id="p-price" className="font-bold text-2xl">
                        <option value="">$200</option>
                    </select>
                </div>
                <div className="w-1 h-10 bg-slate-200"></div>
                <div>
                    <p className="text-slate-300">Property Type</p>
                    <select name="property-price" id="p-price" className="font-bold text-2xl">
                        <option value="">$200</option>
                    </select>
                </div>
                <button
                        type="button"
                        class="px-8 py-3 font-semibold rounded bg-blue-500 text-white dark:bg-gray-100 dark:text-gray-800"
                    >
                        Search
                    </button>
            </div>
        </div>
    );
};

export default Filter;
