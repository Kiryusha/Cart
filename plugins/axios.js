// Плагин-надстройка над базовым функционалом axios. В основном используется для обработки ошибок.
export default function ({ $axios }) {
  $axios.onError(e => {
    let text = 'Неизвестная ошибка'
    const { response, message } = e
    if (response.data && response.data.error && response.data.error.message) {
      text = response.data.error.message
    } else if (message) {
      text = message
    }

    // Заготовка под обработку ошибок. Если успею, здесь будет вызыван нотификатор.
    console.warn(text)

    return Promise.reject(e)
  })
}
