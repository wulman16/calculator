document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('form').addEventListener('click', populateExpression)
})

function populateExpression(e) {
  if(e.target && e.target.nodeName === 'INPUT' && e.target.className === 'expression-input') {
    const expression = document.getElementById('expression')
    const existingValue = expression.value
    expression.value = existingValue + e.target.value
  } else if(e.target.className === 'clear') {
    const expression = document.getElementById('expression')
    expression.value = ''
  } else if(e.target.className === 'evaluate') {
    const expression = document.getElementById('expression')
    try {
      expression.value = eval(expression.value)
    }
    catch(err) {
      expression.value = 'ERROR'
    }
  }
}
