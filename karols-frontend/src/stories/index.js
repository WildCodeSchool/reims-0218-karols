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

storiesOf("CardModel", module).add("Render CardModel", () => <CardModel />)

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
