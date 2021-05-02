class Timer {
  constructor() {
    this.timer = null;
  }

  debounce(func, time) {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(func, time);
  }
}

export default Timer;
