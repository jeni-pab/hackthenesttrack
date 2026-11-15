# Project Overview

## What Is Open Nest?

Open Nest is a community resource platform that helps individuals discover essential resources near them using their city or ZIP code. It is designed to make finding community assistance easier by bringing essential resources together in one accessible platform.

## Why We Built It

Information about food pantries and other essential services is often scattered across different websites and organizations.

We wanted to create a platform that makes these resources easier to discover and access.

## Hackathon Track

- **Main Track:** Future of Intelligence
- **Sub-tracks:** Base44, Gemini API, ElevenLabs API

## Built With

- **Base44:** used to develop and deploy the application.
- **Gemini API:** powers the "Ask for help" assistant and translates resource listings.
- **ElevenLabs API:** reads resource information aloud in all four supported languages.

## How AI Powers Open Nest

Open Nest uses three backend functions. Each one calls an AI service on the server, so API keys never reach the browser:

| Function | AI Service | What It Does |
| --- | --- | --- |
| `askForHelp` | Gemini | Answers a visitor's question in their language and points them to relevant pantries |
| `localizeResources` | Gemini | Translates pantry listings into Spanish, Hindi and Urdu |
| `speak` | ElevenLabs | Turns resource details into speech for the read-aloud button |

**Example flow:** A visitor picks Urdu, searches their ZIP code and asks for help → Gemini answers in Urdu and points them to nearby pantries → they tap read aloud, and ElevenLabs speaks the details.

**Keeping it safe and affordable:**
- Rate limits per visitor and for the whole app protect the paid APIs, with higher per-visitor limits so shared Wi-Fi at shelters and libraries isn't blocked.
- Translations and AI answers are cached, so repeat requests are fast and don't cost anything extra.
- Scheduled admin-only cleanup removes old cache and usage records without ever touching pantry listings.

## Languages

English, Spanish, Hindi and Urdu, including right-to-left layout for Urdu.

## Coverage

The directory currently lists 15 pantries in Ann Arbor, Ypsilanti and Chelsea, Michigan.
