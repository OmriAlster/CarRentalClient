export const dayString = (day) => {
    return new Date(day).toISOString().substr(0, 10);
}

export const Today = () => {
    return dayString(Date.now());
}

export const Tomorrow = () => {
    return dayAfter(Today());
}

export const dayAfter = (day) => {
    return  dayString(new Date(Date.parse(day) + 1000*60*60*24));
}