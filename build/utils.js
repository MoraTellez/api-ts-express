"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const parseComment = (commentFromRequest) => {
    if (!isString(commentFromRequest)) {
        throw new Error('Incorrect or missing comment');
    }
    return commentFromRequest;
};
const parseDate = (dateFromRequest) => {
    if (!isDate(dateFromRequest)) {
        throw new Error('Incorrect or missing date');
    }
    return dateFromRequest;
};
const parseWeather = (weatherFromRequest) => {
    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error('Incorrecto or missign weather');
    }
    return weatherFromRequest;
};
const parseVisibility = (visibilityFromRequest) => {
    if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
        throw new Error('Incorrecto or missing visibility');
    }
    return visibilityFromRequest;
};
const isString = (string) => typeof string === 'string';
const isDate = (date) => Boolean(Date.parse(date));
const isWeather = (param) => {
    return Object.values(types_1.Weather).includes(param);
};
const isVisibility = (param) => {
    return Object.values(types_1.Visibility).includes(param);
};
const toNewDiaryEntry = (objeto) => {
    const newEntry = {
        comment: parseComment(objeto.comment),
        date: parseDate(objeto.date),
        weather: parseWeather(objeto.weather),
        visibility: parseVisibility(objeto.visibility)
    };
    return newEntry;
};
exports.default = toNewDiaryEntry;
