import { create } from 'zustand'
import { User } from '@/types'

interface BookmarkState {
  bookmarks: User[]
  add: (user: User) => void
  remove: (id: number) => void
}

export const useBookmarkStore = create<BookmarkState>((set) => ({
  bookmarks: [],
  add: (user) =>
    set((s) => ({ bookmarks: Array.from(new Set([...s.bookmarks, user])) })),
  remove: (id) => set((s) => ({ bookmarks: s.bookmarks.filter((u) => u.id !== id) })),
}))
