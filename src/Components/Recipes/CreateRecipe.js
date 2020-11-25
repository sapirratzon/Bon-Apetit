import React from 'react';

const createRecipe = props => {
    const categories = {
        time: ['Morning', 'Noon', 'Evening', 'Holiday', 'Sabbath', 'Rosh Hashanah',
            'Sukkot', 'Hanukkah', 'Tu Bishvat', 'Purim', 'Passover', 'Funded',
            "Lag B'Omer", 'Shavuot', 'Independence Day', 'summer', 'winter', 'Nobi Good'],
        type: ['Meat', 'Chicken', 'Fish', 'Pasta', 'Salad', 'Soap', 'Pie', 'Cakes', 'Pastries', 'Lasagna', 'Quiche',
            'Patties', 'Cookies', 'Cupcakes', 'Fritters', 'Muffins'],
        menus: ['Healthy', 'Vegetarian', 'Vegan', 'For Kids', 'Gluten free', 'Diet'],
        kitchen: ['Israeli', 'Asian', 'Italian', 'French', 'North African', 'Arabic',
            'Balkani', 'Persian', 'Ashkenazic', 'American', 'Mexican', 'Indian', 'Japanese',
            'Indonesian', 'English', 'Argentine', 'Armenian', 'Ethiopian', 'Bukhari', 'Bulgarian'],
        Level: ['Very Easy', 'Easy', 'Medium', 'Advanced'],
        kosher: ['kosher', 'Not kosher', 'Kosher for Passover']
    };

    return (
        <h1>s</h1>
    )
};

export default createRecipe;
