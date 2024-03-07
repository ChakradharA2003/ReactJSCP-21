// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem/index'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="bg-container">
        <div className="white-card">
          <h1 className="heading">FAQs</h1>
          <ul className="faqs-list">
            {faqsList.map(faq => (
              <FaqItem
                key={faq.id}
                id={faq.id}
                questionText={faq.questionText}
                answerText={faq.answerText}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
