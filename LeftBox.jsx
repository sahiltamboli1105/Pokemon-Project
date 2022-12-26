const Main=(p)=>{
    // console.log(p.pokeTypes)
    return(
        
        <div className="mainLeftBox">
            
            <p className="mainLeftBoxHead">Select Type Of Pokemon</p>
            {p.pokeTypes.map(({name,url})=>{
               return (<div className="types" onClick={p.func1} accessKey={url}>{name}</div>)
            })}
            
        </div>
    );
}
export default Main;