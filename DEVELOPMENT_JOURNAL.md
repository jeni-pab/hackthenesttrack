# Development Journal

## How We Built It

We developed Open Nest using Base44, integrating Google Gemini for AI-powered recommendations and translations and ElevenLabs for voice accessibility.

Our development process included:

- Designing an accessible and welcoming homepage.
- Building the community resource discovery interface.
- Importing and organizing a large food pantry directory.
- Implementing server-side city and ZIP code searches.
- Connecting Gemini to provide personalized resource recommendations.
- Adding multilingual support in English, Spanish, Hindi, and Urdu.
- Integrating ElevenLabs text-to-speech.
- Adding Google Maps directions to resource listings.
- Implementing API rate limits, caching, and backend security measures.
- Testing and refining search accuracy, filters, and user experience.

## Prompts We Used

We used Base44's AI app builder throughout development. These are five examples of prompts that helped us build and improve Open Nest.

### 1. Homepage Design

> Improve the overall homepage design of Open Nest while keeping its existing deep forest green and warm cream color palette. Preserve all existing functionality, resource listings, search features, database connections, and language options. Do not rebuild the application or remove any existing features.

**Result:** We refined the homepage while preserving the existing application structure and visual identity.

### 2. Security, Performance, and Reliability

> I want to finalize the security, performance, and reliability of our application. Maintain server-side protection against excessive Gemini and ElevenLabs API requests. Keep all API keys securely stored on the backend. Ensure users can continue accessing the application without creating accounts.

**Result:** We implemented API rate limits, server-side key protection, and caching to reduce repeated API requests and improve performance.

### 3. Verifying Database Operations

> Before I approve, can you confirm that this operation will only delete expired records from the Api Usage table? Also, how old must a record be before it is deleted?

**Result:** The AI builder identified an earlier inaccurate description of the operation. We reviewed the proposed changes before proceeding and implemented a cleanup function with retention rules.

**Lesson learned:** AI-generated code and database operations should be reviewed before approval.

### 4. Connecting Search to the Backend

> Is it possible to have the Find Pantries JavaScript file added to the small search bar so it actually searches for the pantries? Yes, change it, then don't change anything else.

**Result:** We connected the search interface to backend resource lookup functionality.

Later, we improved the search to query the full resource directory instead of only a limited initial set of records.

### 5. Fixing Search Results

> Why doesn't "Places that can help" show any results for the location I put in the search bar?

**Result:** We identified problems with how user-entered locations were matched against resource records.

We refined the search logic to better handle city names, ZIP codes, and location formats.

## Challenges We Encountered

### 1. Working With a Large Dataset

Our application contains approximately 12,879 imported resource records.

We had to organize the information into a consistent database structure and account for missing fields such as operating hours, eligibility requirements, and geographic coordinates.

### 2. Improving Search Accuracy

Early versions of the application sometimes failed to return relevant results because of restrictive matching or limited record loading.

We improved the search to query the full directory server-side and added nearby-area fallback behavior.

### 3. Handling Incomplete Resource Information

Not every pantry listing includes verified opening hours, ID requirements, or available supplies.

Rather than guessing, we designed the application to identify unknown information and encourage users to contact organizations directly.

We also improved the opening-hours parser to recognize more valid schedules without incorrectly treating monthly events as weekly openings.

### 4. Integrating Multiple AI Services

We integrated Gemini for resource recommendations and translations and ElevenLabs for text-to-speech.

We needed to protect API keys, manage usage limits, and ensure the AI assistant only recommends resources from the records provided to it.

### 5. Debugging User Experience Issues

During testing, we discovered issues with Google Maps directions, location-aware recommendations, and searches that returned no results.

We made targeted changes to improve these experiences while preserving existing functionality.

### 6. Working With an AI App Builder

AI-assisted development allowed us to prototype quickly, but it also required careful review.

We learned to write precise prompts, limit the scope of changes, inspect generated code, and verify functionality instead of assuming every generated implementation was correct.

## What We Learned

- AI-assisted application development and prompt engineering.
- Integrating external AI APIs.
- Building accessible multilingual interfaces.
- Securing backend API credentials.
- Implementing rate limiting and caching.
- Organizing and querying large datasets.
- Handling incomplete and inconsistent information.
- Debugging frontend and backend functionality.
- Improving mobile responsiveness and user experience.
- Collaborating on a software project.
- Testing and validating AI-generated implementations.

## Future Improvements

- Improve the accuracy and freshness of resource listings.
- Expand reliable baby supply, clothing, and hygiene resource data.
- Add an interactive map with geographic distance calculations.
- Improve voice assistance across supported languages.
- Expand resource verification and administrative management tools.
- Continue improving accessibility and search reliability.

## Final Reflection

Building Open Nest helped us understand how AI can be used to address real community challenges.

Beyond creating a working application, we learned the importance of responsible AI integration, accessible design, reliable data, and continuous testing.

Our goal is to make community assistance easier to discover and understand, particularly for people facing language barriers or uncertainty about where to seek help.