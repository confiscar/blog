import getOrdinalNum from './getOrdinalNumber';

// Takes the front matter date, and turns it to
// a english friendly version
const formatDate = (date: string) => {
    const dateObj = new Date(date);
    return `${dateObj.toLocaleString('default', { month: 'long' })} ${getOrdinalNum(dateObj.getDate())}, ${dateObj.getFullYear()}`;
};

export default formatDate;