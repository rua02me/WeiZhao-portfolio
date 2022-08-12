import './topbar.scss'
import { Mail, Person } from "@material-ui/icons"


export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={'topbar ' + (menuOpen && "active")}>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>Guacamole!</a>
          <div className="itemContainer">
            <Person/>
            <span> +1 123 456 1234</span>
          </div>
          <div className="itemContainer">
            <Mail/>
            <span> gua@email.com</span>
          </div>
        </div>
        <div className='right'>
          <div className='ham' onClick={()=>setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}
