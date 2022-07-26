
function Emailtb(){
    return(
      <nav className="email-toolbar">
      <ul>
        <li>
          <img className="icon" src={backArrow} alt="reply button" />
        </li>
        <li>
          <img className="icon" src={downloadButton} alt="archive button" />
        </li>
        <li>
          <img className="icon" src={rubbishButton} alt="delete button" />
        </li>
      </ul>
      <div className="space"></div>
      <div>
        <p>1 of 25</p>
        <button>&lt;</button>
        <button>&gt;</button>
      </div>
    </nav>


    )
}

export default Emailtb