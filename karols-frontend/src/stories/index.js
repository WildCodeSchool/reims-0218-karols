import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"
import { Button, Welcome } from "@storybook/react/demo"

import "bootstrap/dist/css/bootstrap.min.css"

import ChoiceShop from "../components/ChoiceShop"
import PrestationLabel from "../components/PrestationLabel"
import ReservationTitle from "../components/ReservationTitle"
import ListChoiceService from "../components/ListChoiceService"
import Logo from "../components/Logo"
import SelectClient from "../components/SelectClient"
import ChoiceService from "../components/ChoiceService"
import InfoClient from "../components/InfoClient"
import Footer from "../components/Footer"
import CalendarTime from "../components/CalendarTime"
import CalendarDay from "../components/CalendarDay"
import Header from "../components/Header"
import ChoicePrestation from "../components/ChoicePrestation"
import ListChoicePrestation from "../components/ListChoicePrestation"
import ListCalendarTime from "../components/ListCalendarTime"
import ListCalendarDayTime from "../components/ListCalendarDayTime"
import ResultCalendar from "../components/ResultCalendar"
import ListChoiceGender from "../components/ListChoiceGender"
import Page from "../components/Page"
import ValidationReservationButton from "../components/ValidationReservationButton"
import PreferredDateChoice from "../components/PreferredDateChoice"
import CardHover from "../components/CardHover"
import ListChoiceShop from "../components/ListChoiceShop"
import CardModel from "../components/CardModel"
import Resume from "../components/Resume"
import Counter from "../components/Counter"

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
))

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))

storiesOf("Page", module).add("Page with all the content", () => <Page />)

storiesOf("ChoiceShop", module).add("choice your shop", () => <ChoiceShop />)

storiesOf("ListChoiceShop", module).add("List choice Shop render", () => (
  <ListChoiceShop />
))

storiesOf("ValidationReservationButton", module).add(
  "Recapitulative button",
  () => <ValidationReservationButton />
)

storiesOf("SelectClient", module).add("Selected client", () => <SelectClient />)

storiesOf("CardHover", module).add("just a CardHover", () => <CardHover />)

storiesOf("Footer", module).add("just a footer", () => <Footer />)

storiesOf("InfoClient", module).add("just an information on customer", () => (
  <InfoClient />
))

storiesOf("PrestationLabel", module).add("just a title", () => (
  <PrestationLabel />
))

storiesOf("ReservationTitle", module).add(
  "The Reservation Title Component",
  () => <ReservationTitle />
)
storiesOf("ListChoiceService", module).add("List choice service render", () => (
  <ListChoiceService />
))

storiesOf("Logo", module).add("Logo render", () => <Logo />)

storiesOf("ChoiceService", module).add("Choice service render", () => (
  <ChoiceService />
))

storiesOf("Header", module).add("Header render", () => <Header />)

storiesOf("ChoicePrestation", module).add("ChoicePrestation render", () => (
  <ChoicePrestation />
))

storiesOf("Resume", module).add("Resume render", () => (
  <Resume
    shop="Paris"
    preparation="preparation"
    gender="une Femme"
    prestation="Maquillage ultime"
    prestation2="Coiffure belle gosse"
    horaire="Dimanche à 23H"
  />
))

storiesOf("ListChoiceGender", module).add("ListChoicegender render", () => (
  <ListChoiceGender />
))

storiesOf("ListChoicePrestation", module).add(
  "ListChoicePrestation render",
  () => <ListChoicePrestation />
)

storiesOf("PreferredDateChoice", module).add("Preferred Date Choice", () => (
  <PreferredDateChoice />
))

const timeSlot = {
  available: true,
  time: {
    s: "2018-07-25T09:00:00.000+02:00",
    e: "2018-07-25T09:15:00.000+02:00",
    invalid: null
  }
}

storiesOf("CalendarTime", module).add("Render CalendarTime", () => (
  <CalendarTime timeSlot={timeSlot} />
))

