# My Modern Blog

A sleek, modern blog site built with vanilla JavaScript that runs entirely in the browser. Features instant posting, local storage persistence, and a sophisticated dark grey theme.

## Features

- **Single HTML File**: Complete blog functionality in one file
- **Instant Posting**: Write and publish posts immediately with localStorage
- **Dark Grey Theme**: Sophisticated, eye-friendly color scheme
- **Mobile Responsive**: Optimized for all device sizes
- **Export Functionality**: Backup all posts as JSON
- **Modern UI**: Clean, minimal design focused on readability
- **No Dependencies**: Pure vanilla JavaScript (ES6+)

## Quick Start

### Local Development

**Option 1: Simple (No Setup Required)**
```bash
# Simply open index.html in your browser
open index.html
# or double-click index.html in your file explorer
```

**Option 2: Local Server with Live Reload**
```bash
# Install dependencies (one-time setup)
npm install

# Start development server with live reload
npm start
# This opens http://localhost:3000 with auto-refresh on changes

# Alternative server options:
npm run dev      # Live server with file watching
npm run serve    # Basic HTTP server
npm run preview  # Static file server
```

### GitHub Pages Deployment
- Push this repository to GitHub
- Go to repository Settings → Pages
- Select "Deploy from a branch"
- Choose "main" branch and "/ (root)" folder
- Your blog will be available at `https://yourusername.github.io/repository-name`

## Usage

### Creating Posts
1. Click the "Create Post" button
2. Enter your post title and content
3. Click "Post" to publish instantly
4. Posts appear immediately on the homepage in chronological order (newest first)

### Managing Posts
- **View Posts**: All posts display on the homepage with timestamps
- **Export Posts**: Click "Export Posts" to download all posts as a JSON file
- **Data Persistence**: Posts are automatically saved to localStorage

### Mobile Experience
- Fully responsive design
- Touch-friendly interface
- Optimized modal dialogs for mobile screens

## Technical Details

### Storage
- Posts are stored in browser localStorage
- Data persists between sessions
- Export feature creates downloadable JSON backup

### Browser Compatibility
- Modern browsers with ES6+ support
- Chrome 60+, Firefox 55+, Safari 12+, Edge 79+

### File Structure
```
my-blog/
├── index.html          # Complete blog application
├── package.json        # Development dependencies and scripts
├── .gitignore         # Git ignore patterns
└── README.md          # This file
```

### Development Dependencies
- **live-server**: Auto-refreshing development server
- **http-server**: Simple HTTP server for testing
- **serve**: Static file server for production testing

All dependencies are development-only. The blog itself requires no runtime dependencies.

## Customization

### Theme Colors
Edit the CSS variables in the `:root` selector to customize colors:

```css
:root {
    --bg-primary: #1a1a1a;      /* Main background */
    --bg-secondary: #2d2d2d;    /* Post backgrounds */
    --bg-tertiary: #3a3a3a;     /* Input backgrounds */
    --text-primary: #e0e0e0;    /* Main text */
    --text-secondary: #b0b0b0;  /* Secondary text */
    --text-muted: #808080;      /* Muted text */
    --accent: #4a90e2;          /* Accent color */
    --accent-hover: #357abd;    /* Accent hover */
    --border: #404040;          /* Border color */
}
```

### Blog Title
Change the blog title by editing the `<h1>` tag and `<title>` tag in index.html.

## GitHub Pages Setup

### Option 1: Repository Settings
1. Push your code to GitHub
2. Go to Settings → Pages
3. Select source: "Deploy from a branch"
4. Choose branch: "main" and folder: "/ (root)"
5. Save and wait for deployment

### Option 2: GitHub Actions (Advanced)
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Pages
        uses: actions/configure-pages@v3
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: '.'
      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v2
```

## Data Export Format

Exported JSON includes:
```json
{
  "exportDate": "2024-01-15T10:30:00.000Z",
  "totalPosts": 5,
  "posts": [
    {
      "id": 1705312200000,
      "title": "My First Post",
      "content": "Post content here...",
      "timestamp": "2024-01-15T10:30:00.000Z",
      "dateString": "January 15, 2024 at 10:30 AM"
    }
  ]
}
```

## Security Notes

- All data is stored locally in the browser
- No server-side storage or external dependencies
- Safe for personal use and GitHub Pages hosting
- Export functionality works entirely client-side

## Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | 60+     |
| Firefox | 55+     |
| Safari  | 12+     |
| Edge    | 79+     |

## Contributing

This is a single-file blog designed for simplicity. For feature requests or bug reports, please open an issue.

## License

MIT License - feel free to use and modify as needed.