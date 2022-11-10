import React, {useState} from "react";

const Filter = ({requiredCards}) => {

    const [searchValue, setSearchValue] = useState({
        propertyLocation: 'UP, India',
        propertyPrice: '100',
        propertyType: 'houses'
    })

    let id, value;
    const updateValues = (e) => {
        id = e.target.id;
        value = e.target.value;

        setSearchValue({...searchValue, [id]: value})
    }

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
                        className="px-8 py-3 font-semibold rounded bg-blue-500 text-white dark:bg-gray-100 dark:text-gray-800"
                    >
                        Search
                    </button>
                </div>
            </div>
            <div className="bg-white mx-36 mt-10 rounded-lg p-5 flex items-center justify-evenly">
                <div>
                    <p className="text-slate-300">Location</p>
                    <select name="" id="propertyLocation" className="font-bold text-2xl" onChange={updateValues} value={searchValue.propertyLocation}>
                        <option value="UP, India">UP, India</option>
                        <option value="MP, India">MP, India</option>
                    </select>
                </div>
                <div className="w-1 h-10 bg-slate-200"></div>
                <div>
                    <p className="text-slate-300">When</p>
                    <input type="date" name="" id="move-in-date" className="font-bold text-2xl"/>
                </div>
                <div className="w-1 h-10 bg-slate-200"></div>
                <div>
                    <p className="text-slate-300">Price</p>
                    <select name="" id="propertyPrice" className="font-bold text-2xl" onChange={updateValues} value={searchValue.propertyPrice}>
                        <option value="500">$100 - $500</option>
                        <option value="1000">$500 - $1000</option>
                        <option value="2000">$1000 - $2000</option>
                    </select>
                </div>
                <div className="w-1 h-10 bg-slate-200"></div>
                <div>
                    <p className="text-slate-300">Property Type</p>
                    <select name="" id="propertyType" className="font-bold text-2xl" onChange={updateValues} value={searchValue.propertyType}>
                        <option value="houses">Houses</option>
                        <option value="appartment">Appartment</option>
                    </select>
                </div>
                <button
                        type="button"
                        className="px-8 py-3 font-semibold rounded bg-blue-500 text-white dark:bg-gray-100 dark:text-gray-800"
                        onClick={requiredCards(searchValue)}
                    >
                        Search
                </button>
            </div>
        </div>
    );
};

export default Filter;
