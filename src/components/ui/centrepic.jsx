const BgCenter=({bgcenter})=>{
    return( 
    <img 
        src={bgcenter} 
        alt="CenterPic" 
        className="absolute z-0 h-full bottom-0 left-[50%] transform -translate-x-1/2 pointer-events-none"
      />
    )
}
export default BgCenter;