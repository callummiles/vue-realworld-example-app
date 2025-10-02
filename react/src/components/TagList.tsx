import { useState, useEffect } from 'react'

const API_URL = 'https://api.realworld.show/api'

interface TagsResponse {
  tags: string[]
}

function TagList() {
  const [tags, setTags] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTags = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(`${API_URL}/tags`)
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data: TagsResponse = await response.json()
        setTags(data.tags)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch tags')
        console.error('Error fetching tags:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTags()
  }, [])

  if (isLoading) {
    return <div className="tag-list">Loading tags...</div>
  }

  if (error) {
    return <div className="tag-list">Error loading tags: {error}</div>
  }

  if (tags.length === 0) {
    return <div className="tag-list">No tags available</div>
  }

  return (
    <div className="tag-list">
      {tags.map((tag, index) => (
        <a
          key={index}
          href={`#`}
          className="tag-pill tag-default"
          onClick={(e) => {
            e.preventDefault()
            console.log('Tag clicked:', tag)
          }}
        >
          {tag}
        </a>
      ))}
    </div>
  )
}

export default TagList
