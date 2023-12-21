import { Weather, Visibility, newDiaryEntry } from './types'

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or missing comment')
  }

  return commentFromRequest
}

const parseDate = (dateFromRequest: any): string => {
  if (!isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date')
  }

  return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Incorrecto or missign weather')
  }

  return weatherFromRequest
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
    throw new Error('Incorrecto or missing visibility')
  }

  return visibilityFromRequest
}

const isString = (string: string): boolean => typeof string === 'string'

const isDate = (date: string): boolean => Boolean(Date.parse(date))

const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param)
}

const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
}

const toNewDiaryEntry = (objeto: any): newDiaryEntry => {
  const newEntry: newDiaryEntry = {
    comment: parseComment(objeto.comment),
    date: parseDate(objeto.date),
    weather: parseWeather(objeto.weather),
    visibility: parseVisibility(objeto.visibility)
  }

  return newEntry
}

export default toNewDiaryEntry
