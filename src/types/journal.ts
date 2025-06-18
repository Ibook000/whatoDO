export interface JournalEntry {
  id: string
  date: string
  content: string
  media: MediaItem[]
  mood: 'happy' | 'sad' | 'neutral' | 'excited' | 'calm' | 'stressed'
  tags: string[]
  createdAt: string
  updatedAt: string
}

export interface MediaItem {
  id: string
  type: 'image' | 'video' | 'audio'
  url: string
  name: string
  size: number
  thumbnail?: string
}

export interface JournalStats {
  totalEntries: number
  totalDays: number
  averageEntriesPerDay: number
  mostUsedTags: Array<{ tag: string; count: number }>
  moodDistribution: Record<string, number>
}