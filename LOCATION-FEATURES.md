# Location Features Documentation

## Overview
SPACE for ET now includes location-based features that enhance the educational experience by providing personalized stargazing information and distance calculations.

## Features Implemented

### 1. Location Hook (`/src/app/hooks/useLocation.ts`)
A custom React hook that provides:
- **Browser Geolocation API Integration**: Accesses device GPS/location
- **Error Handling**: Gracefully handles permission denials and errors
- **Loading States**: Shows loading indicators while fetching location
- **Distance Calculator**: Uses Haversine formula to calculate distances between coordinates
- **Ethiopia Coordinates**: Predefined coordinates for Addis Ababa (9.03°N, 38.74°E)

#### Usage Example:
```typescript
import { useLocation, calculateDistance, ETHIOPIA_COORDS } from "../hooks/useLocation";

const { location, error, loading, getLocation } = useLocation();

// Get user's location
getLocation();

// Calculate distance to Ethiopia
if (location) {
  const distance = calculateDistance(
    location.latitude,
    location.longitude,
    ETHIOPIA_COORDS.latitude,
    ETHIOPIA_COORDS.longitude
  );
}
```

### 2. Stargazing Screen (`/src/app/components/StargazingScreen.tsx`)

A new educational screen that provides:

#### Location Display
- Real-time latitude and longitude coordinates
- Location accuracy indicator
- Distance to Addis Ababa, Ethiopia
- Compass-style distance indicator with visual appeal

#### Sky Conditions
- Current local time display
- Day/Night status detection
- Best stargazing time recommendations based on time of day
  - Excellent: 8 PM - 4 AM
  - Good: 6-8 PM and 4-6 AM
  - Wait: Daytime hours

#### Visible Celestial Objects
Lists visible stars, constellations, and planets based on:
- Current time of day
- Seasonal visibility (basic simulation)
- Objects include:
  - Orion Constellation
  - Sirius (Brightest Star)
  - Jupiter
  - Andromeda Galaxy (late night only)
  - Pleiades (Seven Sisters) (late night only)

#### Stargazing Tips
Educational content including:
- Find dark sky locations
- Allow eyes to adjust (20-30 minutes)
- Use red flashlight to preserve night vision
- Check weather forecasts

### 3. Ethiopia Screen Enhancement

Updated the Ethiopia screen with:
- **Distance Badge**: Shows distance to Ethiopia in the header
- **Auto-location**: Automatically requests location when screen loads
- **Visual Integration**: Badge styled with Ethiopian flag colors
- **Compact Display**: Distance shown in kilometers with icon

### 4. Home Screen Update

Added new navigation card:
- **Stargazing Guide** card with Navigation icon
- Links directly to the Stargazing screen
- Gold gradient styling to match space theme

## Location Permissions

### Browser Permission Flow:
1. User visits Stargazing screen or Ethiopia screen
2. Browser shows permission prompt: "Allow [site] to access your location?"
3. User grants or denies permission

### Permission States:
- **Granted**: Full location features available
- **Denied**: Error message shown with instructions to enable in browser settings
- **Prompt**: Shows enable location button

### Privacy Considerations:
- Location is ONLY requested when user visits specific screens
- No background location tracking
- Location data is NOT stored or transmitted
- Used only for real-time calculations
- Users can deny permission and still use other app features

## Technical Implementation

### Geolocation API Configuration:
```javascript
navigator.geolocation.getCurrentPosition(
  successCallback,
  errorCallback,
  {
    enableHighAccuracy: true,  // Use GPS if available
    timeout: 5000,             // Wait max 5 seconds
    maximumAge: 0,             // Don't use cached position
  }
);
```

### Distance Calculation (Haversine Formula):
The app calculates great-circle distance between two points on Earth:
```
a = sin²(Δφ/2) + cos φ₁ ⋅ cos φ₂ ⋅ sin²(Δλ/2)
c = 2 ⋅ atan2(√a, √(1−a))
d = R ⋅ c
```
Where:
- φ is latitude
- λ is longitude
- R is Earth's radius (6,371 km)

