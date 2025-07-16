# 2026 ESWC Conference

## Configuration

### Creating content
Create content at `/content` by creating an index file.
- in a new subsection: `/content/section/new-subsection/index.md`
- directly at a section: `content/section/index.md`

Documentation on the structure of every section follows.

### Modify the Navbar
The navbar is loaded from `layouts/partials/navbar` AND `layouts/partials/mobile-navbar`. Every change to the items in the main level of the navbar should be performed at both files.

#### Adding elements to the subnavbar
Items displayed on the second level of the navbar are added as list items and follow the following structure:
```
<ul class="nav-submenu">
  <li class="nav-submenu-item">
    <a href="${URL}" class="nav-submenu-item--link">
      ${TITLE_DISPLAYED}
    </a>
  </li>
  [...]
</ul>
```
- `${URL}`: url, relative to the site's base URL
- `${TITLE_DISPLAYED}`: text displayed in the subnavbar

### Modify the schedule
The schedule is modified at `data/schedule.yaml`. See the existing data structures for reference.

## Installation
1. Clone the repository
2. [Install hugo](https://gohugo.io/installation/)
3. Clone the theme into the themes directory:
   ```bash
   git clone git@github.com:ls1intum/tum-hugo-theme.git themes/tum-hugo-theme
   ```
4. Run the server:
   ```bash
   hugo server --bind -p 1313
   ```
5. Open your browser and go to `http://localhost:1313/`

## About
This is the source code of the website for the 2025 International Semantic Web Conference (ISWC 2025). The website is built using [Hugo](https://gohugo.io/) and the [TUM Hugo Theme](

## TODO
- [ ] Call for contributions: define important dates
- [ ] Home rework
- [ ] Set organizing committee
- [ ] Review template