const timeSlots = [
  {
    available: true,
    time: {
      s: "2018-07-25T09:00:00.000+02:00",
      e: "2018-07-25T09:15:00.000+02:00",
      invalid: null
    }
  },
  {
    available: true,
    time: {
      s: "2018-07-25T09:15:00.000+02:00",
      e: "2018-07-25T09:30:00.000+02:00",
      invalid: null
    }
  },
  {
    available: true,
    time: {
      s: "2018-07-25T09:30:00.000+02:00",
      e: "2018-07-25T09:45:00.000+02:00",
      invalid: null
    }
  },
  {
    available: true,
    time: {
      s: "2018-07-25T09:45:00.000+02:00",
      e: "2018-07-25T10:00:00.000+02:00",
      invalid: null
    }
  },
  {
    available: true,
    time: {
      s: "2018-07-25T10:00:00.000+02:00",
      e: "2018-07-25T10:15:00.000+02:00",
      invalid: null
    }
  },
  {
    available: true,
    time: {
      s: "2018-07-25T10:15:00.000+02:00",
      e: "2018-07-25T10:30:00.000+02:00",
      invalid: null
    }
  },
  {
    available: true,
    time: {
      s: "2018-07-25T10:30:00.000+02:00",
      e: "2018-07-25T10:45:00.000+02:00",
      invalid: null
    }
  },
  {
    available: true,
    time: {
      s: "2018-07-25T10:45:00.000+02:00",
      e: "2018-07-25T11:00:00.000+02:00",
      invalid: null
    }
  },
  {
    available: true,
    time: {
      s: "2018-07-25T11:00:00.000+02:00",
      e: "2018-07-25T11:15:00.000+02:00",
      invalid: null
    }
  },
  {
    available: true,
    time: {
      s: "2018-07-25T11:15:00.000+02:00",
      e: "2018-07-25T11:30:00.000+02:00",
      invalid: null
    }
  },
  {
    available: true,
    time: {
      s: "2018-07-25T11:30:00.000+02:00",
      e: "2018-07-25T11:45:00.000+02:00",
      invalid: null
    }
  },
  {
    available: true,
    time: {
      s: "2018-07-25T11:45:00.000+02:00",
      e: "2018-07-25T12:00:00.000+02:00",
      invalid: null
    }
  },
  {
    available: true,
    time: {
      s: "2018-07-25T12:00:00.000+02:00",
      e: "2018-07-25T12:15:00.000+02:00",
      invalid: null
    }
  },
  {
    available: true,
    time: {
      s: "2018-07-25T12:15:00.000+02:00",
      e: "2018-07-25T12:30:00.000+02:00",
      invalid: null
    }
  },
  {
    available: true,
    time: {
      s: "2018-07-25T12:30:00.000+02:00",
      e: "2018-07-25T12:45:00.000+02:00",
      invalid: null
    }
  },
  {
    available: true,
    time: {
      s: "2018-07-25T12:45:00.000+02:00",
      e: "2018-07-25T13:00:00.000+02:00",
      invalid: null
    }
  },
  {
    available: true,
    time: {
      s: "2018-07-25T13:00:00.000+02:00",
      e: "2018-07-25T13:15:00.000+02:00",
      invalid: null
    }
  },
  {
    available: true,
    time: {
      s: "2018-07-25T13:15:00.000+02:00",
      e: "2018-07-25T13:30:00.000+02:00",
      invalid: null
    }
  },
  {
    available: true,
    time: {
      s: "2018-07-25T13:30:00.000+02:00",
      e: "2018-07-25T13:45:00.000+02:00",
      invalid: null
    }
  },
  {
    available: true,
    time: {
      s: "2018-07-25T13:45:00.000+02:00",
      e: "2018-07-25T14:00:00.000+02:00",
      invalid: null
    }
  },
  {
    available: true,
    time: {
      s: "2018-07-25T14:00:00.000+02:00",
      e: "2018-07-25T14:15:00.000+02:00",
      invalid: null
    }
  },
  {
    available: true,
    time: {
      s: "2018-07-25T14:15:00.000+02:00",
      e: "2018-07-25T14:30:00.000+02:00",
      invalid: null
    }
  },
  {
    available: true,
    time: {
      s: "2018-07-25T14:30:00.000+02:00",
      e: "2018-07-25T14:45:00.000+02:00",
      invalid: null
    }
  },
  {
    available: true,
    time: {
      s: "2018-07-25T14:45:00.000+02:00",
      e: "2018-07-25T15:00:00.000+02:00",
      invalid: null
    }
  },
  {
    available: true,
    time: {
      s: "2018-07-25T15:00:00.000+02:00",
      e: "2018-07-25T15:15:00.000+02:00",
      invalid: null
    }
  },
  {
    available: true,
    time: {
      s: "2018-07-25T15:15:00.000+02:00",
      e: "2018-07-25T15:30:00.000+02:00",
      invalid: null
    }
  },
  {
    available: true,
    time: {
      s: "2018-07-25T15:30:00.000+02:00",
      e: "2018-07-25T15:45:00.000+02:00",
      invalid: null
    }
  },
  {
    available: true,
    time: {
      s: "2018-07-25T15:45:00.000+02:00",
      e: "2018-07-25T16:00:00.000+02:00",
      invalid: null
    }
  },
  {
    available: true,
    time: {
      s: "2018-07-25T16:00:00.000+02:00",
      e: "2018-07-25T16:15:00.000+02:00",
      invalid: null
    }
  },
  {
    available: true,
    time: {
      s: "2018-07-25T16:15:00.000+02:00",
      e: "2018-07-25T16:30:00.000+02:00",
      invalid: null
    }
  },
  {
    available: true,
    time: {
      s: "2018-07-25T16:30:00.000+02:00",
      e: "2018-07-25T16:45:00.000+02:00",
      invalid: null
    }
  },
  {
    available: true,
    time: {
      s: "2018-07-25T16:45:00.000+02:00",
      e: "2018-07-25T17:00:00.000+02:00",
      invalid: null
    }
  },
  {
    available: true,
    time: {
      s: "2018-07-25T17:00:00.000+02:00",
      e: "2018-07-25T17:15:00.000+02:00",
      invalid: null
    }
  },
  {
    available: true,
    time: {
      s: "2018-07-25T17:15:00.000+02:00",
      e: "2018-07-25T17:30:00.000+02:00",
      invalid: null
    }
  },
  {
    available: true,
    time: {
      s: "2018-07-25T17:30:00.000+02:00",
      e: "2018-07-25T17:45:00.000+02:00",
      invalid: null
    }
  },
  {
    available: true,
    time: {
      s: "2018-07-25T17:45:00.000+02:00",
      e: "2018-07-25T18:00:00.000+02:00",
      invalid: null
    }
  }
]

storiesOf("ListCalendarTime", module).add("Render the calendar", () => (
  <ListCalendarTime timeSlots={timeSlots} />
))

