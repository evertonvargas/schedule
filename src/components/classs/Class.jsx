export function Class(props){
  return(
    <>
        <span>{props.subject}</span>
        <p>{props.teacher}</p>
        <a href={props.link}>{props.topic}</a>
    </>
  )
}