export type TrackLink = {
  label: string
  href: string
}

export type Track = {
  id: string
  name: string
  group: "Main floor" | "Also open"
  summary: string
  build: string
  links: TrackLink[]
}

export const tracks: Track[] = [
  {
    id: "overall",
    name: "Hack The Nest",
    group: "Main floor",
    summary: "Best overall project. Judged on the idea, the demo, and whether someone would actually use it.",
    build: "Any stack. Ship a working demo, a public repo, and a video of 3 minutes or less.",
    links: [{ label: "Devpost", href: "https://hack-the-nest.devpost.com/" }],
  },
  {
    id: "ai-ml",
    name: "Future of Intelligence",
    group: "Main floor",
    summary: "An agent, app, or tool that searches, reasons, and does something a chat box does not.",
    build: "OpenAI models plus Exa search. Every hacker gets Exa API credits. Keep keys out of git.",
    links: [
      { label: "OpenAI docs", href: "https://platform.openai.com/docs" },
      { label: "Exa", href: "https://docs.exa.ai" },
    ],
  },
  {
    id: "bci",
    name: "Mind and Machine",
    group: "Main floor",
    summary: "A brain-computer interface project: a game, an assistive tool, or a look at real brain-signal data.",
    build: "g.tec Unicorn hardware is on site, with public datasets. PiEEG has boards and a cloud stream. No real patient data.",
    links: [
      { label: "g.tec datasets", href: "https://github.com/unicorn-bi/Hackathon" },
      { label: "PiEEG", href: "https://pieeg.com" },
    ],
  },
  {
    id: "future-of-money",
    name: "Future of Money",
    group: "Main floor",
    summary: "Fix one everyday moment where sending money is slow or stuck.",
    build: "Breez has a bounty list and a starter template per bounty. Use the Breez SDK and write up how you built it.",
    links: [{ label: "Breez SDK", href: "https://breez.technology" }],
  },
  {
    id: "best-beginner",
    name: "Best Beginner",
    group: "Main floor",
    summary: "For a team that is mostly at their first hackathon. Learning counts more than polish.",
    build: "Pick a small problem you can finish. A working slice beats a big unfinished idea.",
    links: [],
  },
  {
    id: "capture-the-flag",
    name: "Capture the Flag",
    group: "Main floor",
    summary: "A side contest running all weekend. Find flags in puzzles, vulnerable apps, and hidden files.",
    build: "This is a scoreboard game, separate from the project you submit.",
    links: [],
  },
  {
    id: "astronomy",
    name: "Beyond the Horizon",
    group: "Also open",
    summary: "A map, model, game, or teaching tool built on NASA's open data.",
    build: "One free NASA API key covers APOD, Mars photos, asteroids, and space weather. Landsat, MODIS, and Prithvi are in play. Great Lakes ideas fit.",
    links: [{ label: "NASA APIs", href: "https://api.nasa.gov" }],
  },
  {
    id: "quantum",
    name: "Quantum Computing",
    group: "Also open",
    summary: "A game, visualizer, or algorithm you can run on a laptop and explain in plain words.",
    build: "Quantum Rings gives every hacker a free 200-qubit license. The sign-up code is at kickoff and on Discord, not in this repo.",
    links: [
      { label: "Quantum Rings", href: "https://quantumrings.com" },
      { label: "PennyLane", href: "https://pennylane.ai" },
    ],
  },
  {
    id: "base44",
    name: "Best Use of Base44",
    group: "Also open",
    summary: "Describe an app in plain language and ship a live link people can open.",
    build: "Base44 includes the database, login, and hosting. Winners are a community vote.",
    links: [{ label: "Base44", href: "https://base44.com" }],
  },
  {
    id: "ssojet",
    name: "Best Use of SSOJet",
    group: "Also open",
    summary: "Put real single sign-on on the project.",
    build: "SSOJet's free plan is available to hackers. Wire login into the app you are already building.",
    links: [{ label: "SSOJet", href: "https://ssojet.com" }],
  },
  {
    id: "code-of-life",
    name: "Code of Life",
    group: "Also open",
    summary: "A bioinformatics pipeline on public or synthetic data, with Seqera's platform and AI co-scientist.",
    build: "Use the team Seqera workspace and nf-core test data. Research and teaching only. No medical advice and no real patient records.",
    links: [{ label: "Seqera", href: "https://cloud.seqera.io" }],
  },
  {
    id: "cs-department",
    name: "Computer Science",
    group: "Also open",
    summary: "The EMU CS department prize for the strongest software, whatever the idea.",
    build: "Clean structure and code that holds up. Any stack. The winning team splits a $1,000 scholarship.",
    links: [{ label: "EMU CS", href: "https://www.emich.edu/computer-science/" }],
  },
  {
    id: "mlh",
    name: "MLH tracks",
    group: "Also open",
    summary: "Extra sponsor challenges you can add on top of your main project.",
    build: "Gemini API, Solana, Tiger Data, Vultr, MongoDB Atlas, a GoDaddy domain, and an MLH writing challenge.",
    links: [
      { label: "MLH prizes", href: "https://www.mlh.com/events/hack-the-nest-96/prizes" },
    ],
  },
  {
    id: "elevenlabs",
    name: "Best Use of ElevenLabs",
    group: "Also open",
    summary: "Something that talks, listens, or sounds alive: a study partner, a character, or an accessibility tool.",
    build: "Text to speech, speech to text, voice agents, and sound effects. Creator plan is free for a month for hackers.",
    links: [{ label: "ElevenLabs", href: "https://elevenlabs.io" }],
  },
]
