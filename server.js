const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;
const POSTS_FILE = path.join(__dirname, 'posts.json');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Ensure posts.json exists
async function initializePostsFile() {
    try {
        await fs.access(POSTS_FILE);
    } catch (error) {
        // File doesn't exist, create it with empty array
        await fs.writeFile(POSTS_FILE, JSON.stringify([], null, 2));
    }
}

// Helper function to read posts
async function readPosts() {
    try {
        const data = await fs.readFile(POSTS_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading posts:', error);
        return [];
    }
}

// Helper function to write posts
async function writePosts(posts) {
    try {
        await fs.writeFile(POSTS_FILE, JSON.stringify(posts, null, 2));
        return true;
    } catch (error) {
        console.error('Error writing posts:', error);
        return false;
    }
}

// API Routes
app.get('/api/posts', async (req, res) => {
    try {
        const posts = await readPosts();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to read posts' });
    }
});

app.post('/api/posts', async (req, res) => {
    try {
        const posts = req.body; // The posts array from the request body
        const success = await writePosts(posts);
        if (success) {
            res.json({ success: true });
        } else {
            res.status(500).json({ error: 'Failed to save posts' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to save posts' });
    }
});

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Initialize and start server
async function startServer() {
    await initializePostsFile();
    app.listen(PORT, () => {
        console.log(`Blog server running on http://localhost:${PORT}`);
    });
}

startServer().catch(console.error);