

export default function CustomImages({imgSrc, pt }){
    return(
        <div className="custom-image" style = {{paddingTop: pt}}>
            <img src={imgSrc} alt="" />
            </div>
    )
}