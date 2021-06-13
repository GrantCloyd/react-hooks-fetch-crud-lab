import React from "react"
import QuestionItem from "./QuestionItem"

function QuestionList({ questions, setSubmissionUpdate, submissionUpdate }) {
   console.log(questions)
   const questionsItems = questions.map(question => (
      <QuestionItem
         key={question.id}
         question={question}
         questions={questions}
         submissionUpdate={submissionUpdate}
         setSubmissionUpdate={setSubmissionUpdate}
      />
   ))

   return (
      <section>
         <h1>Quiz Questions</h1>
         <ul>{questionsItems}</ul>
      </section>
   )
}

export default QuestionList
