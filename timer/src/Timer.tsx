import { useState, useRef } from 'react'

export default function Timer() {
  const [time, changeTime] = useState(0)
  const interval = useRef<ReturnType<typeof setInterval> | null>(null)

  function start() {
    interval.current = setInterval(
      () => {
        changeTime(t => {
          if (t <= 1) {
            clearInterval(interval.current!)
            return 0
          }
          return t - 1
        }
        )
      }, 1000
    )
  }

  function stop() {
    changeTime(t => t - 1)
    clearInterval(interval.current!)
    return
  }

  function end() {
    clearInterval(interval.current!)
    changeTime(0)
  }

  return (
    <div style={{ padding: "5px", textAlign: "center", fontSize: "1rem" }}>
      <input onChange={e => changeTime(parseInt(e.target.value))} />
      <h1>{time !== 0 ? time : "Timer has ended"}</h1>
      <button style={{ margin: "10px", height: "50px", width: "150px", fontSize: "1.5rem" }} onClick={start}>Start</button>
      <button style={{ margin: "10px", height: "50px", width: "150px", fontSize: "1.5rem" }} onClick={stop}>Stop</button>
      <button style={{ margin: "10px", height: "50px", width: "150px", fontSize: "1.5rem" }} onClick={end}>End</button>
    </div>
  )
}

