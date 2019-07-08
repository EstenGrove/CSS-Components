# Calendar Components in CSS

## Flexbox Calendar

```html
<div class="month">
    <!-- WEEK 1 -->
    <section class="week">
      <div class="day">1</div>
      <div class="day">2</div>
      <div class="day">3</div>
      <div class="day">4</div>
      <div class="day">5</div>
      <div class="day">6</div>
      <div class="day">7</div>
    </section>
    <!-- WEEK 2 -->
    <section class="week">
      <div class="day">8</div>
      <div class="day">9</div>
      <div class="day">10</div>
      <div class="day">11</div>
      <div class="day">12</div>
      <div class="day">13</div>
      <div class="day">14</div>
    </section>
    <!-- WEEK 3 -->
    <section class="week">
      <div class="day">15</div>
      <div class="day">16</div>
      <div class="day">17</div>
      <div class="day">18</div>
      <div class="day">19</div>
      <div class="day">20</div>
      <div class="day">21</div>
    </section>
    <!-- WEEK 4 -->
    <section class="week">
      <div class="day">22</div>
      <div class="day">23</div>
      <div class="day">24</div>
      <div class="day">25</div>
      <div class="day">26</div>
      <div class="day">27</div>
      <div class="day">28</div>
    </section>
    <!-- REMAINING DAYS -->
    <section class="week">
      <div class="day">29</div>
      <div class="day">30</div>
      <div class="day">31</div>

      <div class="day lingerDays">1</div>
      <div class="day lingerDays">2</div>
      <div class="day lingerDays">3</div>
      <div class="day lingerDays">4</div>
    </section>

  </div>
```

```css
*,
*::after,
*::before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  font-size: 62.5%;
  font-family: "Raleway";
}
body {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 1rem;
}

.week {
  width: 100vw;
  height: 10rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.day {
  font-family: "Raleway";
  font-size: 1.6rem;
  font-weight: bold;
  width: auto;
  padding: 0.5rem;
  height: 10rem;
  border: 1px solid;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -ms-flex-negative: 1;
  flex-shrink: 1;
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
}

.lingerDays {
  opacity: 0.2;
}

```