const date = "2018-07-25T00:00:00.000+02:00"

//  CalendarDay
storiesOf("CalendarDay", module).add("Render the calendar day", () => (
  <CalendarDay date={day.date} />
))

//ListCalendarDayTime
storiesOf("ListCalendarDayTime", module).add(
  "Render the calendar with time",
  () => <ListCalendarDayTime day={day} />
)

const day = {
  date: "2018-07-25T00:00:00.000+02:00",
  timeSlots: [
    {
      available: true,
      time: {
        s: "2018-07-25T09:00:00.000+02:00",
        e: "2018-07-25T09:15:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T09:15:00.000+02:00",
        e: "2018-07-25T09:30:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T09:30:00.000+02:00",
        e: "2018-07-25T09:45:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T09:45:00.000+02:00",
        e: "2018-07-25T10:00:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T10:00:00.000+02:00",
        e: "2018-07-25T10:15:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T10:15:00.000+02:00",
        e: "2018-07-25T10:30:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T10:30:00.000+02:00",
        e: "2018-07-25T10:45:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T10:45:00.000+02:00",
        e: "2018-07-25T11:00:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T11:00:00.000+02:00",
        e: "2018-07-25T11:15:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T11:15:00.000+02:00",
        e: "2018-07-25T11:30:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T11:30:00.000+02:00",
        e: "2018-07-25T11:45:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T11:45:00.000+02:00",
        e: "2018-07-25T12:00:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T12:00:00.000+02:00",
        e: "2018-07-25T12:15:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T12:15:00.000+02:00",
        e: "2018-07-25T12:30:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T12:30:00.000+02:00",
        e: "2018-07-25T12:45:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T12:45:00.000+02:00",
        e: "2018-07-25T13:00:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T13:00:00.000+02:00",
        e: "2018-07-25T13:15:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T13:15:00.000+02:00",
        e: "2018-07-25T13:30:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T13:30:00.000+02:00",
        e: "2018-07-25T13:45:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T13:45:00.000+02:00",
        e: "2018-07-25T14:00:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T14:00:00.000+02:00",
        e: "2018-07-25T14:15:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T14:15:00.000+02:00",
        e: "2018-07-25T14:30:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T14:30:00.000+02:00",
        e: "2018-07-25T14:45:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T14:45:00.000+02:00",
        e: "2018-07-25T15:00:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T15:00:00.000+02:00",
        e: "2018-07-25T15:15:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T15:15:00.000+02:00",
        e: "2018-07-25T15:30:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T15:30:00.000+02:00",
        e: "2018-07-25T15:45:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T15:45:00.000+02:00",
        e: "2018-07-25T16:00:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T16:00:00.000+02:00",
        e: "2018-07-25T16:15:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T16:15:00.000+02:00",
        e: "2018-07-25T16:30:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T16:30:00.000+02:00",
        e: "2018-07-25T16:45:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T16:45:00.000+02:00",
        e: "2018-07-25T17:00:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T17:00:00.000+02:00",
        e: "2018-07-25T17:15:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T17:15:00.000+02:00",
        e: "2018-07-25T17:30:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T17:30:00.000+02:00",
        e: "2018-07-25T17:45:00.000+02:00",
        invalid: null
      }
    },
    {
      available: true,
      time: {
        s: "2018-07-25T17:45:00.000+02:00",
        e: "2018-07-25T18:00:00.000+02:00",
        invalid: null
      }
    }
  ]
}

// ResultCalendar
storiesOf("ResultCalendar", module).add("Render the calendar with time", () => (
  <ResultCalendar weekTimeSlots={weekTimeSlots} />
))

