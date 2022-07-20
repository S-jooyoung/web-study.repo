{
  /**
   * Enum
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUSDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUSDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript

  enum Days {
    Monday = 1,
    Tusday,
    Wednesday,
    Thursday,
    Friday,
    Satarday,
    Sunday,
  }
  console.log(Days.Monday);
  let day: Days = Days.Satarday;
  day = Days.Tusday;
  day = 10; // bad 💩
  console.log(day);

  // good✨
  type DaysOfWeek = "Mondays" | "Tuesday" | "Wednesday";

  let dayOfwekk: DaysOfWeek = "Mondays";
  dayOfwekk = "Tuesday";
}
