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

(all mixins are imported in app.scss)


To use font-face mixin:
    Put the following scss into component`s styles: 
    ```
    @include font-face(font-family, font-weight, font-style); 
    //example:
    @include font-face("Inter", 400, normal);
    ```
    
To use font-size mixin (remove phantom indent):
    Put the following scss into component`s styles: 
    ```
    @include font-size(font-size); 
    //example: 
    @include font-size(14);
    ```

File _variables includes color and vars. Availiable vars:
    --white-color: #FFFFFF;
    --blue-color #0078D2;
    