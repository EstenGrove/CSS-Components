# Color Palette(s)


```scss
$primary_font: 'Open Sans',
sans-serif;
$primary_serif: 'Lora',
serif;
$primary_mono: 'Consolas',
monospace;

$vibe: hsla(242, 89%, 64%, 1);
$blue: hsla(197, 100%, 50%, 1);
$red: hsla(352, 70%, 50%, 1);
$altRed: hsla(352, 70%, 60%, 1);
$purple: hsla(222, 89%, 64%, 1);
$green: hsla(170, 100%, 39%, 1);
$charcoal: hsla(268, 10%, 30%, 1);
$deepPurple: hsla(240, 68%, 62%, 1);
$orange: hsla(11, 100%, 75%, 1);
$yellow: hsla(60, 92%, 71%, 1);
$grey: hsla(216, 14%, 93%, 1);
$altYellow: hsla(39, 100% ,70%, 1);

// FLAT VERSIONS
$flatBlue: hsla(197, 100%, 50%, .3);
$flatPurple: hsla(222, 89%, 64%, .3);
$flatAltPurple: hsla(259, 77%, 64%, .4);
$flatGreen: hsla(144, 69%, 63%, .4);
$flatSmoke: hsla(268, 10%, 30%, .2);
$flatRed: hsla(330, 100%, 41%, .22);
$flatYellow: hsla(60, 92%, 71%, .7);
$flatOrange: hsla(11, 100%, 75%, .4);

$light_shadow: 0px 1px 7px -1px rgba(0, 0, 0, 0.25);
$medium_shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
0 3px 6px rgba(0, 0, 0, 0.23);
$heavy_shadow: 3px 4px 16px -1px rgba(0, 0, 0, 0.75);


$greys: (
    dark: hsla(0, 0%, 13%, 1),
    medium: hsla(0, 0%, 29%, 1),
    light: hsla(0, 0%, 45%, 1),
);

$blueGreys: (
    main: hsla(214, 32%,  91%, 1),
    saturated: hsla(211, 25%,  84%, 1),
    text: hsla(216, 15%, 52%, 1),
    headings: hsla(218, 17%, 35%, 1),
    subheadings: hsla(218, 17, 65, 1),
    light: hsla(204, 46%, 98%, 1),
);

$colors: (main: $vibe,
    mainPurple: $deepPurple,
    mainBlue: $blue,
    mainRed: $red,
    mainGreen: $green,
    mainOrange: $orange,
    mainYellow: $yellow,
    mainCharcoal: $charcoal,
    mainGrey: $grey,
    altRed: $altRed,
    altYellow: $altYellow,
);

$flatColors: (
    main: $flatAltPurple,
    mainBlue: $flatBlue,
    mainRed: $flatRed,
    mainGreen: $flatGreen,
    mainYellow: $flatYellow,
    mainOrange: $flatOrange,
    altPurple: $flatPurple,
);

$shadows: (light: $light_shadow,
    medium: $medium_shadow,
    heavy: $heavy_shadow,
);

$fonts: (mainSans: $primary_font,
    mainSerif: $primary_serif,
    mainMono: $primary_mono,
)
```

-----------

### Background Colors
```scss
$blue_purple_tint: #2E3352;  - hsl(232,28.1%,25.1%)
$blue_purple_tint2: #464B6F;  - hsl(233,22.7%,35.5%)
$black_slight_tint: #0E0F17;  - hsl(233,24.3%,7.3%)


### Greys

```scss
// blue greys
#f7fafc  -  hsla(204, 46%, 98%, 1)
#edf2f7  -  hsla(210, 39%, 95%, 1)
#e2e8f0  -  hsla(214, 32%, 91%, 1)
#cbd5e0  -  hsla(211, 25%, 84%, 1)
#a0aec0  -  hsla(214, 20%, 69%, 1)
#718096  -  hsla(216, 15%, 52%, 1)
#4a5568  -  hsla(218, 17%, 35%, 1)
#2d3748  -  hsla(218, 23%, 23%, 1)
#1a202c  -  hsla(220, 26%, 14%, 1)
#D3CFD2  -  hsla(315, 4%, 82%, 1)

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
![COLORS](https://user-images.githubusercontent.com/41505038/62709117-9e6bfe80-b9a9-11e9-8a31-74cb97c8e6c2.png)