// timeslots of the week from the server
const weekTimeSlots = [
  {
    date: "2018-07-25T00:00:00.000+02:00",
    timeSlots: [
      {
        available: true,
        time: {
          s: "2018-07-25T09:00:00.000+02:00",
          e: "2018-07-25T09:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-25T09:15:00.000+02:00",
          e: "2018-07-25T09:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-25T09:30:00.000+02:00",
          e: "2018-07-25T09:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-25T09:45:00.000+02:00",
          e: "2018-07-25T10:00:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-25T10:00:00.000+02:00",
          e: "2018-07-25T10:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-25T10:15:00.000+02:00",
          e: "2018-07-25T10:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-25T10:30:00.000+02:00",
          e: "2018-07-25T10:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-25T10:45:00.000+02:00",
          e: "2018-07-25T11:00:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-25T11:00:00.000+02:00",
          e: "2018-07-25T11:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-25T11:15:00.000+02:00",
          e: "2018-07-25T11:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-25T11:30:00.000+02:00",
          e: "2018-07-25T11:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-25T11:45:00.000+02:00",
          e: "2018-07-25T12:00:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-25T12:00:00.000+02:00",
          e: "2018-07-25T12:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-25T12:15:00.000+02:00",
          e: "2018-07-25T12:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-25T12:30:00.000+02:00",
          e: "2018-07-25T12:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-25T12:45:00.000+02:00",
          e: "2018-07-25T13:00:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-25T13:00:00.000+02:00",
          e: "2018-07-25T13:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-25T13:15:00.000+02:00",
          e: "2018-07-25T13:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-25T13:30:00.000+02:00",
          e: "2018-07-25T13:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-25T13:45:00.000+02:00",
          e: "2018-07-25T14:00:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-25T14:00:00.000+02:00",
          e: "2018-07-25T14:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-25T14:15:00.000+02:00",
          e: "2018-07-25T14:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-25T14:30:00.000+02:00",
          e: "2018-07-25T14:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-25T14:45:00.000+02:00",
          e: "2018-07-25T15:00:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-25T15:00:00.000+02:00",
          e: "2018-07-25T15:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-25T15:15:00.000+02:00",
          e: "2018-07-25T15:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-25T15:30:00.000+02:00",
          e: "2018-07-25T15:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-25T15:45:00.000+02:00",
          e: "2018-07-25T16:00:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-25T16:00:00.000+02:00",
          e: "2018-07-25T16:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-25T16:15:00.000+02:00",
          e: "2018-07-25T16:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-25T16:30:00.000+02:00",
          e: "2018-07-25T16:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-25T16:45:00.000+02:00",
          e: "2018-07-25T17:00:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-25T17:00:00.000+02:00",
          e: "2018-07-25T17:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-25T17:15:00.000+02:00",
          e: "2018-07-25T17:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-25T17:30:00.000+02:00",
          e: "2018-07-25T17:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-25T17:45:00.000+02:00",
          e: "2018-07-25T18:00:00.000+02:00",
          invalid: null
        }
      }
    ]
  },
  {
    date: "2018-07-26T00:00:00.000+02:00",
    timeSlots: [
      {
        available: true,
        time: {
          s: "2018-07-26T09:00:00.000+02:00",
          e: "2018-07-26T09:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-26T09:15:00.000+02:00",
          e: "2018-07-26T09:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-26T09:30:00.000+02:00",
          e: "2018-07-26T09:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-26T09:45:00.000+02:00",
          e: "2018-07-26T10:00:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-26T10:00:00.000+02:00",
          e: "2018-07-26T10:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-26T10:15:00.000+02:00",
          e: "2018-07-26T10:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-26T10:30:00.000+02:00",
          e: "2018-07-26T10:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-26T10:45:00.000+02:00",
          e: "2018-07-26T11:00:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-26T11:00:00.000+02:00",
          e: "2018-07-26T11:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-26T11:15:00.000+02:00",
          e: "2018-07-26T11:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-26T11:30:00.000+02:00",
          e: "2018-07-26T11:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-26T11:45:00.000+02:00",
          e: "2018-07-26T12:00:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-26T12:00:00.000+02:00",
          e: "2018-07-26T12:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-26T12:15:00.000+02:00",
          e: "2018-07-26T12:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-26T12:30:00.000+02:00",
          e: "2018-07-26T12:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-26T12:45:00.000+02:00",
          e: "2018-07-26T13:00:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-26T13:00:00.000+02:00",
          e: "2018-07-26T13:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-26T13:15:00.000+02:00",
          e: "2018-07-26T13:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-26T13:30:00.000+02:00",
          e: "2018-07-26T13:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-26T13:45:00.000+02:00",
          e: "2018-07-26T14:00:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-26T14:00:00.000+02:00",
          e: "2018-07-26T14:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-26T14:15:00.000+02:00",
          e: "2018-07-26T14:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-26T14:30:00.000+02:00",
          e: "2018-07-26T14:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-26T14:45:00.000+02:00",
          e: "2018-07-26T15:00:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-26T15:00:00.000+02:00",
          e: "2018-07-26T15:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-26T15:15:00.000+02:00",
          e: "2018-07-26T15:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-26T15:30:00.000+02:00",
          e: "2018-07-26T15:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-26T15:45:00.000+02:00",
          e: "2018-07-26T16:00:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-26T16:00:00.000+02:00",
          e: "2018-07-26T16:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-26T16:15:00.000+02:00",
          e: "2018-07-26T16:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-26T16:30:00.000+02:00",
          e: "2018-07-26T16:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-26T16:45:00.000+02:00",
          e: "2018-07-26T17:00:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-26T17:00:00.000+02:00",
          e: "2018-07-26T17:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-26T17:15:00.000+02:00",
          e: "2018-07-26T17:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-26T17:30:00.000+02:00",
          e: "2018-07-26T17:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-26T17:45:00.000+02:00",
          e: "2018-07-26T18:00:00.000+02:00",
          invalid: null
        }
      }
    ]
  },
  {
    date: "2018-07-27T00:00:00.000+02:00",
    timeSlots: [
      {
        available: true,
        time: {
          s: "2018-07-27T09:00:00.000+02:00",
          e: "2018-07-27T09:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-27T09:15:00.000+02:00",
          e: "2018-07-27T09:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-27T09:30:00.000+02:00",
          e: "2018-07-27T09:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-27T09:45:00.000+02:00",
          e: "2018-07-27T10:00:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-27T10:00:00.000+02:00",
          e: "2018-07-27T10:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-27T10:15:00.000+02:00",
          e: "2018-07-27T10:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-27T10:30:00.000+02:00",
          e: "2018-07-27T10:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-27T10:45:00.000+02:00",
          e: "2018-07-27T11:00:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-27T11:00:00.000+02:00",
          e: "2018-07-27T11:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-27T11:15:00.000+02:00",
          e: "2018-07-27T11:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-27T11:30:00.000+02:00",
          e: "2018-07-27T11:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-27T11:45:00.000+02:00",
          e: "2018-07-27T12:00:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-27T12:00:00.000+02:00",
          e: "2018-07-27T12:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-27T12:15:00.000+02:00",
          e: "2018-07-27T12:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-27T12:30:00.000+02:00",
          e: "2018-07-27T12:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-27T12:45:00.000+02:00",
          e: "2018-07-27T13:00:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-27T13:00:00.000+02:00",
          e: "2018-07-27T13:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-27T13:15:00.000+02:00",
          e: "2018-07-27T13:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-27T13:30:00.000+02:00",
          e: "2018-07-27T13:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-27T13:45:00.000+02:00",
          e: "2018-07-27T14:00:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-27T14:00:00.000+02:00",
          e: "2018-07-27T14:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-27T14:15:00.000+02:00",
          e: "2018-07-27T14:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-27T14:30:00.000+02:00",
          e: "2018-07-27T14:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-27T14:45:00.000+02:00",
          e: "2018-07-27T15:00:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-27T15:00:00.000+02:00",
          e: "2018-07-27T15:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-27T15:15:00.000+02:00",
          e: "2018-07-27T15:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-27T15:30:00.000+02:00",
          e: "2018-07-27T15:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-27T15:45:00.000+02:00",
          e: "2018-07-27T16:00:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-27T16:00:00.000+02:00",
          e: "2018-07-27T16:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-27T16:15:00.000+02:00",
          e: "2018-07-27T16:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-27T16:30:00.000+02:00",
          e: "2018-07-27T16:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-27T16:45:00.000+02:00",
          e: "2018-07-27T17:00:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-27T17:00:00.000+02:00",
          e: "2018-07-27T17:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-27T17:15:00.000+02:00",
          e: "2018-07-27T17:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-27T17:30:00.000+02:00",
          e: "2018-07-27T17:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-27T17:45:00.000+02:00",
          e: "2018-07-27T18:00:00.000+02:00",
          invalid: null
        }
      }
    ]
  },
  {
    date: "2018-07-28T00:00:00.000+02:00",
    timeSlots: [
      {
        available: true,
        time: {
          s: "2018-07-28T09:00:00.000+02:00",
          e: "2018-07-28T09:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-28T09:15:00.000+02:00",
          e: "2018-07-28T09:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-28T09:30:00.000+02:00",
          e: "2018-07-28T09:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-28T09:45:00.000+02:00",
          e: "2018-07-28T10:00:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-28T10:00:00.000+02:00",
          e: "2018-07-28T10:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-28T10:15:00.000+02:00",
          e: "2018-07-28T10:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-28T10:30:00.000+02:00",
          e: "2018-07-28T10:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-28T10:45:00.000+02:00",
          e: "2018-07-28T11:00:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-28T11:00:00.000+02:00",
          e: "2018-07-28T11:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-28T11:15:00.000+02:00",
          e: "2018-07-28T11:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-28T11:30:00.000+02:00",
          e: "2018-07-28T11:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-28T11:45:00.000+02:00",
          e: "2018-07-28T12:00:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-28T12:00:00.000+02:00",
          e: "2018-07-28T12:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-28T12:15:00.000+02:00",
          e: "2018-07-28T12:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-28T12:30:00.000+02:00",
          e: "2018-07-28T12:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-28T12:45:00.000+02:00",
          e: "2018-07-28T13:00:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-28T13:00:00.000+02:00",
          e: "2018-07-28T13:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-28T13:15:00.000+02:00",
          e: "2018-07-28T13:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-28T13:30:00.000+02:00",
          e: "2018-07-28T13:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-28T13:45:00.000+02:00",
          e: "2018-07-28T14:00:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-28T14:00:00.000+02:00",
          e: "2018-07-28T14:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-28T14:15:00.000+02:00",
          e: "2018-07-28T14:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-28T14:30:00.000+02:00",
          e: "2018-07-28T14:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-28T14:45:00.000+02:00",
          e: "2018-07-28T15:00:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-28T15:00:00.000+02:00",
          e: "2018-07-28T15:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-28T15:15:00.000+02:00",
          e: "2018-07-28T15:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-28T15:30:00.000+02:00",
          e: "2018-07-28T15:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-28T15:45:00.000+02:00",
          e: "2018-07-28T16:00:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-28T16:00:00.000+02:00",
          e: "2018-07-28T16:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-28T16:15:00.000+02:00",
          e: "2018-07-28T16:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-28T16:30:00.000+02:00",
          e: "2018-07-28T16:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-28T16:45:00.000+02:00",
          e: "2018-07-28T17:00:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-28T17:00:00.000+02:00",
          e: "2018-07-28T17:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-28T17:15:00.000+02:00",
          e: "2018-07-28T17:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-28T17:30:00.000+02:00",
          e: "2018-07-28T17:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-28T17:45:00.000+02:00",
          e: "2018-07-28T18:00:00.000+02:00",
          invalid: null
        }
      }
    ]
  },
  {
    date: "2018-07-29T00:00:00.000+02:00",
    timeSlots: [
      {
        available: true,
        time: {
          s: "2018-07-29T09:00:00.000+02:00",
          e: "2018-07-29T09:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-29T09:15:00.000+02:00",
          e: "2018-07-29T09:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-29T09:30:00.000+02:00",
          e: "2018-07-29T09:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-29T09:45:00.000+02:00",
          e: "2018-07-29T10:00:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-29T10:00:00.000+02:00",
          e: "2018-07-29T10:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-29T10:15:00.000+02:00",
          e: "2018-07-29T10:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-29T10:30:00.000+02:00",
          e: "2018-07-29T10:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-29T10:45:00.000+02:00",
          e: "2018-07-29T11:00:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-29T11:00:00.000+02:00",
          e: "2018-07-29T11:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-29T11:15:00.000+02:00",
          e: "2018-07-29T11:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-29T11:30:00.000+02:00",
          e: "2018-07-29T11:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-29T11:45:00.000+02:00",
          e: "2018-07-29T12:00:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-29T12:00:00.000+02:00",
          e: "2018-07-29T12:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-29T12:15:00.000+02:00",
          e: "2018-07-29T12:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-29T12:30:00.000+02:00",
          e: "2018-07-29T12:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-29T12:45:00.000+02:00",
          e: "2018-07-29T13:00:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-29T13:00:00.000+02:00",
          e: "2018-07-29T13:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-29T13:15:00.000+02:00",
          e: "2018-07-29T13:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-29T13:30:00.000+02:00",
          e: "2018-07-29T13:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-29T13:45:00.000+02:00",
          e: "2018-07-29T14:00:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-29T14:00:00.000+02:00",
          e: "2018-07-29T14:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-29T14:15:00.000+02:00",
          e: "2018-07-29T14:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-29T14:30:00.000+02:00",
          e: "2018-07-29T14:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-29T14:45:00.000+02:00",
          e: "2018-07-29T15:00:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-29T15:00:00.000+02:00",
          e: "2018-07-29T15:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-29T15:15:00.000+02:00",
          e: "2018-07-29T15:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-29T15:30:00.000+02:00",
          e: "2018-07-29T15:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-29T15:45:00.000+02:00",
          e: "2018-07-29T16:00:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-29T16:00:00.000+02:00",
          e: "2018-07-29T16:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-29T16:15:00.000+02:00",
          e: "2018-07-29T16:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-29T16:30:00.000+02:00",
          e: "2018-07-29T16:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-29T16:45:00.000+02:00",
          e: "2018-07-29T17:00:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-29T17:00:00.000+02:00",
          e: "2018-07-29T17:15:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-29T17:15:00.000+02:00",
          e: "2018-07-29T17:30:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-29T17:30:00.000+02:00",
          e: "2018-07-29T17:45:00.000+02:00",
          invalid: null
        }
      },
      {
        available: true,
        time: {
          s: "2018-07-29T17:45:00.000+02:00",
          e: "2018-07-29T18:00:00.000+02:00",
          invalid: null
        }
      }
    ]
  }
]

