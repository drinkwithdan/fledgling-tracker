const Dialog = ({ data, currentLeafId, handleDialogClick }) => {

  // Finds the current node (leaf) from the binary tree based on props
  const showLeaf = data.find((item) => item.id === currentLeafId)

  // Variable to conditionally render buttons on dialog box
  const hasChildren = showLeaf.left

  // Handles clicks from buttons, passes to function from props
  const handleClick = (event) => {
    handleDialogClick(event.target.id)
  }
  
  return (
    <div className="dialog-container">

      <div className="dialog-title">
        <p>{ showLeaf.text }</p>
      </div>

      {/* Only renders buttons if current node has no children */}
      { hasChildren && <div className="dialog-buttons">
        <button id="yes" className="button dialog-btn-yes" onClick={handleClick}>
          Yes
        </button>
        <button id="no" className="button dialog-btn-no" onClick={handleClick}>
          No
        </button>
      </div>}

    </div>
  )
}

export default Dialog
