// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {
    displayAnswer: false,
  }

  onClickedIcon = () => {
    this.setState(prevState => ({
      displayAnswer: !prevState.displayAnswer,
    }))
  }

  render() {
    const {questionText, answerText} = this.props
    const {displayAnswer} = this.state
    console.log(displayAnswer)
    const imageIconAlt = displayAnswer ? 'minus' : 'plus'
    const imageIconUrl = displayAnswer
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    return (
      <li className="faq-list">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          <button
            type="button"
            className="icon-btn"
            onClick={this.onClickedIcon}
          >
            <img src={imageIconUrl} alt={imageIconAlt} className="icon" />
          </button>
        </div>
        {displayAnswer && (
          <div className="answer-container">
            <hr />
            <p className="answer">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}
export default FaqItem
