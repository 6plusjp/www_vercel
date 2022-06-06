import { add, addSeconds, format, parseISO } from "date-fns";

function formatDate(dateString: string, shortOptions?: boolean) {
  return shortOptions
    ? format(
        add(parseISO(dateString), {
          minutes: new Date().getTimezoneOffset(),
        }),
        "PP"
      )
    : format(
        add(parseISO(dateString), {
          minutes: new Date().getTimezoneOffset(),
        }),
        "PPP"
      );
}

function formatMonth(dateString: string, shortOptions?: boolean) {
  return shortOptions
    ? format(parseISO(dateString), "LLL, yyyy")
    : format(parseISO(dateString), "LLLL, yyyy");
}

function formatTime(seconds: number) {
  return format(addSeconds(new Date(0), seconds), "mm:ss");
}

export { formatDate, formatMonth, formatTime };
