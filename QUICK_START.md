# Quick Start Guide - Kupata Coin Website

## 🚀 Getting Started (5 Minutes)

### Step 1: Install Dependencies

```powershell
npm install
```

### Step 2: Add Required Images

Place these files in `public/assets/`:

1. **kupata.jpg** - Photo of Kupata (or similar friendly dog)
    - Size: 500x500px or larger (square)
    - Format: JPG or PNG
2. **reddit.png** - Reddit icon (optional)
    - Size: 32x32px
    - Format: PNG with transparency
    - Download from: https://www.reddit.com/media/icons/

### Step 3: Update Social Media Links

Edit `src/components/Social.tsx` with your real social media accounts:

```typescript
const socialLinks = [
    {
        name: "Telegram",
        url: "YOUR_TELEGRAM_LINK",
        icon: "assets/telegram.png",
    },
    { name: "X", url: "YOUR_X_LINK", icon: "assets/twitter.png" },
    // ... etc
];
```

### Step 4: Run Development Server

```powershell
npm run dev
```

Visit: http://localhost:5173

## 📝 Content Customization

### Update Contract Address (When Available)

In `src/components/Tokenomics.tsx`, add contract address:

```typescript
<div className="mt-6 text-center">
    <p className="text-sm text-gray-400">Contract Address:</p>
    <code className="text-orange-400">0xYOUR_CONTRACT_ADDRESS</code>
</div>
```

### Customize Buy Button

In `src/components/BuySection.tsx`, update Uniswap link with your token address.

### Add Whitepaper

Place `kupata-whitepaper.pdf` in `public/assets/` directory.

## 🎨 Quick Customizations

### Change Colors

Edit these in your components:

-   **Orange**: `#ff8c00` → Your preferred color
-   **Amber**: `#ffd700` → Your secondary color

Search and replace:

```powershell
# Find
from-orange-400 to-amber-500

# Replace with your gradient
from-YOUR-COLOR-400 to-YOUR-COLOR-500
```

### Update Token Symbol

Search and replace `$KUPA` with your token symbol across all files.

### Modify Total Supply

In `src/components/Tokenomics.tsx`, change:

```typescript
<p className="text-3xl font-bold text-amber-400">1,000,000,000</p>
```

## 🔧 Advanced Configuration

### Update Blockchain Network

Edit `src/components/config.ts` or `src/providers/WagmiProvider.tsx`:

-   Change from Ethereum to your blockchain
-   Update RPC endpoints
-   Configure chain IDs

### Modify Tokenomics Distribution

Edit the `tokenDistribution` array in `src/components/Tokenomics.tsx`:

```typescript
const tokenDistribution = [
    {
        icon: Droplet,
        title: "Your Allocation - XX%",
        amount: "XXX,XXX,XXX",
        description: "Your description here",
    },
    // Add more allocations
];
```

### Change Roadmap Phases

Edit `src/components/Roadmap.tsx`:

```typescript
const phases = [
    {
        title: "Your Phase Title",
        timeline: "Timeline",
        items: ["Milestone 1", "Milestone 2"],
    },
];
```

## 🚀 Deployment

### Build for Production

```powershell
npm run build
```

This creates a `dist` folder with optimized files.

### Deploy Options

#### 1. Vercel (Recommended)

```powershell
npm install -g vercel
vercel
```

#### 2. Netlify

```powershell
npm install -g netlify-cli
netlify deploy --prod
```

#### 3. GitHub Pages

Add to `package.json`:

```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

Then run:

```powershell
npm run deploy
```

## 📱 Mobile Testing

Test on different screen sizes:

-   Mobile: 375px width
-   Tablet: 768px width
-   Desktop: 1440px width

Use Chrome DevTools (F12) → Device Toolbar (Ctrl+Shift+M)

## ✅ Pre-Launch Checklist

### Content

-   [ ] Replace all placeholder text
-   [ ] Add contract address
-   [ ] Update social media links
-   [ ] Add real team photos/info (if applicable)

### Images

-   [ ] Main hero image (kupata.jpg)
-   [ ] Favicon updated
-   [ ] Social media icons complete

### Links

-   [ ] Buy button works
-   [ ] Whitepaper accessible
-   [ ] All social links active
-   [ ] External links open in new tab

### Technical

-   [ ] No console errors
-   [ ] Mobile responsive
-   [ ] Fast loading times
-   [ ] 3D animations smooth

### SEO

-   [ ] Meta tags complete
-   [ ] Title descriptive
-   [ ] Images have alt text
-   [ ] Sitemap generated

## 🆘 Common Issues

### Issue: Images not showing

**Solution**: Check image paths are relative to `public/` folder

```typescript
// Correct
src = "/assets/kupata.jpg";

// Incorrect
src = "./assets/kupata.jpg";
```

### Issue: 3D scene not rendering

**Solution**: GPU acceleration might be disabled. Add fallback:

```typescript
<Canvas fallback={<div>Loading...</div>}>
```

### Issue: Wallet connection not working

**Solution**: Check WalletConnect project ID in config

### Issue: Build errors

**Solution**: Clear cache and reinstall:

```powershell
rm -rf node_modules
rm package-lock.json
npm install
```

## 📧 Support

For issues or questions:

1. Check `TRANSFORMATION_SUMMARY.md` for detailed changes
2. Review `KUPATA_README.md` for full documentation
3. Check console for error messages (F12 in browser)

## 🎉 You're Ready!

Your Kupata Coin website is now configured and ready to launch. Good luck! 🐾

---

**Remember**: Always test thoroughly before launching to production!
