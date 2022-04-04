import { format, add, parseISO, addSeconds } from 'date-fns'

function formatDate(dateString: string, shortOptions?: boolean) {
  return shortOptions
    ? format(
        add(parseISO(dateString), {
          minutes: new Date().getTimezoneOffset(),
        }),
        'PP'
      )
    : format(
        add(parseISO(dateString), {
          minutes: new Date().getTimezoneOffset(),
        }),
        'PPP'
      )
}

function formatTime(seconds: number) {
  return format(addSeconds(new Date(0), seconds), 'mm:ss')
}

export { formatDate, formatTime }
