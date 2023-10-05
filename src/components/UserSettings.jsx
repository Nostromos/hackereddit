export default function UserSettings() {
// TODO Come back and delete the dropdown item component and just add all menu items manually
  return (
    <>
      <div className="menu-container">
        <div className="menu-trigger">
          <img src={portrait}></img>
        </div>
        <div className="dropdown-menu">
          <ul>
            
            <DropdownItem />
          </ul>
        </div>
      </div>
    </>
  )
}