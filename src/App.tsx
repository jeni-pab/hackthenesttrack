import { useState } from 'react'
import { tracks, type Track } from './tracks'
import './App.css'

const groups = ['Main floor', 'Also open'] as const

export default function App() {
  const [selected, setSelected] = useState<Track>(tracks[0])

  return (
    <div className="page">
      <header className="top">
        <p className="eyebrow">Hack The Nest · EMU · Nov 14–15, 2026</p>
        <h1>Ready to build.</h1>
        <p className="lede">
          This repo is the project. Final submissions close Sunday, Nov 15 at
          12:00 PM ET. Demos are 1:15–2:15 PM in the Student Center Ballroom.
        </p>
      </header>

      <main className="layout">
        <nav className="board" aria-label="Tracks">
          {groups.map((group) => (
            <section key={group}>
              <h2>{group}</h2>
              <ul>
                {tracks
                  .filter((track) => track.group === group)
                  .map((track) => (
                    <li key={track.id}>
                      <button
                        type="button"
                        className={track.id === selected.id ? 'on' : undefined}
                        aria-pressed={track.id === selected.id}
                        onClick={() => setSelected(track)}
                      >
                        {track.name}
                      </button>
                    </li>
                  ))}
              </ul>
            </section>
          ))}
        </nav>

        <article className="brief" key={selected.id}>
          <p className="eyebrow">{selected.group}</p>
          <h2>{selected.name}</h2>
          <p>{selected.summary}</p>
          <h3>How to build it</h3>
          <p>{selected.build}</p>
          {selected.links.length > 0 && (
            <ul className="links">
              {selected.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
          <p className="next">
            Say the track and the idea. The app we submit gets built in{' '}
            <code>src/</code>.
          </p>
        </article>
      </main>
    </div>
  )
}
