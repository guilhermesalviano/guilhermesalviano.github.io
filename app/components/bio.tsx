'use client'

import { useState, type ReactNode } from 'react'

/**
 * "Bio" section with a Default/Long length toggle, mirroring the bio block
 * on leerob.io: a small sans label row over a hairline border, with the
 * active option underlined back onto that border.
 */
export function Bio({
  label,
  defaultLabel,
  longLabel,
  defaultBio,
  longBio,
}: {
  label: string
  defaultLabel: string
  longLabel: string
  defaultBio: ReactNode
  longBio: ReactNode
}) {
  const [showLong, setShowLong] = useState(false)

  return (
    <section aria-label={label} className="mb-[3.25rem]">
      <div className="mb-[1.35rem] flex items-baseline justify-between gap-4 border-b border-line pb-[0.55rem] text-sm font-ui tracking-[0.01em] text-nav">
        <span>{label}</span>
        <div role="group" aria-label={`${label} — length`} className="flex gap-4">
          <BioOption
            label={defaultLabel}
            active={!showLong}
            onClick={() => setShowLong(false)}
          />
          <BioOption
            label={longLabel}
            active={showLong}
            onClick={() => setShowLong(true)}
          />
        </div>
      </div>
      {showLong ? longBio : defaultBio}
    </section>
  )
}

function BioOption({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`relative cursor-pointer border-0 bg-transparent p-0 py-[0.2rem] [font:inherit] text-nav transition-colors duration-150 hover:text-copy focus:text-copy ${
        active
          ? 'text-copy after:absolute after:inset-x-0 after:-bottom-[0.62rem] after:h-px after:bg-copy'
          : ''
      }`}
    >
      {label}
    </button>
  )
}
