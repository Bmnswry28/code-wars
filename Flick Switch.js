function flickSwitch(arr) {
    let isFlicking = false;
    return arr.map(item => {
      if (item === 'flick') {
        isFlicking = !isFlicking;
      }
      return isFlicking ? false : true;
    });
  }