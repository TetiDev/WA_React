import DateTimeFormatOptions = Intl.DateTimeFormatOptions;

export const formattedDate = (dt:number) => {
  const date = new Date(dt * 1000);
  const options:DateTimeFormatOptions = { weekday: 'short', day: 'numeric', month: 'short' };
  return date.toLocaleDateString('en-US', options);
};
