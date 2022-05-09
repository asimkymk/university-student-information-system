import Head from "next/head";
import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import { styled, alpha } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {
    Scheduler,
    WeekView,
    Appointments,
    AppointmentTooltip,
} from '@devexpress/dx-react-scheduler-material-ui';

import appointments from '../modules/today-appointments';
const Item = styled(Paper)(({ theme }) => ({
    color: "rgba(0, 0, 0, 0.87)",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;",
    flexDirection: "column",
    position: "relative",
    minWidth: "0px",
    overflowWrap: "break-word",
    backgroundColor: "rgb(255, 255, 255)",
    backgroundClip: "border-box",
    border: "none",
    borderRadius: "0.75rem",
    boxShadow:
        "rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem",
    overflow: "visible",
    paddingLeft: "1rem",
    padding: "1rem",
    marginBottom: "1.1rem",
}));
const PREFIX = 'Demo';

const classes = {
    todayCell: `${PREFIX}-todayCell`,
    weekendCell: `${PREFIX}-weekendCell`,
    today: `${PREFIX}-today`,
    weekend: `${PREFIX}-weekend`,
};

const StyledWeekViewTimeTableCell = styled(WeekView.TimeTableCell)(({ theme }) => ({
    [`&.${classes.todayCell}`]: {
        backgroundColor: alpha(theme.palette.primary.main, 0.1),
        '&:hover': {
            backgroundColor: alpha(theme.palette.primary.main, 0.14),
        },
        '&:focus': {
            backgroundColor: alpha(theme.palette.primary.main, 0.16),
        },
    },
    [`&.${classes.weekendCell}`]: {
        backgroundColor: alpha(theme.palette.action.disabledBackground, 0.04),
        '&:hover': {
            backgroundColor: alpha(theme.palette.action.disabledBackground, 0.04),
        },
        '&:focus': {
            backgroundColor: alpha(theme.palette.action.disabledBackground, 0.04),
        },
    },
}));

const StyledWeekViewDayScaleCell = styled(WeekView.DayScaleCell)(({ theme }) => ({
    [`&.${classes.today}`]: {
        backgroundColor: alpha(theme.palette.primary.main, 0.16),
    },
    [`&.${classes.weekend}`]: {
        backgroundColor: alpha(theme.palette.action.disabledBackground, 0.06),
    },
}));

const TimeTableCell = (props) => {
    const { startDate } = props;
    const date = new Date(startDate);

    if (date.getDate() === new Date().getDate()) {
        return <StyledWeekViewTimeTableCell {...props} className={classes.todayCell} />;
    } if (date.getDay() === 0 || date.getDay() === 6) {
        return <StyledWeekViewTimeTableCell {...props} className={classes.weekendCell} />;
    } return <StyledWeekViewTimeTableCell {...props} />;
};

const DayScaleCell = (props) => {
    const { startDate, today } = props;

    if (today) {
        return <StyledWeekViewDayScaleCell {...props} className={classes.today} />;
    } if (startDate.getDay() === 0 || startDate.getDay() === 6) {
        return <StyledWeekViewDayScaleCell {...props} className={classes.weekend} />;
    } return <StyledWeekViewDayScaleCell {...props} />;
};

class Home extends Component {
    render() {
        return (
            <>
                <Head>
                    <title>Ders Programı - İÜC ÖBS</title>
                </Head>
                <Layout appBar={{ links: { "Ana Sayfa": "/", "Ders Programı": "/courseschedule" }, title: "Ders Programı" }}>
                    <div className="container">
                        <Item>
                            <Scheduler
                                data={appointments}
                                locale={"tr"}
                                height={"100%"}
                                minWidth={1}
                            >
                                <WeekView
                                    excludedDays={[0, 6]}
                                    startDayHour={7.68}
                                    endDayHour={20.20}
                                    cellDuration={50}

                                />
                                <Appointments />
                                <AppointmentTooltip
                                    showCloseButton
                                />
                            </Scheduler>
                        </Item>
                    </div>
                </Layout>
            </>
        );
    }
}

export default Home;
