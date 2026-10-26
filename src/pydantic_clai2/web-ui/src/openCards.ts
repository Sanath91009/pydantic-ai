import { createContext } from 'react'

/** The tool cards the user opened (or, for a file change shown open, folded), kept above the transcript so
 * regrouping or remounting a card keeps its state. */
export interface OpenCards {
  open: ReadonlySet<string>
  toggle: (id: string) => void
}

export const OpenCardsContext = createContext<OpenCards>({ open: new Set(), toggle: () => {} })
