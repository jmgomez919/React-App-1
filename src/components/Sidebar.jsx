import { useState, useCallback } from "react"
/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */
export default function Sidebar({ initialMenuItems }) {
  let [newMenuItem, setNewMenuItem] = useState("")
  // TODO: 2 
  let [menuItems, setMenuItems] = useState(initialMenuItems)
  let [filter, setFilter] = useState("")

  let addMenuItem = useCallback((item) => {
    console.log("Added menu item")
    // TODO: 3.
    setMenuItems(prevMenuItems => [item, ...prevMenuItems])
  }, [])

  // TODO: 4.
  // Filter menu items based on the filter input (case-sensitive)
  const filteredMenuItems = menuItems.filter((item) => {
    if (filter === "") return true
    const regex = new RegExp(filter, "i")
    return regex.test(item)
  })

  // TODO: 1 
  return (
    <div>
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
      ></input>
      <br />
      <button
        onClick={() => {

          addMenuItem(newMenuItem)
          setNewMenuItem("")
        }}
      >
        Add Item
      </button>
      <br />
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      ></input>
      <ul>
        {filteredMenuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
