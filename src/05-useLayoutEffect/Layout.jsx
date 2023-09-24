import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";
import { LoadingQuote, Quote } from "../03-example/";
export const Layout = () => {

  const {counter, increment} = useCounter(1);
  const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
  const {author, quote} = !!data && data[0];
  // console.log( data );
  
  return (
    <>
      <div>Breaking Bad Quotes</div>
      <hr />
      {/* {
        (isLoading)
        ? <div className="alert alert-info text-center">
            Loading...
          </div>
        :<blockquote className="blockquote text-end">
            <p className="mb-1">{quote}</p>
            <footer className="blockquote-footer ">{author}</footer>
         </blockquote>
      } */}
      <LoadingQuote isLoading={isLoading} />
      <Quote quote={quote} author={author}  />
      {/* <h1>Counter: {counter}</h1> */}
      <button disabled={isLoading} className='btn btn-primary' onClick={()=>increment(1)}>Next quote</button>
    </>

  )
}
