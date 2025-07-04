
# TUM Hugo Theme
The website of the Applied Education Technologies, [aet.cit.tum.de](https://aet.cit.tum.de/), is built using the [Hugo](https://gohugo.io/) static site generator and a custom [TUM Hugo Theme (this repo)](/).
The TUM Hugo Theme is designed to be used for TUM-related websites, providing a consistent look and feel across different sites.
It is based on the TUM Corporate Design and TUM Living Styleguide, which is why it has a style consistent with other TUM websites and guidelines established by the TUM Corporate Design.

You can import this theme into your own Hugo project and develop a website for your chair.
This has multiple advantages:
- Modern look and feel for TUM-related websites
- Responsive design
- Markdown and repository-based content management
- 

## Navbar:
The navbar has to be set by manually modifying the navbar template files.
The navbar is currently implemented by two partial templates, located at `layouts/partials/navbar.html` and `layouts/partials/mobile-navbar.html`.

Because changes to the navbar on the template are deployed on the CSS files located at `static/css/navbar.css` and `static/css/`, there is no issue with modifying a copy of the navbar templates at `/layouts/` to reflect your site's needs.
