export class HelperData {
  static readonly days = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота'];

  static readonly months = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];

  static readonly monthsUk = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];

  static readonly weekShort = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

  static readonly apiKey = '6f035692382f13a1602ebdd889cd43a6';
  // static readonly apiKey = '2d4e7c70530458cd72e77d4f65c15a6d';

  static readonly weekPattern = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  static readonly monthPatternLarge = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  static readonly monthPatternSmall = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

  static readonly cities = ['New York', 'Paris', 'London', 'Warszawa'];

  static readonly iconWeather:{ [key: string]: any } = {
    '01d': 'clear_sky',
    '02d': 'few_clouds',
    '03d': 'scattered_clouds',
    '04d': 'broken_clouds',
    '09d': 'shower_rain',
    '10d': 'rain',
    '11d': 'thunderstorm',
    '13d': 'snow',
    '50d': 'mist',
  }
}
