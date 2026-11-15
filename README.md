# 🏡 Open Nest

**Find help. Feel supported.**

🔗 **Try it live:** https://open-nest.base44.app

Open Nest is an AI-powered, multilingual community resource platform that helps individuals find food assistance using their city or ZIP code.

By combining community resource information with artificial intelligence, translation, and voice accessibility, Open Nest makes it easier for people to discover assistance without navigating multiple websites or creating an account.

## 🚀 Hack The Nest 2026

**Hackathon:** Hack The Nest 2026

**Main Track:**
- Future of Intelligence

**Sponsor Tracks:**
- Best Use of Base44
- Best Use of Gemini API
- Best Use of ElevenLabs

**Event Track:**
- Best Beginner

## ✨ Features

### 🔎 Community Resource Search
Search for food pantries using a city or ZIP code. Open Nest searches its resource directory and displays relevant listings with available contact information, hours, and requirements.

### 🤖 AI-Powered Assistance — Gemini
Users can describe their situation in everyday language and receive recommendations from the available resource listings.

Gemini helps explain:
- Which resources may fit their needs
- Why those resources were recommended
- What information remains unconfirmed
- What steps to take before visiting

### 🌎 Multilingual Accessibility
Open Nest supports four languages:
- English
- Spanish
- Hindi
- Urdu

The interface also supports right-to-left layouts for Urdu, while Gemini translates resource details.

### 🔊 Voice Assistance — ElevenLabs
Users can listen to resource information and AI-generated answers using ElevenLabs text-to-speech, with browser speech as a fallback.

### 📍 Directions and Contact Information
Each eligible resource card includes options to open directions in Google Maps or call the organization directly.

### 🛒 Resource Basket
Users can select the supplies they need and explore matching resources based on available category information.

*Basket matching is currently most useful for food-related resources because other category data is limited.*

### ♿ Accessible Experience
- No account required for public resource searches
- Mobile-friendly interface
- Accessible controls and keyboard focus indicators
- Reduced-motion support
- Multilingual text and voice assistance

### 🛡️ Security and Reliability
- API keys stored securely on the backend
- Rate limits to protect paid AI services
- Cached AI answers and translations
- Admin-restricted resource management

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Base44 | Database, backend functions, hosting, and authentication |
| React 18 | Frontend application |
| Vite | Build tooling |
| Tailwind CSS | Styling and responsive layouts |
| Framer Motion | Interface animations |
| Gemini API | AI-powered recommendations and translation |
| ElevenLabs API | Text-to-speech accessibility |
| Google Maps | Directions through public Maps URLs |
| BigDataCloud / Nominatim | Reverse geocoding for location searches |

## 📊 Data Source

Open Nest uses a nationwide food pantry dataset provided by [Serve.Love](https://www.serve.love/), containing approximately 12,970 food pantry listings across the United States. The original CSV was downloaded in November 2026, cleaned, and reformatted to fit our database structure. The dataset is available under the **[Creative Commons Attribution 4.0 (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)** license. [View the original dataset](https://www.serve.love/resources/food-pantries/data.csv).

## 🧠 How AI Works

Open Nest uses three server-side AI functions:

| Function | Service | Purpose |
|---|---|---|
| `askForHelp` | Gemini | Generates grounded resource recommendations |
| `localizeResources` | Gemini | Translates resource information |
| `speak` | ElevenLabs | Converts text into speech |

AI recommendations use supplied directory records only, so the assistant recommends real listings from the data and never invents resources or details that are not present.

## 📸 Screenshots

![Open Nest home screen](screenshots/Screenshot%202026-11-15%20at%207.21.56%E2%80%AFAM.png)

![AI assistant and multilingual search](screenshots/Screenshot%202026-11-15%20at%207.22.25%E2%80%AFAM.png)


## 👥 Team

| Name | GitHub |
|---|---|
| Sarah Mall | [@mallsarah06](https://github.com/mallsarah) |
| Lavisha Chandivade | [@lavishac](https://github.com/lavishac) |
| Jeniffer Pablo | [@jeni-pab](https://github.com/jeni-pab) |

## 🎥 Demo

🔗 **Live app:** https://open-nest.base44.app

📺 **Demo video:** _link coming soon_

