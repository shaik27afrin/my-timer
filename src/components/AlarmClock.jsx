import React, { useState, useEffect } from 'react';

const AlarmClock = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [alarmTime, setAlarmTime] = useState('');
  //const [audio] = useState(new Audio('/ringtone.mp3'));
  // const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const clockInterval = setInterval(() => setCurrentTime(new Date().toLocaleTimeString('en-US', { hour12: false })), 1000);
    const alarmInterval = setInterval(() => checkAlarmClock(), 1000);

    return () => {
      clearInterval(clockInterval);
      clearInterval(alarmInterval);
    };
  }, [alarmTime, currentTime]);

  const setAlarmTimeHandler = (event) => {
    event.preventDefault();
    const inputAlarmTimeModified = event.target.value + ':00';
    setAlarmTime(inputAlarmTimeModified);
  };

  const checkAlarmClock = () => {
    let alarmMessage = '';
    if (alarmTime === 'undefined' || !alarmTime) {
      alarmMessage = 'Please set your alarm.';
    } else {
      alarmMessage = 'Your alarm is set for ' + alarmTime + '.';
      if (currentTime === alarmTime) {
        alert("It's your selected time!");
        // playSound();
        setAlarmTime(''); 
      } else {
        console.log('Not yet');
      }
    }
    return alarmMessage;
  };

  // const playSound = () => {
  //   audio.play();
  //   setIsPlaying(true);
  // };

  // const stopSound = () => {
  //   audio.pause();
  //   audio.currentTime = 0;
  //   setIsPlaying(false);
  // };

  return (
    <section>
      <div id="up-showcase">
        <div id="showcase">
          <div id="jobtitle">
            <h1>React Alarm Clock</h1>
            <h2>It is {currentTime}.</h2>
            <h2>{checkAlarmClock()}</h2>
            <div id="icons">
              <form>
                <input type="time" onChange={setAlarmTimeHandler} value={alarmTime}></input>
              </form>
              {/* {isPlaying ? <button onClick={stopSound}>Stop</button> : null} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlarmClock;
