export default function Title({ count }) {
  return <h1 className="title"> {count === 5 ?  <span>LIMIT! Buy <b>Pro</b> for &gt;5</span>  : 'Fancy Counter' }</h1>;
}
