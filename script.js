// Change the upload file name
const thumbnail = document.querySelector('.thumbnail')
const fileNameEl = document.querySelector('.file-name')

thumbnail.addEventListener('input', () => {
  const fileName = thumbnail.files[0].name

  fileNameEl.innerText = fileName
  fileNameEl.classList.add('uploaded')
})
