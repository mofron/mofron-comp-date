# mofron-comp-date
date web ui component for mofron

```bash
npm install --save-dev mofron
```

# Quick Start
require webpack

```html
<html>
    <head></head>
    <body style="margin:0px;padding:0px;"></body>
    <script src='./path/to/webpack/output.js'></script>
</html>
```

example
```javascript
require("mofron");
require("mofron-comp-date");

new mofron.comp.Date().visible(true);
```

#class specification

| Method          | Parameter                                                                    |    Description                  |
|:------------------|:-----------------------------------------------------------------|:-------------------------------|
| selectEvent    | function : function for select date event                 |setselect event function |
| select              | Date object : check state (option)                             | selected date  setter / getter |
