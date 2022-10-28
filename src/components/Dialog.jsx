const Dialog = ({ data, currentLeafId, handleDialogClick }) => {
  const showLeaf = data.find((item) => item.id === currentLeafId)

  const handleClick = (event) => {
    handleDialogClick(event.target.id)
  }

  const hasChildren = showLeaf.left
  
  return (
    <div className="dialog-container">

      <div className="dialog-title">
        <p>{ showLeaf.text }</p>
      </div>

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
