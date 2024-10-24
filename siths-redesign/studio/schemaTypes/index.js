import { calendar } from './calendar'
import {schedules} from './schedules'
import {staff} from './staff'
import {yearlyinfo} from './yearlyinfo'
import {erlenwein} from './erlenwein'
import {terrusa} from './terrusa'
import { resources } from './resources'

import { defineType } from 'sanity'


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
  
export const schemaTypes = [calendar, erlenwein, schedules, staff, terrusa, timeValueType, yearlyinfo, resources]
