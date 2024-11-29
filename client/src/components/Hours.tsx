const data = new Date();
const hours = data.getHours();

const Hours = () => {
    if (hours >= 6 && hours <= 11) {
        return 'Good Morning!'
    } else if (hours > 11 && hours <= 17) {
        return 'Good Afternoon!';
    } else if (hours >= 18 && hours <= 5) {
        return 'Good Evening';
    }
};

export default Hours