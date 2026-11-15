# Open Nest 🏡

## What Is Open Nest?

Open Nest is an AI-powered community resource platform designed to make finding food assistance easier, more accessible, and less overwhelming.

Users can search for food pantries by city or ZIP code, explore available resource information, receive personalized AI recommendations, and access directions—all without creating an account.

## Why We Built It

Finding food assistance can be challenging, especially when information is scattered across multiple websites, eligibility requirements are unclear, or language barriers make resources difficult to understand.

We created Open Nest to bring community resource information into one accessible platform and help individuals find assistance with greater confidence.

## Hackathon Tracks

- Best Use of Base44
- Best Use of Gemini API
- Best Use of ElevenLabs

## Key Features

- **Community Resource Search:** Search for food assistance using a city or ZIP code.
- **AI-Powered Assistance:** Describe your situation and receive relevant pantry recommendations powered by Google Gemini.
- **Multilingual Support:** Access the platform in English, Spanish, Hindi, or Urdu.
- **Voice Accessibility:** Listen to resource information and AI-generated responses using ElevenLabs, with browser speech as a fallback.
- **Google Maps Directions:** Open directions to selected food pantries.
- **Resource Information:** View available addresses, phone numbers, hours, and requirements.
- **Smart Filtering:** Filter resources based on supported information, including opening hours and confirmed ID requirements.
- **No Account Required:** Visitors can search for assistance without signing in.

## Built With

| Technology | Purpose |
|---|---|
| Base44 | Backend functions, database, authentication, and deployment |
| React 18 | Frontend user interface |
| Vite | Frontend development and build tooling |
| Tailwind CSS | Styling and responsive design |
| Framer Motion | Interface animations |
| Google Gemini API | AI recommendations and translations |
| ElevenLabs API | Text-to-speech assistance |
| Google Maps URLs | Directions to resources |
| BigDataCloud / Nominatim | Reverse geocoding for location searches |

## How AI Powers Open Nest

Open Nest integrates AI through three server-side functions:

| Function | Service | Purpose |
|---|---|---|
| `askForHelp` | Gemini | Generates recommendations based on user needs and supplied resource records |
| `localizeResources` | Gemini | Translates resource details into supported languages |
| `speak` | ElevenLabs | Converts resource information into speech |

API keys remain on the backend rather than being exposed in the browser.

## Example User Experience

A visitor searches for food assistance using their ZIP code. They can describe their needs in their preferred language and receive recommendations from Gemini explaining why particular resources may be helpful.

The visitor can then review available details, listen to the information, call the organization, or open directions in Google Maps.

When important details are unavailable, Open Nest identifies what still needs to be confirmed rather than inventing information.

## Coverage

Open Nest currently contains approximately **12,879 imported resource records** across the United States, including **277 in Michigan**, according to the November 15 project audit.

Coverage and listing completeness vary by location. Pantry hours, eligibility requirements, and available supplies should be confirmed directly with the organization before visiting.

## Security and Responsible AI

- Server-side API integrations protect API credentials.
- Per-visitor and application-wide rate limits help control usage.
- Caching reduces repeated AI requests and API costs.
- AI recommendations are grounded in supplied directory records.
- Missing or unconfirmed information is clearly identified.
- Public resource searches do not require account creation.

## Future Improvements

- Expand reliable baby supply, clothing, and hygiene resource coverage.
- Improve geographic data and distance-based searching.
- Add a fully interactive map.
- Improve multilingual voice quality.
- Expand data verification and freshness checks.

## Our Mission

**Finding help should be simple, accessible, and available to everyone.**

Open Nest combines community resource information with AI and accessibility tools to help people discover assistance when they need it most.