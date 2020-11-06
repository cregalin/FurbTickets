const paramsToArray = params => {
  const {dateFrom,
    dateTo,
    title,
    description,
    troupe,
    timeFrom,
    timeTo} = params

  const paramsAsArray = [{
    key: 'date_from',
    value: dateFrom
  },{
    key: 'date_to',
    value: dateTo
  },{
    key: 'title',
    value: title
  },{
    key: 'description',
    value: description
  },{
    key: 'troupe',
    value: troupe
  },{
    key: 'time_from',
    value: timeFrom
  },{
    key: 'time_to',
    value: timeTo
  }]

  return paramsAsArray
}

export const paramsToQuery = params => {
  return paramsToArray(params)
  .filter(param => param.value)
  .map(param => `${params.key}=${param.value}`)
  .reduce((curr, acc) => acc ? `${acc}&${curr}` : `?${curr}`, '')
}
