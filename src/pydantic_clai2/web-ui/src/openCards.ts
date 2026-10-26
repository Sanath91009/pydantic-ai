import { createContext } from 'react'

/** The tool cards the user toggled (opened, or for a file change, which starts open, closed), kept above the
 * transcript so regrouping or remounting a card keeps its state. */
export interface OpenCards {
  open: ReadonlySet<string>
  toggle: (id: string) => void
}

export const OpenCardsContext = createContext<OpenCards>({ open: new Set(), toggle: () => {} })
