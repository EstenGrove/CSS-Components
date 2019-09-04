# Color Palette(s)


![COLORS](https://user-images.githubusercontent.com/41505038/62709117-9e6bfe80-b9a9-11e9-8a31-74cb97c8e6c2.png)

```scss
// Main Palette
#5751F5 - BEST BRIGHT PURPLE - hsla(242, 89%, 64%, 1)
#00B7FF - Bright Blue - hsla(197 100%, 50%, 1)
#5c75ea - Bright Purple - hsla(222, 89% 64%, 1)
#d7263d - Red - hsla(352, 70%, 50%, 1)
#61E294 - Green  - hsla(144, 69%, 63%, 1)
#8a5cea - Purple - hsla(259, 77%, 64%, 1)
#A846A1 - Maroon - hsla(304, 41%, 47%, 1)
#d20068 - Accent Red - hsla(330, 100%, 41%, 1)
#5CBCEA - Baby Blue - hsla(199, 77%, 64%, 1)
#eaecef - Light Grey Border - hsla(216, 14%, 93%, 1)
#e84855 - Flat Red - hsla(355, 78%, 60%, 1)
#FF957D - Flat Orange - hsla(11, 100%, 75%, 1)
#F9F871 - Flat Yellow - hsla(60, 92%, 71%, 1)
#44F0B5 - Alt Flat Green - hsla(159, 85%, 60%, 1)
#EEEDFF - Flat Grey Borders - hsla(243, 100%, 96%, 1)


// Accent Colors
#5183f5 - Neon purple (neon-ish) hsla(222, 89%, 64%, 1)
#4B4453 - Charcoal  hsla(268, 10%, 30%, 1)

// FADED COLOR PALETTE
$blue: #00b7ff;
$red: #d7263d;
$purple: #5183f5;
$green: #00c9a7;
$charcoal: #4b4453;
$borderGrey: #eaecef;

$bottom_space: 3rem;

$colors: (
  main: $purple,
  mainBlue: $blue,
  mainRed: $red,
  mainGreen: $green,
  mainCharcoal: $charcoal,
  mainGrey: $borderGrey
);

$fadedColors: (
  fadedGreen: hsla(144, 69%, 63%, 0.3),
  fadedBlue: hsla(197, 100%, 50%, 0.3),
  fadedMain: hsla(222, 89%, 64%, 0.3),
  fadedRed: hsla(330, 100%, 41%, 0.3),
  fadedOrange: hsla(11, 100%, 75%, 0.3),
  fadedFlatGreen: hsla(159, 85%, 60%, 0.3)
);

$primary_font: "Open Sans", sans-serif;

$light_shadow: 0px 1px 7px -1px rgba(0, 0, 0, 0.25);
$medium_shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
$heavy_shadow: 3px 4px 16px -1px rgba(0, 0, 0, 0.75);


//ALA Color Palette
#00aced - twitter
#007bb6 - linkedin
#cb2027 - pinterest
#27a9e1 - mail

// Core Colors
#27a9e1 - light blue, hover states
#0f579e - medium blue, footer
#03416B - dark blue, banners
#9ad123 - btn green, buttons

// Misc Colors
Link Color - Purple: #551a8b
```

### Greys
```scss
// light => dark
#eaecef	
#d3d4d7	
#bbbdbf	
#a4a5a7	
#8c8e8f	
#757678	
#5e5e60	
#464748	
#2f2f30	
#171818	
#000000

// dark => light
#eaecef	
#eceef1	
#eef0f2	
#f0f2f4	
#f2f4f5	
#f5f6f7	
#f7f7f9	
#f9f9fa	
#fbfbfc	
#fdfdfd	
#ffffff
```

## Font Greys & Whites
```css
.customGrey {
  color: hsla(222, 19%, 64%, 1);
}
.customGrey:hover {
  color: hsla(212, 19%, 84%, 1);
}
```

## Gradients
```css
/* -- Neon Purple Shaded 20degrees diff -- */
background-image: linear-gradient(to right top, #5183f5, #4c78f7, #4c6cf8, #5060f7, #5751f5);
```
