import React from "react"
import ListCalendarDayTime from "./ListCalendarDayTime"
import { Table } from "reactstrap"

const ResultCalendar = () => {
  return (
    <Table responsive>
      <tbody>
        <tr>
          <td>
            <ListCalendarDayTime />
          </td>
          <td>
            <ListCalendarDayTime />
          </td>
          <td>
            <ListCalendarDayTime />
          </td>
          <td>
            <ListCalendarDayTime />
          </td>
        </tr>
      </tbody>
    </Table>
  )
}

export default ResultCalendar
