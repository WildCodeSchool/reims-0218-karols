import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"
import { Button, Welcome } from "@storybook/react/demo"
import "bootstrap/dist/css/bootstrap.min.css"

import ChoiceShop from "../components/ChoiceShop"
import JumbotronExample from "../components/JumbotronExample"
import PrestationLabel from "../components/PrestationLabel"
import ReservationTitle from "../components/ReservationTitle"
import ListChoiceService from "../components/ListChoiceService"
import Logo from "../components/Logo"
import ChoiceService from "../components/ChoiceService"
import InfoClient from "../components/InfoClient"
import CalendarTime from "../components/CalendarTime"
import CalendarDay from "../components/CalendarDay"

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

storiesOf("ChoiceShop", module).add("choice your shop", () => <ChoiceShop />)

storiesOf("JumbotronExample", module).add("just an example", () => (
  <JumbotronExample />
))

storiesOf("InfoClient", module).add("just an example", () => <InfoClient />)

storiesOf("PrestationLabel", module).add("just an title", () => (
  <PrestationLabel />
))

storiesOf("ReservationTitle", module).add(
  "The Reservation Title Component",
  () => <ReservationTitle />
)

storiesOf("ListChoiceService", module).add("just an example", () => (
  <ListChoiceService />
))

storiesOf("Logo", module).add("Logo render", () => <Logo />)

storiesOf("ChoiceService", module).add("Choice service render", () => (
  <ChoiceService />
))

storiesOf("CalendarTime", module).add("Choose a time in the calendar", () => (
  <CalendarTime />
))

storiesOf("CalendarDay", module).add("Choose a time in the calendar", () => (
  <CalendarDay />
))
