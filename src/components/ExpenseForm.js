import React from 'react';

class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: '',
    amount: ''
  }

  OnDescriptionChange = (e) => {
    const description = e.target.value
    this.setState(() => {
      return {
        description
      }
    })
  }
  OnNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => {
      return {
        note
      }
    })
  }

  OnAmountChange = (e) => {
    const amount = e.target.value;
    if(amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => {
        return {
          amount
        }
      })
    }
  }

  render() {
    return (
      <div>
        <form>
          <input 
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.OnDescriptionChange}
          />
          <input
            value={this.state.amount} 
            type="text"
            placeholder="Amount"
            onChange={this.OnAmountChange}
          />
          <textarea
            onChange={this.OnNoteChange}
            value={this.state.note}
            placeholder="Add a note for your expense (optional)"
          >
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}

export default ExpenseForm;