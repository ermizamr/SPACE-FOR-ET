# PWA Setup Guide for SPACE for ET

## ✅ What's Been Configured

Your SPACE for ET app is now a **Progressive Web App (PWA)** with location features!

### PWA Features Implemented:

1. **Web App Manifest** (`/public/manifest.json`)
   - App name, icons, and theme colors
   - Standalone display mode (full-screen app experience)
   - Portrait orientation lock
   - Categories and description

2. **Service Worker** (`/public/sw.js`)
   - Offline caching support
   - Cache-first strategy for better performance
   - Automatic cache updates

3. **HTML Configuration** (`/index.html`)
   - PWA meta tags
   - Apple mobile web app support
   - Theme color configuration
   - Service worker registration

4. **App Icons** (`/public/icon.svg` and generator)
   - Custom space-themed SVG icon
   - Icon generator HTML page for all required sizes

### Location Features Implemented:

1. **Location Hook** (`/src/app/hooks/useLocation.ts`)
   - Browser geolocation API integration
   - Distance calculation (Haversine formula)
   - Error handling and loading states

2. **Stargazing Screen** (NEW!)
   - Real-time location display
   - Distance to Ethiopia calculator
   - Best stargazing time recommendations
   - Visible celestial objects based on time
   - Current sky conditions

3. **Ethiopia Screen Enhancement**
   - Shows distance to Ethiopia in header badge
   - Auto-requests location on page load

## 📱 How to Install as Mobile App

### On Android (Chrome/Edge):
1. Open the app in Chrome or Edge browser
2. Tap the menu (⋮) → "Install app" or "Add to Home screen"
3. Tap "Install"
4. The app icon will appear on your home screen

### On iOS (Safari):
1. Open the app in Safari
2. Tap the Share button (□ with arrow)
3. Scroll down and tap "Add to Home Screen"
4. Tap "Add"
5. The app icon will appear on your home screen

### On Desktop (Chrome/Edge):
1. Open the app in browser
2. Look for the install icon (⊕) in the address bar
3. Click "Install"

## 🎨 Generating App Icons

Currently, placeholder icons are configured. To generate proper PNG icons:

1. Open `/public/generate-icons.html` in your browser
2. Download all generated icon sizes:
   - icon-72x72.png
   - icon-96x96.png
   - icon-128x128.png
   - icon-144x144.png
   - icon-152x152.png
   - icon-192x192.png
   - icon-384x384.png
   - icon-512x512.png
3. Save them in the `/public` folder

Or use an online tool like:
- https://realfavicongenerator.net/
- https://www.pwabuilder.com/imageGenerator

## 🌍 Location Permissions

The app requests location access for:
- **Stargazing Guide**: Shows your coordinates and nearby celestial objects
- **Ethiopia Screen**: Displays distance to Addis Ababa
- **Future Features**: ISS tracker, local astronomy events

Users can:
- Grant location access for full features
- Deny access and still use other app features
- Manage permissions in browser settings

### Browser Permission Prompts:
- Chrome/Edge: "Allow [site] to access your location?"
- Safari: "Allow [site] to use your location?"
- Firefox: "Share your location with [site]?"

## 🚀 Deployment

To deploy your PWA:

### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### Option 3: GitHub Pages
1. Push code to GitHub
2. Enable GitHub Pages in repository settings
3. Select main branch and /docs folder (or use GitHub Actions)

## 📊 PWA Checklist

✅ Web app manifest configured  
✅ Service worker implemented  
✅ HTTPS (required - automatic with Vercel/Netlify)  
✅ Responsive design  
✅ Offline support  
✅ App icons (all sizes)  
✅ Mobile-optimized  
✅ Fast loading  
✅ Location features  

## 🔧 Testing Your PWA

### Using Lighthouse (Chrome DevTools):
1. Open Chrome DevTools (F12)
2. Go to "Lighthouse" tab
3. Select "Progressive Web App"
4. Click "Generate report"
5. Review PWA score and recommendations

### Using PWABuilder:
1. Visit https://www.pwabuilder.com/
2. Enter your deployed app URL
3. Review PWA features and scores
4. Download app packages for stores (optional)

## 📦 Publishing to App Stores (Optional)

### Google Play Store (via TWA - Trusted Web Activity):
1. Use PWABuilder to generate Android package
2. Sign the APK/AAB
3. Upload to Google Play Console
4. Submit for review

### Microsoft Store:
1. Use PWABuilder to generate MSIX package
2. Upload to Microsoft Partner Center
3. Submit for review

### iOS App Store:
1. Wrap PWA using Capacitor or similar
2. Build using Xcode
3. Submit to App Store Connect

Note: Publishing requires developer accounts ($25/year for Google, $99/year for Apple)

## 🛠️ Development Tips

### Testing Offline Mode:
1. Open DevTools → Network tab
2. Check "Offline" checkbox
3. Reload the page - it should still work!

### Updating Service Worker:
- Change the `CACHE_NAME` in `/public/sw.js` when you update the app
- Users will get the new version on next visit

### Location Testing:
- Chrome DevTools → Console → Settings → Sensors
- Override geolocation with custom coordinates
- Test different locations

## 📱 App Features Summary

### Current Screens:
1. **Splash Screen** - Animated app intro
2. **Onboarding** - Welcome tutorial
3. **Home** - Navigation dashboard
4. **Space History** - Timeline of achievements
5. **Breakthroughs** - Scientific discoveries
6. **Stargazing Guide** - Location-based sky viewing (NEW!)
7. **Space News** - Latest updates
8. **Ethiopia Section** - Ethiopia's space journey (with distance)
9. **Explore** - Learning modules
10. **About** - App information
11. **Design System** - Developer reference

### Location-Enabled Features:
- ✨ Real-time coordinates display
- 📍 Distance to Ethiopia calculator
- 🌟 Best stargazing times
- 🌌 Visible celestial objects
- 🪐 Sky condition monitoring

## 🔮 Future Enhancement Ideas

1. **ISS Tracker**: Show when ISS passes overhead your location
2. **Satellite Passes**: Track visible satellite passes
3. **Astronomy Events**: Local meteor showers, eclipses
4. **Star Map**: Interactive AR star map using device orientation
5. **Weather Integration**: Cloud coverage for stargazing
6. **Social Features**: Share observations with other users
7. **Offline Maps**: Constellation maps that work offline
8. **Photo Gallery**: Capture and save stargazing photos

## 📚 Resources

- [PWA Documentation](https://web.dev/progressive-web-apps/)
- [Service Workers Guide](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)
- [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
- [PWABuilder](https://www.pwabuilder.com/)

---

**Your SPACE for ET app is now ready to be installed as a mobile app! 🚀✨**
