# Development Journal

## How We Built It

We used Base44 to develop and deploy our application, with the Gemini API for AI assistance and translation and the ElevenLabs API for voice.

Our development process included:

- Designing the homepage and user experience.
- Building the resource discovery interface.
- Creating a resource database.
- Gathering and organizing food pantry information.
- Implementing city and ZIP code-based search.
- Adding the Gemini AI assistant, translations and ElevenLabs voice.
- Securing the backend with rate limits, caching and scheduled cleanup.
- Refining the interface to make it welcoming and accessible.

## Prompts We Used

We built Open Nest by prompting Base44's AI app builder. These are the five most important prompts from our development process.

### 1. Homepage Design

> Improve the overall homepage design of Open Nest while keeping its existing deep forest green and warm cream color palette. [...] Preserve all existing functionality, resource listings, search features, database connections, and language options. Do not rebuild the application or remove any existing features.

**Result:** A more polished homepage with the same brand identity and no broken features. Naming the exact colors and listing what to keep stopped the AI from starting over.

### 2. Security, Performance and Reliability

> I want to finalize the security, performance, and reliability of our application [...] Maintain server-side protection against excessive Gemini and ElevenLabs API requests. Keep all API keys securely stored on the backend. Ensure users can continue accessing the application without creating accounts. Implement reasonable limits that account for multiple users sharing public Wi-Fi, such as shelters and libraries.

**Result:** Rate limits on the AI features, API keys kept on the backend, cached responses (repeat translations dropped from about 6 s to 292 ms) and **0 security vulnerabilities**, all without requiring accounts.

### 3. Checking a Database Operation Before Approving It

> Before I approve, can you confirm that this operation will only delete expired records from the Api Usage table? [...] Also, how old must a record be before it is deleted?

**Result:** The AI admitted it had described the step wrongly, so nothing was deleted. We then had it build an admin-only cleanup with clear retention rules. Lesson: verify AI work before approving it.

### 4. Connecting Search to the Backend

> Is it possible to have the Find Pantries JavaScript file added to the small search bar so it actually searches for the pantries? [...] Yes, change it, then don't change anything else.

**Result:** The home search bar now uses the same `findPantries` backend lookup as the Find Pantries page. Asking "is this possible?" first and adding "don't change anything else" kept the change small.

### 5. Fixing Search Results

> Why doesn't "Places that can help" show any results for the location I put in the search bar?

**Result:** The AI found the search was matching the whole typed text as one exact string. It now matches word by word, so input like "Ann Arbor, MI" returns results.

## Challenges We Encountered

- Working with a large food pantry dataset.
- Cleaning and restructuring data to match our Resource table.
- Working within the limitations of our development platform.
- **Search matching:** the first version compared the whole typed text as one exact string, so input like "Ypsilanti, MI" returned nothing. We fixed it to match word by word.
- **Limited coverage:** the directory currently covers Ann Arbor, Ypsilanti and Chelsea, so other cities (like Allendale) return no results yet.
- **Protecting paid APIs without requiring logins:** we needed rate limits that stop abuse but don't block people sharing one Wi-Fi network at a shelter or library.
- **Keeping the AI builder in check:** a large redesign changed more than we wanted, and the AI described one database step inaccurately. We learned to review its work and ask follow-up questions.

## What We Learned

- AI-assisted application development.
- Prompt engineering: writing clear, specific prompts that say what to change and what to keep.
- Integrating multiple AI APIs (Gemini and ElevenLabs) into one app.
- API security: rate limiting, caching and keeping keys on the backend.
- Verifying AI-generated work instead of assuming it is correct.
- Accessibility: multilingual support, right-to-left layout, color contrast and reduced motion.
- Database organization and data management.
- User interface and experience design.
- Working with large datasets.
- Debugging and troubleshooting.
- Team collaboration.
- Turning real-world problems into working applications.

## Future Improvements

- Expand the resource directory beyond Ann Arbor, Ypsilanti and Chelsea.
- Improve search accuracy.
- Add more community resource categories.
- Make essential assistance easier to discover.