// const transformWeekTimeSlots = weekTimeSlots =>
//   weekTimeSlots.map(dayTimeSlots =>
//     dayTimeSlots.timeSlots.map(timeSlot => {
//       return DateTime.fromISO(timeSlot.time.s)
//         .setLocale("fr")
//         .toFormat("T")
//     })
//   )

// // console.log(arrayOfTimes)

// storiesOf("ResultCalendar", module).add("Render the calendar with time", () => (
//   <ResultCalendar />
// ))

const showCounter = true

const handleMinus = () => {
  console.log("Moins")
}

const handlePlus = () => {
  console.log("Plus")
}

storiesOf("Counter", module).add(
  "Counter render",
  () =>
    showCounter && (
      <Counter
        handleMinus={handleMinus}
        handlePlus={handlePlus}
        count={5}
        showCounter={true}
      />
    )
)

storiesOf("CardModelGender", module).add(
  "CardModelGender render",
  () =>
    showCounter && (
      <Counter
        handleMinus={handleMinus}
        handlePlus={handlePlus}
        count={5}
        showCounter={true}
      />
    )
)

const prestations = [
  {
    prestations: [
      {
        id: 1,
        name: "Maquillage",
        image: "",
        description: "",
        gender: "F",
        preparations: [
          {
            id: 1,
            selected: false,
            count: 0,
            image: "http://localhost:8000/images/preparation1.1.png",
            info:
              "https://www.mille-et-une-bieres.fr/les-boutiques/boutique-de-reims/",
            titlePreparation:
              "Maquillage' focus sur un élément' ou 'effet bonne mine' (au choix)",
            duration: {
              minutes: 20
            },
            price: 550,
            choices: [
              {
                id: 1,
                title: "Uniforme et 'Effet bonne mine', sur tout le visage",
                options: []
              },
              {
                id: 2,
                title: "Focus plus prononcé sur un élément de votre choix",
                options: [
                  "Charbonneux",
                  "Graphique",
                  "Coloré",
                  "Spécial soirée",
                  "Glamour",
                  "Rétro (eyeliner ou bouche)"
                ]
              }
            ]
          },
          {
            id: 2,
            selected: false,
            count: 0,
            image: "http://mille-et-une-bieres-champigny.business.site/",
            info:
              "https://www.1jour1vin.com/fr/vin-champagne?s=GOOGLE-RWD&o=295&p=2&v=wmPr87&gclid=CjwKCAjw68zZBRAnEiwACw0eYRL1riv_mm8L8uRt-zi9RK1rolzk73MRDXJo2mfMnEFP2taCbpUTQRoCMAEQAvD_BwE",
            titlePreparation: "Maquillage KAROLS",
            duration: {
              minutes: 30
            },
            price: 701,
            choices: [
              {
                id: 1,
                title:
                  "Maquillage très complet avec un focus plus important sur les yeux",
                options: [
                  "Soirée",
                  "Coloré",
                  "Lumineux",
                  "Charbonneux",
                  "Glamour",
                  "Rétro",
                  "Coréen",
                  "Graphique (liners colorés variés)",
                  "Spécial shooting photo"
                ]
              }
            ]
          },
          {
            id: 3,
            selected: false,
            count: 0,
            image:
              "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5aa1d44d3153feb30a3ac5dbf9bbccd3&auto=format&fit=crop&w=1051&q=80",
            titlePreparation: "Maquillage ultime",
            info: "https://your-cbd-store.jimdofree.com/",
            duration: {
              minutes: 45
            },
            price: 83,
            choices: [
              {
                id: 1,
                title: "Maquillage avec un focus absolu sur tous les éléments",
                options: [
                  "Mariage",
                  "Grands événements (galas, diplomations, jour de l'an)",
                  "Festivals",
                  "Halloween simple",
                  "Spécial shooting photo ou artistique",
                  "Instagram (pour sculpter au mieux les contours de ton beau visage)",
                  "Effet particulier (strobing, holographique etc)"
                ]
              }
            ]
          }
        ]
      },
      {
        id: 2,
        name: "Coiffure",
        image: "",
        description: "",
        gender: "F",
        preparations: [
          {
            id: 1,
            selected: false,
            count: 0,
            image: "http://localhost:8000/images/preparation2.1.png",
            info:
              "https://www.vinatis.com/spiritueux-vodka#p1&n15&t7&f[]73[]190577:f[]27[]11427[]s",
            titlePreparation: "Coiffure stylisée",
            duration: {
              minutes: 20
            },
            price: 2,
            choices: [
              {
                id: 1,
                title: "Coiffure personnalisable",
                options: [
                  "Lissage",
                  "Brushing",
                  "Brushing volume(cheveux courts)",
                  "Coiffure working-girl (entretiens d'embauche etc)",
                  "Ondulations ou 'Wavy Hair' (cheveux courts)",
                  "Tresse plaquée d'un côté de la tête ",
                  "Tresse bohème (classique ou en épi de blé)",
                  "Tresse (classique ou africaine)",
                  "Chignon classique"
                ]
              }
            ]
          },
          {
            id: 2,
            selected: false,
            count: 0,
            image: "http://localhost:8000/images/preparation2.2.jpg",
            info:
              "https://www.wildness.fr/lancer-de-haches/?gclid=CjwKCAjw68zZBRAnEiwACw0eYajjlmS25u_as-TS4g-mMReBSk90FEYk2CVuzZpN3DtwNGx0Yy3RbhoCZ8sQAvD_BwE",
            titlePreparation: "Coiffure stylisée élaborée",
            duration: {
              minutes: 30
            },
            price: 65,
            choices: [
              {
                id: 1,
                title: "Coiffure sur mesure",
                options: [
                  "Coiffure à boucles et/ou tresses",
                  "Ondulations ou 'Wavy Hair' (cheveux longs)",
                  "Base tête nette et tresse en épi de blé",
                  "Couronne de tresses sur mesure",
                  "Volume extrême (cheveux longs)",
                  "Coiffures avec un effet bombé",
                  "Tresse africaines doubles",
                  "Tresse(s) oversize ou spéciale(s)",
                  "Chignons élaborés"
                ]
              }
            ]
          },
          {
            id: 3,
            selected: false,
            count: 0,
            image: "http://localhost:8000/images/preparation2.3.png",
            titlePreparation: "Coiffure stylisée très élaborée",
            duration: {
              minutes: 45
            },
            price: 23,
            choices: [
              {
                id: 1,
                title: "Coiffure premium de 45 minutes",
                options: [
                  "Mariage",
                  "Coiffures à boucles très élaborées",
                  "Coiffures à tresses très élaborées",
                  "Grands événements (galas, festivals, diplomations, jour de l'an, etc).",
                  "Coiffures très stylisées (défilés, etc)",
                  "Chignons très stylisées (accompagnés de nouvelles boucles)",
                  "Demandes spéciales (shootings photos, tournages, théâtre, etc)",
                  ""
                ]
              }
            ]
          }
        ]
      },
      {
        id: 3,
        name: "Coupes",
        image: "",
        description: "",
        gender: "F",
        preparations: [
          {
            id: 1,
            selected: false,
            count: 0,
            image: "http://localhost:8000/images/preparation3.1.png",
            titlePreparation: "Coupe classique",
            duration: {
              minutes: 20
            },
            price: 16,
            choices: [
              {
                id: 1,
                title: "Coiffure personnalisable",
                options: [
                  "Des coupes droites",
                  "Des coupes de pointes",
                  "Des dégradés simples"
                ]
              }
            ]
          },
          {
            id: 2,
            selected: false,
            count: 0,
            image: "http://localhost:8000/images/preparation3.2.png",
            titlePreparation: "Coupe très stylisée",
            duration: {
              minutes: 30
            },
            price: 24,
            choices: [
              {
                id: 1,
                title: "",
                options: [
                  "Des coupes très dégradées",
                  "Des coupes spéciales changements de look (ex: carré plongeant sur cheveux longs"
                ]
              }
            ]
          }
        ]
      },
      {
        id: 4,
        name: "Vernis",
        image: "",
        description: "",
        gender: "F",
        preparations: [
          {
            id: 1,
            selected: false,
            count: 0,
            image: "http://localhost:8000/images/preparation7.jpg",
            titlePreparation: "Pose de vernis au choix",
            duration: {
              minutes: 10
            },
            price: 7.5,
            choices: [
              {
                id: 1,
                title: "Vernis",
                options: []
              }
            ]
          }
        ]
      },
      {
        id: 5,
        name: "Coiffure",
        image: "",
        description: "",
        gender: "M",
        preparations: [
          {
            id: 1,
            selected: false,
            count: 0,
            image: "http://localhost:8000/images/preparation10.png",
            titlePreparation: "Coupe 1",
            duration: {
              minutes: 20
            },
            price: 16,
            choices: [
              {
                id: 1,
                title: "Coupe et stylling",
                options: []
              }
            ]
          }
        ]
      },
      {
        id: 6,
        name: "Barbe",
        image: "",
        description: "",
        gender: "M",
        preparations: [
          {
            id: 1,
            selected: false,
            count: 0,
            image: "http://localhost:8000/images/preparation11.png",
            info: "http://palf.free.fr/portrait/vocabulaire.htm",
            titlePreparation: "Barbe 1",
            duration: {
              minutes: 20
            },
            price: 16
          }
        ]
      }
    ],
    services: [
      {
        id: 1,
        name: "Préparation",
        image:
          "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e93589105d9189784b921b9b22be9826&auto=format&fit=crop&w=675&q=80",
        description: "Venez vous faire maquiller",
        selected: false
      },
      {
        id: 2,
        name: "Table",
        image:
          "https://images.unsplash.com/photo-1511914678378-2906b1f69dcf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0c0b02af4a4d6b94d894d454ef2d3e53&auto=format&fit=crop&w=634&q=80",
        description: "Venez boire un coup",
        selected: false
      },
      {
        id: 3,
        name: "Table + préparation",
        image:
          "https://images.unsplash.com/photo-1522936643032-5f3cde4cad06?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2a95c6a3a64dcf92424155361476dfc4&auto=format&fit=crop&w=1536&q=80",
        description: "Venez vous faire maquiller et prendre un petit coup",
        selected: false
      }
    ],
    shops: [
      {
        id: 1,
        city: "Paris",
        address: "75000",
        image:
          "https://images.unsplash.com/photo-1438955138287-0c090d2290d5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6df7d8e3bf9a1b0952511d2c99000c62&auto=format&fit=crop&w=634&q=80",
        selected: false
      },
      {
        id: 2,
        city: "Lyon",
        address: "69000",
        image:
          "http://www.renderstorm.fr/wp-content/uploads/Renderstorm-Perspectiviste-Perspective-Gare-Bagneux-Ligne-15.jpg",
        selected: false
      },
      {
        id: 3,
        city: "Cannes",
        address: "06150",
        image:
          "https://images.unsplash.com/photo-1499076218749-7d639231170d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=406aca1462040924190328fcf1ea0373&auto=format&fit=crop&w=1611&q=80",
        selected: false
      }
    ],
    genders: [
      {
        sex: "M",
        selected: false,
        count: 0,
        image:
          "https://images.unsplash.com/photo-1475403614135-5f1aa0eb5015?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aa32268d819cd488975b3d92e88ab1bc&auto=format&fit=crop&w=1650&q=80"
      },
      {
        sex: "F",
        selected: false,
        count: 0,
        image:
          "https://images.unsplash.com/photo-1523264653568-d3d4032d1476?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9f5bb4869d80176df6b68e5f160b1c76&auto=format&fit=crop&w=1834&q=80"
      }
    ],
    reservation: {
      success: false
    },
    timeSlots: [],
    form: {},
    countPeopleTable: {
      count: 2
    }
  }
]

