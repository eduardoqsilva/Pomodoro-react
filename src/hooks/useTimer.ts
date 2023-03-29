import { useEffect, useState } from "react";
import { CreateNotification } from "../utils/notification";

import bell from "../assets/sound/bell.aac"
import icon from "/icon.png"

interface useTimeType {
  time: {
    minutes: number
    seconds: number
    porcent: number
    completed: number
    status: string
  }
  func: {
    playAndPause: () => void
  }
}

const sound = new Audio(bell)
let timeOutId:number

export function useTimer(p:Array<number>, active:number):useTimeType {

  const min = p[active]
  const secondsTotal = min * 60
    
  const [timer, setTimer] = useState({
    minutes: 0,
    seconds: 0,
    porcent: 100.0,
    completed: 0,
    status: 'start'
  })
  const [isPause, setIsPause] = useState(false)

  useEffect(() => {
    setTimer(prev => ({
      ...prev,
      minutes: min
    }))
  }, [active])

  const reset = () => {
    if(timer.completed === 7) {
      setTimer({
        ...timer,
        completed: 0
      })
    }
    setTimer(prev => ({
      ...prev,
      minutes: min,
      porcent: 100.0,
      completed: prev.completed + 1,
      status: 'start'
    }))
  }

  let pomodoro = {
    seconds: timer.seconds,
    start: function() {

      timeOutId = setInterval(() => {
        if(this.seconds === 0) {
          if(timer.minutes === 0) {
            clearInterval(timeOutId)
            reset()
            setIsPause(false)
            sound.play()
            CreateNotification('Tempo esgotado!', {
              icon: icon
            })
          }else {
            this.seconds = 59
            setTimer(prev => (
              {
                ...prev, 
                minutes: timer.minutes -= 1,
                seconds: this.seconds,
                porcent: (((timer.minutes * 60) + this.seconds) / secondsTotal) * 100
              }
            ))
          }
        } else {
          this.seconds -= 1 
          setTimer(prev => (
            {
              ...prev, 
              seconds: this.seconds,
              porcent: (((timer.minutes * 60) + this.seconds) / secondsTotal) * 100
            }
          ))
        }
      },1000)
    },
    stop: () => {
      clearInterval(timeOutId)
      console.log('id ' + timeOutId)
    }
  }
  


  function playAndPause() {
    setIsPause(prev => (!prev))
    if(isPause === true) {
      pomodoro.stop()
      console.log('pause ' + isPause)
      setTimer({
        ...timer,
        status: 'continue'
      })
    }else {
      pomodoro.start()
      console.log('play')
      setTimer({
        ...timer,
        status: 'pause'
      })
    }
  }

  return {
    time:{
      minutes: timer.minutes,
      seconds: timer.seconds,
      porcent: timer.porcent,
      completed: timer.completed,
      status: timer.status,
    },
    func: {
      playAndPause,
    }
  }
}