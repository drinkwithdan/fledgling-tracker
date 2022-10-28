import { useState } from "react"
import Dialog from "./Dialog"
import data from "../data/data.js"

const Tracker = () => {
  const [currentLeafId, setCurrentLeafId] = useState(4)


  const goLeft = () => {
    const currentLeaf = data.find((item) => item.id === currentLeafId)
    setCurrentLeafId(currentLeaf.left)
  }

  const goRight = () => {
    const currentLeaf = data.find((item) => item.id === currentLeafId)
    setCurrentLeafId(currentLeaf.right)
  }

  const handleDialogClick = (id) => {
    if (id === "yes") {
      goLeft()
    }
    else {
      goRight()
    }
  }

  return (
    <div className="tracker">
      <div className="tracker-title">
        <h3>You've found a baby bird on the ground:</h3>
      </div>

      {data && <Dialog
        handleDialogClick={handleDialogClick}
        data={data}
        currentLeafId={currentLeafId}
      />}
    </div>
  )
}

export default Tracker