const prestation01 = {
  id: 1,
  name: "Préparation",
  image:
    "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e93589105d9189784b921b9b22be9826&auto=format&fit=crop&w=675&q=80",
  description: "Venez vous faire maquiller",
  selected: false
}

const preparation01 = {
  id: 1,
  selected: false,
  count: 0,
  image: "http://localhost:8000/images/preparation1.1.png",
  info: "https://www.mille-et-une-bieres.fr/les-boutiques/boutique-de-reims/",
  titlePreparation:
    "Maquillage' focus sur un élément' ou 'effet bonne mine' (au choix)",
  duration: {
    minutes: 20
  },
  price: 550,
  choices: [
    {
      id: 1,
      title: "Uniforme et 'Effet bonne mine', sur tout le visage",
      options: []
    }
  ]
}

storiesOf("CardModel Basic - 01 ", module).add("Render CardModel basic", () => (
  <CardModel />
))

storiesOf("CardModel Classic - 02 ", module).add(
  "Render CardModel title image description",
  () => (
    <CardModel
      title={prestation01.name}
      image={prestation01.image}
      description={prestation01.description}
    />
  )
)

storiesOf("CardModel Info - 03 ", module).add(
  "Render CardModel description info",
  () => (
    <CardModel
      title={preparation01.titlePreparation}
      image={preparation01.image}
      description={preparation01.description}
      info={preparation01.info}
    />
  )
)

storiesOf("CardModel Info - 04 ", module).add(
  "Render CardModel showCounter",
  () => (
    <CardModel
      title={preparation01.titlePreparation}
      image={preparation01.image}
      description={preparation01.description}
      info={preparation01.info}
      showCounter={true}
      count={15}
    />
  )
)

storiesOf("CardModel Info - 05 ", module).add(
  "Render CardModel Selected",
  () => (
    <CardModel
      title={preparation01.titlePreparation}
      image={preparation01.image}
      description={preparation01.description}
      info={preparation01.info}
      showCounter={true}
      count={15}
      selected={true}
    />
  )
)
