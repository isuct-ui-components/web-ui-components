# Add mixins in the projects 
To add new mixins in project, you need to create individual .sccs file with component`s styles in
./src/scss/mixins.
Example: 
For font-face you can create _font-face.scss at mixins folder
with these styles:
```
    @mixin font-face($font-family, $url, $weight, $style) {
    @font-face {
        font-family: "#{$font-family}";
        src: url('../fonts/#{$url}.woff2') format("woff2");
        font-weight: #{$weight};
        font-display: swap;
        font-style: $style;
        }
    } 
```
and then import it in main mixins file (./src/scss/_mixins.scss) like:
```
    @import './mixins/font-face';
```

(all mixins gonna imported in App.scss)
