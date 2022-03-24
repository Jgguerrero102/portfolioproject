export default function Menu({ menuName, menuItems }) {
    return (<div>
        <h1>{menuName}</h1>
        <MenuItem {...menuItems[0]} />
        {
            menuItems.map((item, index) => <MenuItem {...item} key={index}></MenuItem>)
        }
    </div>)
}