import React, { useEffect, useState } from "react"
import QuestionList from "./QuestionList"

function QuestionItem({ question, setSubmissionUpdate, submissionUpdate }) {
   const [updateObj, setUpdateObj] = useState({})
   const [deleteItem, setDeleteItem] = useState(false)

   const handleAnswerChange = (e, id) => {
      let copyObj = { ...question }
      let correctIndexUpdate = e.target.value
      let newObj = { ...copyObj, correctIndex: correctIndexUpdate }
      setUpdateObj(newObj)
   }
   useEffect(() => {
      fetch("http://localhost:4000/questions/" + id, {
         method: "PATCH",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(updateObj),
      })
         .then(r => r.json())
         .then(data => data)
   }, [updateObj])

   useEffect(() => {
      if (deleteItem === false) {
         return
      } else {
         fetch("http://localhost:4000/questions/" + id, { method: "DELETE" })
         setSubmissionUpdate(!submissionUpdate)
      }
   }, [deleteItem])

   const handleDelete = (e, id) => {
      setDeleteItem(true)
   }

   const { id, prompt, answers, correctIndex } = question

   const options = answers.map((answer, index) => (
      <option key={index} value={index}>
         {answer}
      </option>
   ))

   return (
      <li>
         <h4>Question {id}</h4>
         <h5>Prompt: {prompt}</h5>
         <label>
            Correct Answer:
            <select onChange={e => handleAnswerChange(e, id)} defaultValue={correctIndex}>
               {options}
            </select>
         </label>
         <button onClick={e => handleDelete(e, id)}>Delete Question</button>
      </li>
   )
}

export default QuestionItem
