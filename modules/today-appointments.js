import moment from 'moment';
import { appointments } from './appointments';

const currentDate = moment();
let date = currentDate.date();

const makeTodayAppointment = (startDate, endDate) => {
    const ddiff = moment(startDate).date() - date;
    const mdiff = moment(startDate).month() - currentDate.month();
    const ydiff = moment(startDate).year() - currentDate.year();

    const nextStartDate = moment(startDate)
        .year(currentDate.year() + ydiff)
        .month(currentDate.month() + mdiff)
        .date(date + ddiff);
    const nextEndDate = moment(endDate)
        .year(currentDate.year() + ydiff)
        .month(currentDate.month() + mdiff)
        .date(date + ddiff);
    return {
        startDate: nextStartDate.toDate(),
        endDate: nextEndDate.toDate(),
    }
};

export default appointments.map(({ startDate, endDate, ...restArgs }) => {
    const result = {
        ...makeTodayAppointment(startDate, endDate),
        ...restArgs,
    };
    return result;
});
