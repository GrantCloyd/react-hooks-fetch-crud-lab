import React, { useState, useEffect } from "react"
import AdminNavBar from "./AdminNavBar"
import QuestionForm from "./QuestionForm"
import QuestionList from "./QuestionList"

function App() {
   const [page, setPage] = useState("List")
   const [questions, setQuestions] = useState([])
   const [submissionUpdate, setSubmissionUpdate] = useState(false)

   useEffect(async () => {
      const resp = await fetch("http://localhost:4000/questions")
      const data = await resp.json()

      setQuestions(data)
   }, [submissionUpdate])

   const handleQuestionAdd = newQuestion => {
      setQuestions([newQuestion, ...questions])
      setSubmissionUpdate(!submissionUpdate)
   }

   return (
      <main>
         <AdminNavBar onChangePage={setPage} />
         {page === "Form" ? (
            <QuestionForm handleQuestionAdd={handleQuestionAdd} />
         ) : (
            <QuestionList
               questions={questions}
               setSubmissionUpdate={setSubmissionUpdate}
               submissionUpdate={submissionUpdate}
            />
         )}
      </main>
   )
}

export default App
