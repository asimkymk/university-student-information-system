import Head from "next/head";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { styled, alpha } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentTooltip,
} from "@devexpress/dx-react-scheduler-material-ui";
import AppConstant from "../connect/app_constants";
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
const PREFIX = "Demo";

const classes = {
  todayCell: `${PREFIX}-todayCell`,
  weekendCell: `${PREFIX}-weekendCell`,
  today: `${PREFIX}-today`,
  weekend: `${PREFIX}-weekend`,
};

const StyledWeekViewTimeTableCell = styled(WeekView.TimeTableCell)(
  ({ theme }) => ({
    [`&.${classes.todayCell}`]: {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      "&:hover": {
        backgroundColor: alpha(theme.palette.primary.main, 0.14),
      },
      "&:focus": {
        backgroundColor: alpha(theme.palette.primary.main, 0.16),
      },
    },
    [`&.${classes.weekendCell}`]: {
      backgroundColor: alpha(theme.palette.action.disabledBackground, 0.04),
      "&:hover": {
        backgroundColor: alpha(theme.palette.action.disabledBackground, 0.04),
      },
      "&:focus": {
        backgroundColor: alpha(theme.palette.action.disabledBackground, 0.04),
      },
    },
  })
);

const StyledWeekViewDayScaleCell = styled(WeekView.DayScaleCell)(
  ({ theme }) => ({
    [`&.${classes.today}`]: {
      backgroundColor: alpha(theme.palette.primary.main, 0.16),
    },
    [`&.${classes.weekend}`]: {
      backgroundColor: alpha(theme.palette.action.disabledBackground, 0.06),
    },
  })
);

const TimeTableCell = (props) => {
  const { startDate } = props;
  const date = new Date(startDate);

  if (date.getDate() === new Date().getDate()) {
    return (
      <StyledWeekViewTimeTableCell {...props} className={classes.todayCell} />
    );
  }
  if (date.getDay() === 0 || date.getDay() === 6) {
    return (
      <StyledWeekViewTimeTableCell {...props} className={classes.weekendCell} />
    );
  }
  return <StyledWeekViewTimeTableCell {...props} />;
};

const DayScaleCell = (props) => {
  const { startDate, today } = props;

  if (today) {
    return <StyledWeekViewDayScaleCell {...props} className={classes.today} />;
  }
  if (startDate.getDay() === 0 || startDate.getDay() === 6) {
    return (
      <StyledWeekViewDayScaleCell {...props} className={classes.weekend} />
    );
  }
  return <StyledWeekViewDayScaleCell {...props} />;
};


function getDay1(add) {
  var next_day = new Date();
  next_day.setDate(next_day.getDate() + add);
  return next_day;
}

function List(schedule) {
  var lectures = [];
  for (var i = -5; i <= 5; i++) {
    var date = getDay1(i);
    for (var j = 0; j < schedule.length; j++) {
      if (date.getDay() == schedule[j].dersGunu) {
        var sDate = getDay1(i);
        sDate.setHours(schedule[j].dersBasSaat);
        sDate.setMinutes(schedule[j].dersBasDk);
        sDate.setSeconds(0);
        var eDate = getDay1(i);
        eDate.setHours(schedule[j].dersBitSaat);
        eDate.setMinutes(schedule[j].dersBitDk);
        eDate.setSeconds(0);
        var obj = {
          'startDate': sDate,
          'endDate': eDate,
          'title': schedule[j].dersAdi
        };
        lectures.push(obj);
      }
    }
  }
  return lectures;
}

export default function Schedule() {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [schedule, setSchedule] = useState([]);
  if (AppConstant.isLogged) {
    const requestOptions = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        token: AppConstant.token,
      },
    };
    useEffect(() => {
      const fetchData = () => {
        fetch("http://localhost:3001/courseschedule", requestOptions)
          .then((response) => {
            if (response.status >= 200 && response.status < 300) {
              setLoading(false);
              return response.json();
            } else {
              throw new Error("Error: Could not fetch the data");
            }
          })
          .then((posts) => {
            setSchedule(posts.data);
          })
          .catch((e) => {
            setError(true);
            setLoading(false);
          });
      };
      fetchData();
    }, []);
    if (loading) {
      return <h3>Loading ...</h3>;
    }

    if (error) {
      return <h3>Error in the API call itself ...</h3>;
    }
    return (
      <>
        <Head>
          <title>Ders Programı - İÜC ÖBS</title>
        </Head>
        <Layout appBar={{ links: { "Ana Sayfa": "/", "Ders Programı": "/courseschedule" }, title: "Ders Programı" }}>
          <div className="container-fluid" style={{ width: "100%" }}>
            <Item>
              <Scheduler
                data={List(schedule)}
                locale={"tr"}
                style={{ minWidth: "0" }}
              >
                <WeekView
                  excludedDays={[0, 6]}
                  startDayHour={7.68}
                  endDayHour={20.20}
                  cellDuration={50}
                  timeTableCellComponent={TimeTableCell}
                  dayScaleCellComponent={DayScaleCell}
                  style={{ minWidth: "0" }}
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

  if (error) {
    return <h3>Error in the API call itself ...</h3>;
  }
  console.log(schedule);
  return (
    <>
      <Head>
        <title>Ders Programı - İÜC ÖBS</title>
      </Head>
      <Layout
        appBar={{
          links: { "Ana Sayfa": "/", "Ders Programı": "/courseschedule" },
          title: "Ders Programı",
        }}
      >
        <div className="container-fluid" style={{ width: "100%" }}>
          <Item>
            <Scheduler
              data={appointments}
              locale={"tr"}
              style={{ minWidth: "0" }}
            >
              <WeekView
                excludedDays={[0, 6]}
                startDayHour={7.68}
                endDayHour={20.2}
                cellDuration={50}
                timeTableCellComponent={TimeTableCell}
                dayScaleCellComponent={DayScaleCell}
                style={{ minWidth: "0" }}
              />
              <Appointments />
              <AppointmentTooltip showCloseButton />
            </Scheduler>
          </Item>
        </div>
      </Layout>
    </>
  );
}

