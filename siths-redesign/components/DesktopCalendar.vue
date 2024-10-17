<template>
  <div class="grid">
    <div class="flex flex-row mb-8 text-3xl font-bold">
      <span class="arrow cursor-pointer" id="prev" @click="changeMonth(false)">
        &#10094;
      </span>
      <div class="mx-2 flex flex-row">
        {{ months[todaysMonth] }} {{ todaysYear }}
      </div>
      <span class="arrow cursor-pointer" id="next" @click="changeMonth(true)">
        &#10095;
      </span>
    </div>
    <div class="flex flex-row mb-12">
      <div class="calendar w-full">
        <ul class="weeks bg-primary-g font-bold text-center flex flex-wrap">
          <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </ul>
        <ul class="days">
          <li class="dayCon" v-for="date in calendarData.dateInfo" :key="date.id">
            <p :class="{ 'text-slate-300': date.type !== 'current' }" class="mt-2 text-end mr-2 mb-16">
              {{ date.todaysDate }}
            </p>
            <!-- if event matches the current date, display it! -->
            <div v-for="event in eventsOnDate(date)" :key="event._id">
              <p @click="toggleDetails(event)" class="bg-gold text-gray"
                :class="`w-full text-center truncate rounded-md p-1.5 mb-1 font-bold transition duration-500 hover:opacity-80 cursor-pointer hover:shadow-md`">
                {{ event.event }}
              </p>
            </div>
          </li>
        </ul>
      </div>
      <CalendarModal :show="show" :eventDetails="eventDetails" />
    </div>
  </div>
</template>

<script setup>
const events = ref([]);
const eventDetails = ref(null);
const show = ref(false);  //control modal visibility

//fetch events from Sanity
const fetchEvents = async () => {
  const query = `*[_type == "calendar"]{
    _id,
    date,
    event,
    description,
  }`;
  const { data, refresh } = await useSanityQuery(query)
  events.value = data
};
await fetchEvents();

//matching events to calendar cell information
const eventsOnDate = (dateInfo) => {
  const matchingEvents = events.value.filter(event => {
    const eventDate = event.date;

    //split the event date into year, month, and day (YYYY-MM-DD)
    const [eventYear, eventMonth, eventDay] = eventDate.split('-');

    //compare the event date to the date of the current calendar cell
    const isMatch = (
      parseInt(eventYear) === dateInfo.year &&
      parseInt(eventMonth) === dateInfo.month + 1 && 
      parseInt(eventDay) === dateInfo.todaysDate
    );
    return isMatch;
  });
  return matchingEvents;
};

//toggle the modal and show event details
const toggleDetails = (event) => {
  eventDetails.value = event;  //set event details to be displayed
  show.value = !show.value;  //toggle modal visibility
};

const calendarData = reactive({
  dateInfo: [],
});

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

onMounted(() => {
  renderCalendar();
});

let todaysDate = new Date();
let todaysYear = todaysDate.getFullYear();
let todaysMonth = todaysDate.getMonth();

//generates calendar data
const renderCalendar = () => {
  let firstDayofMonth = new Date(todaysYear, todaysMonth, 1).getDay();
  let lastDateofMonth = new Date(todaysYear, todaysMonth + 1, 0).getDate();
  let lastDayofMonth = new Date(todaysYear, todaysMonth, lastDateofMonth).getDay();
  let lastDateofLastMonth = new Date(todaysYear, todaysMonth, 0).getDate();
  let dateInfo = [];

  //note: Javascript indexes the months at 0, so January is 0

  //days from the previous month
  for (let i = firstDayofMonth; i > 0; i--) {
    dateInfo.push({
      type: "previous",
      todaysDate: lastDateofLastMonth - i + 1,
      month: todaysMonth === 0 ? 11 : todaysMonth - 1,  //if it's January (0), set to December (11), otherwise set to the previous month
      year: todaysMonth === 0 ? todaysYear - 1 : todaysYear,  //if it's January (0), decrement the year by 1, otherwise keep the current year
      id: i + "previous",
    });
  }
  //days in the current month
  for (let i = 1; i <= lastDateofMonth; i++) {
    dateInfo.push({
      type: "current",
      todaysDate: i,
      month: todaysMonth,
      year: todaysYear,
      id: i + "current",
    });
  }
  //days for the next month
  for (let i = lastDayofMonth; i < 6; i++) {
    dateInfo.push({
      type: "future",
      todaysDate: i - lastDayofMonth + 1,
      month: todaysMonth === 11 ? 0 : todaysMonth + 1,
      year: todaysMonth === 11 ? todaysYear + 1 : todaysYear,
      id: i + "future",
    });
  }
  calendarData.dateInfo = dateInfo;
};

const changeMonth = (next) => {
  if (next) {
    todaysMonth++;
  } else {
    todaysMonth--;
  }
  if (todaysMonth < 0 || todaysMonth > 11) {
    todaysDate = new Date(todaysYear, todaysMonth, new Date().getDate());
    todaysYear = todaysDate.getFullYear();
    todaysMonth = todaysDate.getMonth();
  } else {
    todaysDate = new Date();
  }
  renderCalendar();
};
</script>

<style scoped>
.calendar ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  overflow: hidden;
}

.calendar li {
  width: calc(100% / 7);
}

.weeks li {
  text-align: center;
  padding: 0.3rem;
  border: 1px solid grey;
}

.days li {
  text-align: end;
  padding-bottom: 0.8rem;
  border: grey 1px solid;
}
</style>
