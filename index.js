class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.daysRef = document.querySelector(
      `${this.selector} [data-value="days"]`
    );
    this.hoursRef = document.querySelector(
      `${this.selector} [data-value="hours"]`
    );
    this.minsRef = document.querySelector(
      `${this.selector} [data-value="mins"]`
    );
    this.secsRef = document.querySelector(
      `${this.selector} [data-value="secs"]`
    );
  }

  start() {
    const time = this.targetDate - new Date();
    this.timeTransform(time);
    setInterval(() => {
      const time = this.targetDate - new Date();
      this.timeTransform(time);
    }, 1000);
  }

  timeTransform(time) {
    const padDate = (num) => String(num).padStart(2, 0);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = padDate(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = padDate(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = padDate(Math.floor((time % (1000 * 60)) / 1000));
    this.changeTimer(days, hours, mins, secs);
  }

  changeTimer(days, hours, mins, secs) {
    this.daysRef.textContent = days;
    this.hoursRef.textContent = hours;
    this.minsRef.textContent = mins;
    this.secsRef.textContent = secs;
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jun 30, 2021"),
});

timer.start();