### Real-time Updates:
- Location: On-demand (when user clicks "Enable Location")
- Time: Updates every second
- Sky conditions: Calculated based on current time
- Visible objects: Updated when time crosses threshold hours

## User Experience Flow

### Stargazing Screen Flow:
1. User taps "Stargazing Guide" from home
2. Screen loads with time and sky conditions
3. User taps "Enable Location" button
4. Browser prompts for permission
5. If granted: Shows coordinates and distance to Ethiopia
6. Displays visible celestial objects if nighttime
7. Shows stargazing tips

### Ethiopia Screen Flow:
1. User navigates to Ethiopia section
2. Screen auto-requests location (if not already granted)
3. If permission granted: Distance badge appears in header
4. User can see how far they are from Ethiopia

## Browser Compatibility

### Supported Browsers:
- ✅ Chrome/Edge (Desktop & Mobile)
- ✅ Safari (Desktop & iOS)
- ✅ Firefox (Desktop & Mobile)
- ✅ Samsung Internet
- ✅ Opera

### Fallback Behavior:
- If geolocation not supported: Shows error message
- If permission denied: Shows instructions to enable
- If location unavailable: App functions work without location features

## Future Enhancement Ideas

### Short-term:
1. **Save favorite locations**: Remember user's home location
2. **Multiple location presets**: Compare distances from different cities
3. **Location sharing**: Share your viewing location with friends
4. **Weather integration**: Show cloud coverage for stargazing planning

### Medium-term:
1. **ISS Tracker**: Show when ISS passes overhead your location
2. **Satellite Passes**: Track visible satellites (Starlink, etc.)
3. **Astronomy Events Calendar**: Local meteor showers, eclipses
4. **Constellation Finder**: AR-style star map using device orientation

### Long-term:
1. **Community Features**: Share observations from your location
2. **Photo Gallery**: Capture and geo-tag stargazing photos
3. **Local Observatory Finder**: Find nearby observatories and astronomy clubs
4. **Light Pollution Map**: Show dark sky quality at your location

## Testing

### Test Scenarios:

1. **Grant Permission**:
   - Navigate to Stargazing screen
   - Click "Enable Location"
   - Grant permission
   - Verify coordinates appear
   - Verify distance to Ethiopia shows

2. **Deny Permission**:
   - Navigate to Stargazing screen
   - Click "Enable Location"
   - Deny permission
   - Verify error message appears
   - Verify instructions to enable permissions

3. **Different Times of Day**:
   - Test during day hours (6 AM - 6 PM)
   - Verify daytime status
   - Test during night hours (6 PM - 6 AM)
   - Verify visible objects appear

4. **Distance Calculation**:
   - Test from various locations
   - Verify distance changes appropriately
   - Compare with Google Maps distance

### Developer Testing Tools:

**Chrome DevTools**:
1. Open DevTools (F12)
2. Click Console menu (⋮) → Settings
3. Select "Sensors" panel
4. Override geolocation with custom coordinates
5. Test different locations:
   - Addis Ababa: 9.03, 38.74
   - New York: 40.71, -74.01
   - Tokyo: 35.68, 139.69
   - Sydney: -33.87, 151.21

## Performance Considerations

- Location is requested on-demand, not on page load
- Only calculates distance when location changes
- Time updates are throttled to 1 second intervals
- No background location tracking
- Minimal battery impact

## Accessibility

- Error messages are clear and actionable
- Loading states provide visual feedback
- All interactive elements are keyboard accessible
- Color contrast meets WCAG AA standards
- Screen reader friendly labels

## Security & Privacy

- Uses HTTPS (required for geolocation API)
- No location data transmitted to servers
- No location data stored in databases
- Calculations performed client-side only
- User maintains full control over permissions

---

**Location features enhance the educational experience while respecting user privacy! 🌍⭐**
