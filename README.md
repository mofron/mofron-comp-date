# mofron-comp-date
date component for [mofron](https://github.com/simpart/mofron) 
please see [here](https://github.com/simpart/mofron) about an overview of mofron

# Install
```bash
npm install --save-dev mofron
```

example
```javascript
let Mof = require('mofron');
let Dat = require('mofron-comp-date');

let date = new Dat({
    visible : true
});
// 2017/3/28 (default is today)

date.nextYear();   // 2018/3/28
date.nextYear(5);  // 2023/3/28
date.prevYear();   // 2022/3/28
date.prevYear(5);  // 2017/3/28

date.nextDay();    // 2018/3/29
date.nextDay(10);  // 2017/4/8
date.prevDay();    // 2017/4/7
date.prevDay(10);  // 2017/3/28

date.date(new Date('2020/01/01'));  // 2020/1/1
```
