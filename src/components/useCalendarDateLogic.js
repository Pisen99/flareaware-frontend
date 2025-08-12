import React, { useState } from "react";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';

export default function useCalendarDateLogic() {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const today = new Date();

    const getDateInfo = (date) => ({
        weekday: format(date, "iiii"),         // "Monday"
        weekdayShort: format(date, "iiiii"),   // "M"
        dayOrdinal: format(date, "do"),        // "18th"
        isoDay: format(date, "d"),             // 18 (ISO day number, Mon=1..Sun=7)
        monthAbbr: format(date, "LLL"),        // "Aug"
        year: format(date, "y"),               // "2025"
        currentDay: "nothing for now"
    });

    // ---------------------------
    // Generating all days in current month
    // ---------------------------
    const getMonthDays = (date) => {
        const start = startOfMonth(date);
        const end = endOfMonth(date);

        return eachDayOfInterval({ start, end }).map((dayDate) => {
            const dayInfo = getDateInfo(dayDate);
            const isToday =
                dayInfo.dayOrdinal === format(today, "do") &&
                dayInfo.monthAbbr === format(today, "LLL") &&
                dayInfo.year === format(today, "y");
            return { ...dayInfo, isToday };
        });
    };
    
    // ---------------------------
    // Handlers
    // ---------------------------
    const handlePrevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };

    const handleNextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };

    return {
        dateInfo: getDateInfo(today),
        currentMonthInfo: getDateInfo(currentMonth),
        monthDays: getMonthDays(currentMonth),
        handlePrevMonth,
        handleNextMonth,
    }
};