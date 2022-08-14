import { useState } from 'react';
import WindowEvt from './W';

export default function ToggleWindowEvent () {
  const [windowEvent, setWindowEvent] = useState(false)
  return (
    <div>
      <button onClick={() => setWindowEvent(prevState => !prevState)}>Toggle Window Event</button>
      {windowEvent && <WindowEvt />}
    </div>
  )
}
