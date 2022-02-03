export function renderBlock (elementId: string, html: string) {
  const element = document.getElementById(elementId)
  element.innerHTML = html
}

interface messageObj {
  text: string
  type: string
}
interface actionObj {
  name: string
  handler: CallableFunction
}

export function renderToast (message: messageObj, action: actionObj = null) {
  let messageText: string = ''
  
  if (message != null) {
    messageText = `
      <div id="info-block" class="info-block ${message.type}">
        <p>${message.text}</p>
        <button id="toast-main-action">${action?.name || 'Закрыть'}</button>
      </div>
    `
  }
  
  renderBlock(
    'toast-block',
    messageText
  )

  const button = document.getElementById('toast-main-action')
  if (button != null) {
    button.onclick = function() {
      if (action != null && action.handler != null) {
        action.handler()
      }
      renderToast(null)
    }
  }
}