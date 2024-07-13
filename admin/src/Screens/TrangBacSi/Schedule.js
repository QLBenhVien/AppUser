import React from 'react';
import styled from 'styled-components';

const Schedule = ({ date }) => {
  return (
    <ScheduleContainer>
      <ScheduleTitle>Lịch làm việc ngày: {date}</ScheduleTitle>
      <TimeSlots>
        <div className="time-slot">7:30-11:30</div>
        <div className="time-slot">13:00-17:00</div>
      </TimeSlots>
    </ScheduleContainer>
  );
};

export default Schedule;

// Styled Components
const ScheduleContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const ScheduleTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const TimeSlots = styled.div`
  display: flex;
  gap: 10px;

  .time-slot {
    background-color: #3A7CA5;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
  }
`;