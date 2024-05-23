import moment from 'moment';

export function fDate(date) {
  if (!date) return null;
  return moment(date).format('DD MMMM yyyy');
}

export function fDateTime(date) {
  if (!date) return null;
  return moment(date).format('DD MMM yyyy, hh:mm a');
}

export function fTimestamp(date) {
  if (!date) return null;
  return moment(date).toDate();
}

export function fDateTimeDuration(start, end) {
  if (!moment(start).isValid() || !moment(end).isValid()) return null;
  return moment(end).to(moment(start), true);
}

export function fTime12(date) {
  if (!date) return null;
  return moment(date, 'HH:mm:ss').format('hh:mm a');
}

export function fTime24(date) {
  if (!date) return null;
  return moment(date, 'HH:mm:ss').format('HH:mm');
}

export function fDurations(minutes) {
  const _hours = Math.floor(minutes / 60);
  const _minutes = minutes % 60;

  return {
    hours: Number.isInteger(_hours) ? _hours : 0,
    minutes: Number.isInteger(_minutes) ? _minutes : 0
  };
}