const promise = new Promise((resolve, reject) => {
  const button = document.getElementById('button')
  const content = document.getElementById('content')

  button.addEventListener('click', function () {
      const block = document.createElement('div')
      block.classList = 'block'
      content.appendChild(block)
      
  })
})