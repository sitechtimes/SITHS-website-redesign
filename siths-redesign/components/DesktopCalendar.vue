<template>
  <div class="mb-12" v-if="calendarData.dateInfo.length > 0">
    <div class="flex flex-row justify-center">
      <table class="calendar w-full md:w-5/6 lg:w-full max-w-[900px] table-fixed">
        <caption class="pb-2 text-3xl font-bold">
          <div class="flex justify-center">
            <span class="arrow cursor-pointer select-none" id="prev" @click="changeMonth(-1)">
              &#10094;
            </span>
            <h2 class="mx-2 w-60 text-center">{{ months[todaysMonth] }} {{ todaysYear }}</h2>
            <span class="arrow cursor-pointer select-none" id="next" @click="changeMonth(1)">
              &#10095;
            </span>
          </div>
        </caption>
        <thead class="bg-primary-g text-center font-bold">
          <tr>
            <th scope="col">Sun</th>
            <th scope="col">Mon</th>
            <th scope="col">Tue</th>
            <th scope="col">Wed</th>
            <th scope="col">Thu</th>
            <th scope="col">Fri</th>
            <th scope="col">Sat</th>
          </tr>
        </thead>
        <tbody>
          <!-- height of 1px is for the table cell's height 100% to work?? -->
          <tr v-for="i in 5" :key="i" class="h-[1px]">
            <td v-for="date in calendarData.dateInfo.slice((i - 1) * 7, i * 7)" :key="date.id"
              class="overflow-y-auto overflow-x-clip break-words border-2 border-zinc-400" style="height: inherit"
              :aria-label="`${months[date.month]} ${date.todaysDate}, ${date.year}`">
              <div class="h-full min-h-20 p-0.5 md:p-1">
                <span :class="{ 'text-stone-400': date.type !== 'current' }">{{
                  date.todaysDate
                }}</span>
                <div v-for="event in eventsOnDate(date)" :key="event._id">
                  <p @click="toggleDetails(event)" class="bg-gold text-gray"
                    :class="`mb-1 w-full cursor-pointer truncate rounded-md p-1.5 text-center font-bold transition duration-500 hover:opacity-80 hover:shadow-md`">
                    {{ event.event }}
                  </p>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <CalendarModal :show="show" :eventDetails="eventDetails" />
    </div>
  </div>
</template>

<script setup>
const websiteData = useWebsiteDataStore()
const events = ref(websiteData.events)
const eventDetails = ref(null)
const show = ref(false) //control modal visibility

//matching events to calendar cell information
const eventsOnDate = (dateInfo) => {
  const matchingEvents = events.value.filter((event) => {
    const eventDate = event.date

    //split the event date into year, month, and day (YYYY-MM-DD)
    const [eventYear, eventMonth, eventDay] = eventDate.split('-')

    //compare the event date to the date of the current calendar cell
    const isMatch =
      parseInt(eventYear) === dateInfo.year &&
      parseInt(eventMonth) - 1 === dateInfo.month &&
      parseInt(eventDay) === dateInfo.todaysDate
    return isMatch
  })
  return matchingEvents
}

//toggle the modal and show event details
const toggleDetails = (event) => {
  eventDetails.value = event //set event details to be displayed
  show.value = !show.value //toggle modal visibility
}

const calendarData = reactive({
  dateInfo: []
})

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

onMounted(() => {
  watch(
    () => websiteData.fetchLoading,
    () => {
      events.value = websiteData.events
      renderCalendar()
    },
    { immediate: true }
  )
})

let todaysDate = new Date()
let todaysYear = todaysDate.getFullYear()
let todaysMonth = todaysDate.getMonth()

//generates calendar data
const renderCalendar = () => {
  let firstDayofMonth = new Date(todaysYear, todaysMonth, 1).getDay()
  let lastDateofMonth = new Date(todaysYear, todaysMonth + 1, 0).getDate()
  let lastDayofMonth = new Date(todaysYear, todaysMonth, lastDateofMonth).getDay()
  let lastDateofLastMonth = new Date(todaysYear, todaysMonth, 0).getDate()
  let dateInfo = []

  //note: Javascript indexes the months at 0, so January is 0

  //days from the previous month
  for (let i = firstDayofMonth; i > 0; i--) {
    dateInfo.push({
      type: 'previous',
      todaysDate: lastDateofLastMonth - i + 1,
      month: todaysMonth === 0 ? 11 : todaysMonth - 1, //if it's January (0), set to December (11), otherwise set to the previous month
      year: todaysMonth === 0 ? todaysYear - 1 : todaysYear, //if it's January (0), decrement the year by 1, otherwise keep the current year
      id: i + 'previous'
    })
  }
  //days in the current month
  for (let i = 1; i <= lastDateofMonth; i++) {
    dateInfo.push({
      type: 'current',
      todaysDate: i,
      month: todaysMonth,
      year: todaysYear,
      id: i + 'current'
    })
  }
  //days for the next month
  for (let i = lastDayofMonth; i < 6; i++) {
    dateInfo.push({
      type: 'future',
      todaysDate: i - lastDayofMonth + 1,
      month: todaysMonth === 11 ? 0 : todaysMonth + 1,
      year: todaysMonth === 11 ? todaysYear + 1 : todaysYear,
      id: i + 'future'
    })
  }
  calendarData.dateInfo = dateInfo
}

const changeMonth = (next) => {
  todaysMonth += next
  show.value = false
  if (todaysMonth < 0 || todaysMonth > 11) {
    todaysDate = new Date(todaysYear, todaysMonth, new Date().getDate())
    todaysYear = todaysDate.getFullYear()
    todaysMonth = todaysDate.getMonth()
  } else {
    todaysDate = new Date()
  }
  renderCalendar()
}
</script>

