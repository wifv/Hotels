import '../css/searchbarresults.css'

const SearchbarResults = ({results}: any) => {
  return (
    <div className='results'>
      {
        // results.length <= 5 
        // ?
        // results.slice(0, 5).map((item, id: any) => {
        //   <div key={id}>{item.title}</div>
        // })
        // :
        results.map((item, id: any) => {
          <div key={id}>hey {item.title}</div>
        })
      }
    </div>
  )
}

export default SearchbarResults
