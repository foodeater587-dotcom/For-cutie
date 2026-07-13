# 💕 Premium Romantic Website 💕

A beautiful, fully responsive, cinematic romantic website with stunning animations and interactive features.

## 🎨 Features

### Visual Design
- ✨ Elegant romantic theme with premium gradients
- 🎭 Glassmorphism and modern UI effects
- 💫 Floating hearts, rose petals, sparkles, and fireflies
- 🌟 Beautiful animated background effects
- 📱 Fully responsive (desktop, tablet, mobile)
- 🎬 Smooth page transitions and animations

### Interactive Sections

#### Hero Section
- Animated romantic title
- Call-to-action button with hover effects
- Floating heart animations
- Background particles and romantic glow effects

#### Countdown Timer
- Shows time together in days, hours, minutes, seconds
- Auto-updates every second
- Editable start date

#### Gallery Section
- Designer photo gallery with animated cards
- Hover zoom effects
- Heart-shaped overlays
- Easy image replacement

#### Video Section
- Beautiful video frame with animated borders
- Auto-play support
- Stylish video controls
- Romantic background decorations

#### Love Message Section
- Typewriter animation
- Glass-morphic card design
- Animated floating hearts
- Support for multiple paragraphs

#### Reasons Section
- 6 customizable reason cards
- Smooth hover animations
- Beautiful gradient backgrounds

#### Love Quotes Carousel
- Auto-rotating quotes
- Manual navigation buttons
- Romantic quote collection

#### Music Player
- Auto-play functionality (browser-dependent)
- Play/Pause controls
- Volume slider
- Progress bar
- Mute button
- Beautiful player UI

#### Background Effects
- Falling rose petals
- Floating hearts
- Particle animations
- Sparkle effects
- Cursor sparkle on click

## 🛠️ How to Customize

### 1. **Replace Gallery Images**

Open `index.html` and find the Gallery Section. Replace the image URLs:

```html
<img src="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=500&h=500&fit=crop" alt="Memory 1" class="gallery-img">
```

Replace the URL with your own image URLs. You can use:
- Local image paths: `images/photo1.jpg`
- Online URLs from Unsplash, Pexels, or other sources

### 2. **Add Your Video**

In the Video Section of `index.html`, replace the video source:

```html
<video id="mainVideo" controls autoplay muted>
    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
</video>
```

Use your own video URL or local video file path.

### 3. **Edit Love Message**

Find the Message Section in `index.html` and update the message:

```html
<p class="message-text" data-text="Your custom message here..."></p>
```

### 4. **Set Your Special Date**

In `script.js`, update the countdown timer start date:

```javascript
const CONFIG = {
    startDate: new Date('2023-01-15T00:00:00'),
    // Your date here ^
};
```

### 5. **Add Your Music**

Update the music URL in `script.js`:

```javascript
const CONFIG = {
    musicUrl: 'https://your-music-url.com/song.mp3',
    songTitle: 'Our Love Song'
};
```

Use your own audio file or URL from a music hosting service.

### 6. **Customize Reasons**

In `index.html`, edit the Reasons Section:

```html
<div class="reason-card">
    <div class="reason-number">1</div>
    <h3>Your Reason Title</h3>
    <p>Your reason description</p>
</div>
```

### 7. **Update Quotes**

Edit the Love Quotes Section:

```html
<div class="quote-item" data-quote="0">
    <p class="quote-text">"Your quote here"</p>
</div>
```

### 8. **Edit Names and Information**

Update all sections with your names and information:
- Navigation: `<div class="logo">💕 Our Love</div>`
- Footer: `Made with ❤️ for My Love`
- Section titles and content

## 📁 File Structure

```
.
├── index.html          # Main HTML file with all sections
├── styles.css          # All CSS animations and styling
├── script.js           # JavaScript interactions and effects
└── README.md          # This file
```

## 🎵 Background Music

The website includes a music player with:
- Auto-play (browser-dependent)
- Play/Pause button
- Volume control
- Progress bar
- Mute functionality
- Volume slider

**Note:** Some browsers block autoplay of audio. Users may need to click the play button first.

## 🎨 Color Scheme

- **Primary Red**: `#ff1744`
- **Pink**: `#ff69b4`
- **Gold Accent**: `#ffd700`
- **Rose Gold**: `#b76e79`
- **Purple**: `#c084fc`
- **Dark Background**: `#1a0e1e`
- **Light Text**: `#fff5f7`

## 📱 Responsive Breakpoints

- **Desktop**: Full experience with all animations
- **Tablet** (768px): Optimized layout
- **Mobile** (480px): Compact mobile-friendly design

## ⚡ Performance Features

- Optimized CSS animations (GPU-accelerated)
- Lazy loading of effects
- Smooth transitions
- Minimal JavaScript for better performance
- Efficient background effects

## 🌐 Browser Support

- Chrome/Edge (Recommended)
- Firefox
- Safari
- Mobile browsers

## 📝 Notes

1. **Music Autoplay**: Modern browsers require user interaction before autoplaying audio. Users may need to click the play button.

2. **Image Optimization**: For best performance, use optimized images (compressed, appropriate resolution).

3. **Video Format**: Support MP4, WebM, and Ogg video formats for best compatibility.

4. **Local Hosting**: For best results, host this website on a web server (GitHub Pages, Netlify, etc.).

## 🎁 Special Features

- ❤️ **Heartbeat Loading Animation**: Premium loading screen
- 💕 **Floating Hearts**: Continuous floating animation
- 🌹 **Falling Rose Petals**: Beautiful particle effects
- ✨ **Sparkle Effects**: Click anywhere for sparkle animations
- 🎆 **Confetti**: Click the CTA button for celebration
- 🎵 **Music Player**: Beautiful audio player with controls
- ⏱️ **Countdown Timer**: Shows time together
- 📝 **Typewriter Animation**: Animated message text

## 💡 Tips for Best Results

1. Use high-quality images (at least 500x500px for gallery)
2. Use landscape or square video format
3. Choose romantic background music
4. Write a heartfelt message
5. Add personal reasons and memories
6. Test on different devices
7. Share with your special someone!

## 🚀 Deployment

To deploy your website:

1. **GitHub Pages**: Push to a GitHub repo and enable Pages in settings
2. **Netlify**: Drag and drop files to Netlify
3. **Vercel**: Connect your Git repo
4. **Your Own Server**: Upload files via FTP

## 💬 Customization Guide

All customizable content is marked with `<!-- EDITABLE: -->` comments in the HTML.

## 📞 Support

For best results:
- Test on multiple devices
- Ensure images and videos are properly linked
- Check browser console for any errors
- Update music URL if needed

## ❤️ Made with Love

This website is created with premium romantic design principles and smooth, beautiful animations. Perfect for expressing your love!

---

**Made with ❤️ for someone special** 💕