import {makerspace} from './makerspace'
import {calendar} from './calendar'
import {schedules} from './schedules'
import {staff} from './staff'
import {yearlyinfo} from './yearlyinfo'
import {erlenwein} from './erlenwein'
import {terrusa} from './terrusa'
import {resources} from './resources'
import {opportunities} from './opportunities'
import {partnerships} from './partnerships'
import {defineType} from 'sanity'
import {summerHomework} from './summerHomework'
import {directLinks} from './directLinks'
import {athletics} from './athletics'
import {alumniNews} from './alumniNews'
import {alumOpportunities} from './alumOpportunities'
import {transcript} from './transcript'
import {cdcNews} from './cdcNews'
import {video} from './video'
import {parent} from './parent'
import {policy} from './policy'

export const timeValueType = defineType({
  name: 'timeValue',
  title: 'Time',
  type: 'string',
  options: {
    list: ALLOWED_TIMES(),
  },
})

export function ALLOWED_TIMES() {
  const times = []
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += 30) {
      times.push(`${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`)
    }
  }
  return times
}

export const schemaTypes = [
  calendar,
  erlenwein,
  schedules,
  staff,
  terrusa,
  timeValueType,
  yearlyinfo,
  resources,
  opportunities,
  summerHomework,
  partnerships,
  directLinks,
  athletics,
  makerspace,
  alumniNews,
  alumOpportunities,
  transcript,
  cdcNews,
  video,
  parent,
  policy,
]
