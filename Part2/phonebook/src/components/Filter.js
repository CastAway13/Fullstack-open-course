const Filter =({searchName, handleSearchname}) =>{
    return(
        <div>
            Filter shown with:<input value={searchName} onChange={handleSearchname}/>
        </div>
    )
}
export default Filter