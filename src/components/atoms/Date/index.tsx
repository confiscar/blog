import { parseISO, format } from 'date-fns';

declare type DateProps = {
    dateString: string;
}

const Date = ({ dateString }: DateProps) => {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
};

export default Date;