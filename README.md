# GameMasterHQ 🎮

The ultimate destination for gamers seeking comprehensive information and resources across all gaming platforms. GameMasterHQ is a website dedicated to the world of gaming, offering a wealth of valuable content and features designed to enhance the gaming experience for enthusiasts of all levels.

## 🌟 Features

### 🏠 Home Page
- **Popular Games Display**: Browse through the latest and most popular games with detailed information
- **Game Cards**: Each game card displays:
  - Game cover image
  - Release date
  - Game title
  - Genres
  - Metacritic score
  - Supported platforms with platform icons
- **Pagination**: Navigate through multiple pages of games
- **Responsive Design**: Optimized for desktop and mobile devices

### 🎁 Free Games & Giveaways
- **Game Giveaways**: Discover free games and content from various platforms
- **Platform Support**: Epic Games Store, Steam, Android, PC, PS4, Xbox One
- **Giveaway Details**: 
  - Game title and type
  - Platform information
  - End date
  - Detailed descriptions
  - Direct links to giveaways
- **Status Indicators**: Active giveaway status with visual indicators

### 🎯 Game Details
- **Comprehensive Game Information**: 
  - High-quality game images
  - Release date and rating
  - Publisher information
  - Genre classification
  - Platform support with icons
  - Detailed game descriptions
- **Screenshot Gallery**: View game screenshots in a modal overlay
- **Platform Icons**: Visual representation of supported platforms

### 🎨 User Experience
- **Dark Mode Toggle**: Switch between light and dark themes
- **Search Functionality**: Search for specific games
- **Responsive Navigation**: Clean and intuitive navigation
- **Loading States**: Smooth loading animations and placeholders

## 🛠️ Technology Stack

### Frontend
- **Vue.js 3**: Progressive JavaScript framework
- **Vue Router 4**: Client-side routing
- **Vuex 4**: State management
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool and development server

### APIs
- **RAWG API**: Game information and data
- **GamerPower API**: Free games and giveaways data

### Development Tools
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing
- **Axios**: HTTP client for API requests

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd GameMasterHQ
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory and add your API keys:
   ```env
   VITE_API_KEY=your_rawg_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
GameMasterHQ/
├── src/
│   ├── assets/
│   │   ├── platforms/          # Platform icons (PC, PS4, Xbox, etc.)
│   │   ├── svgs/              # SVG assets
│   │   ├── trace.svg          # Logo
│   │   └── index.css          # Global styles
│   ├── components/
│   │   ├── Nav.vue            # Navigation component
│   │   ├── Footer.vue         # Footer component
│   │   └── Modal.vue          # Modal component
│   ├── views/
│   │   ├── Home.vue           # Home page with game listings
│   │   ├── FreeGames.vue      # Free games and giveaways
│   │   └── SpecificGameInfo.vue # Detailed game information
│   ├── router/
│   │   └── index.js           # Vue Router configuration
│   ├── App.vue                # Root component
│   └── main.js                # Application entry point
├── public/
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎮 Supported Platforms

The application displays platform icons for:
- PC
- PlayStation (PS1, PS2, PS3, PS4, PS5, PS Vita)
- Xbox (Xbox 360, Xbox One, Xbox Series X/S)
- Nintendo Switch
- macOS
- Linux
- Android
- iOS

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS for styling with a custom configuration in `tailwind.config.js`.

### Vite Configuration
Build tool configuration is in `vite.config.js` with Vue plugin support.

## 🌐 API Integration

### RAWG API
- Used for game information, screenshots, and metadata
- Requires API key from [RAWG](https://rawg.io/apidocs)

### GamerPower API
- Used for free games and giveaways data
- Integrated via RapidAPI

## 🎨 Design Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Dark Mode**: Toggle between light and dark themes
- **Modern UI**: Clean, intuitive interface with smooth animations
- **Loading States**: Placeholder animations during data loading
- **Custom Styling**: Unique button styles and hover effects

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [RAWG](https://rawg.io/) for providing comprehensive game data
- [GamerPower](https://www.gamerpower.com/) for free games and giveaways
- [Vue.js](https://vuejs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

---

**GameMasterHQ** - Your ultimate gaming companion! 🎮✨
