'use client'
import useSWR from 'swr'

const fetcher = (url: RequestInfo | URL) => fetch(url).then(r => r.json())

function createList(data) {
    const listItems = data.map((item: any) =>
    <li key={item.id}>{item.name}</li>
  )
  
    return (
      <ul>
        {listItems}
      </ul>
    )
  }

export default function fetchData() {
    
    const { data, error } = useSWR('https://gorest.co.in/public/v2/users', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return createList(data)
  }