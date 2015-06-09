# CardBuilder
Creates and outputs unforgotten realms cards. Feel free to submit PRs, use on your site, whatever!

Live Demo: https://urlivewiki.com/wiki/Card_Builder

# Information

This project uses React framework and ES6. I plan on including the
build script soon. Only just realised its missing.

# TODO

* Canvas Renderer text wrap and justify for card description.
* Canvas Renderer for all other elements.

Proposed solution would be to just create it in HTML, 
wrap words in span tags and then use that to render 
the text on the canvas itself.

Not the most elegant of solutions but I have gone through
every option from rendering to SVG to outputting to html2canvas 
to even trying to write my own justify text canvas function. 
