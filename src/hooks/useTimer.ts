import { useEffect, useState } from "react";
import bell from "../assets/sound/bell.aac"

interface useTimeType {
  time: {
    minutes: number
    seconds: number
    porcent: number
    status: string
  }
  func: {
    play: () => void
    pause: () => void
    start: () => void
  }
}

const sound = new Audio(bell)

export function useTimer(p:Array<number>, active:number):useTimeType {

  const min = p[active]
    
  const [timer, setTimer] = useState({
    minutes: 0,
    seconds: 0,
    porcent: 100.0,
    status: 'start'
  })

  useEffect(() => {
    setTimer(prev => ({
      ...prev,
      minutes: min
    }))
  }, [active])

  let pomodoro = {
    isPause: false,
    intervalId: 0,
    seconds: timer.seconds,
    start: function() {
      this.intervalId = setInterval(() => {
        if(this.isPause !== true) {
          if(this.seconds === 0) {
            if(timer.minutes === 0) {
              clearInterval(this.intervalId)
              console.log('acabou!')
              sound.play()
            }else {
              this.seconds = 10
              setTimer(prev => (
                {
                  ...prev, 
                  minutes: timer.minutes -= 1,
                  seconds: this.seconds,
                }
              ))
            }
          } else {
            this.seconds -= 1
            setTimer(prev => (
              {
                ...prev, 
                seconds: this.seconds,
              }
            ))
          }
        }
      }, 1000)
    }
  }


  const pause = () => {
    pomodoro.isPause = true
  }
  const play = () => {
    pomodoro.isPause = false
    pomodoro.start()
  }
  const start = () => {
    pomodoro.start()
  }

  return {
    time:{
      minutes: timer.minutes,
      seconds: timer.seconds,
      porcent: timer.porcent,
      status: timer.status,
    },
    func: {
      play,
      pause,
      start
    }
  }
}