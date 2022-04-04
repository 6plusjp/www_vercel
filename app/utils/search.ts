import { MdxProps } from './post.server'
import { matchSorter, rankings as matchSorterRankings } from 'match-sorter'

export function createSearch(value: string): string {
  const searchParams = new URLSearchParams({ sort: 'top' })
  searchParams.set('q', value)

  return searchParams.toString()
}

export function getResourcesSearchParams(search: string): URLSearchParams {
  const searchParams = new URLSearchParams(search)
  const supported = ['q']

  for (const key of searchParams.keys()) {
    if (supported.includes(key)) {
      continue
    }

    searchParams.delete(key)
  }

  return searchParams
}

interface SearchOptions {
  keyword?: string | null
}
export function getSearchOptions(searchParams: URLSearchParams): SearchOptions {
  return {
    keyword: searchParams.get('q'),
  }
}

export function filterPosts(
  posts: Array<MdxProps['frontmatter']>,
  searchString: string
) {
  if (!searchString) return posts

  const options = {
    keys: [
      {
        key: 'title',
        threshold: matchSorterRankings.CONTAINS,
      },
      {
        key: 'categories',
        threshold: matchSorterRankings.CONTAINS,
        maxRanking: matchSorterRankings.CONTAINS,
      },
      {
        key: 'meta.keywords',
        threshold: matchSorterRankings.CONTAINS,
        maxRanking: matchSorterRankings.CONTAINS,
      },
      {
        key: 'description',
        threshold: matchSorterRankings.CONTAINS,
        maxRanking: matchSorterRankings.CONTAINS,
      },
    ],
  }

  const allResults = matchSorter(posts, searchString, options)
  const searches = new Set(searchString.split(' '))
  if (searches.size < 2) {
    // if there's only one word then we're done
    return allResults
  }

  // if there are multiple words, we'll conduct an individual search for each word
  const [firstWord, ...restWords] = searches.values()
  if (!firstWord) {
    // this should be impossible, but if it does happen, we'll just return an empty array
    return []
  }
  const individualWordOptions = {
    ...options,
    keys: options.keys.map(key => {
      return {
        ...key,
        maxRanking: matchSorterRankings.CASE_SENSITIVE_EQUAL,
        threshold: matchSorterRankings.WORD_STARTS_WITH,
      }
    }),
  }

  // go through each word and further filter the results
  let individualWordResults = matchSorter(
    posts,
    firstWord,
    individualWordOptions
  )
  for (const word of restWords) {
    const searchResult = matchSorter(
      individualWordResults,
      word,
      individualWordOptions
    )
    individualWordResults = individualWordResults.filter(r =>
      searchResult.includes(r)
    )
  }
  return Array.from(new Set([...allResults, ...individualWordResults]))
}
