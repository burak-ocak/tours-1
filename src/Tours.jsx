import './tours.css'
function Tours({data, del}) {
   
   return(
   <div className='tours' >
      <div className="single-tour" style={{border:"1px solid black"}}>
         <img src={data.image} alt="" />
         <div className="tour-info">
            <span className="tour-price" style={{color:"white"}}>${data.price}</span>
            <h4>{data.name}</h4>
            <p>{data.info}
            <button className='readMore'>Read More</button>
            </p>
            <button className="delete-btn" onClick={()=>del(data.id)}>not interested</button>
         </div>
      </div>
   </div>
   )
}
export default Tours;