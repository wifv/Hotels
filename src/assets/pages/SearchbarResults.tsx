import '../css/searchbarresults.css'

const SearchbarResults = ({results}: any) => {
  return (
    <div className='results'>
      {
        results.length >= 15
        ?
        results.slice(0, 15).map((item: any, id: any) => {
          return <div key={id} className='results-item'>{item.title}</div>
        })
        :
        results.map((item: any, id: any) => {
          return <div key={id}>hey {item.title}</div>
        })
      }
    </div>
  )
}

export default SearchbarResults
