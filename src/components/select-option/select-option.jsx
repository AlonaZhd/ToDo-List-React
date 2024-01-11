import React from "react";

import "./select-option.scss";

const SelectOption = ({ toDos, setToDos, filter }) => {
    const selectOptions = [
        { id: 1, value: "All" },
        { id: 2, value: "Done" },
        { id: 3, value: "Active" },
    ];

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        console.log(selectedValue);
        switch (selectedValue) {
            case "Done":
                filter(true);
                // console.log(true);
                break;
            case "Active":
                filter(false);
                // console.log(false);
                break;
            default:
                filter(null);
                // console.log(null); // Для "All" скидаємо фільтр
                break;
        }
        // filter(selectedValue); // Передаємо вибраний value функції фільтрації
    };

    return (
        <div>
            <select
                className="todo__select"
                type="select"
                name="select"
                id="select"
                onChange={handleSelectChange}
            >
                {selectOptions.map((option) => (
                    <option key={option.id} className="todo__option">
                        {option.value}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectOption;
