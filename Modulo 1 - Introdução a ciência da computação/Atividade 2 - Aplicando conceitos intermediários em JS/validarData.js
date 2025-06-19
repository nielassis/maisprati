class DateChecker {
  constructor(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
  }

  check() {
    const date = new Date(this.year, this.month - 1, this.day);

    const isValid =
      date.getFullYear() === this.year &&
      date.getMonth() === this.month - 1 &&
      date.getDate() === this.day;

    return isValid;
  }
}

const date = new DateChecker(29, 2, 2024); // ano bissexto
console.log(date.check()); // true

const invalidDate = new DateChecker(31, 4, 2024);
console.log(invalidDate.check()); // false, abril tem 30 dias
