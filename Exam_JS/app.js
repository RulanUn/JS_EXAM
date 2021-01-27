const form = document.querySelector('#submitForm')
const imgUrlInput = document.querySelector('input[name="imgUrl"]')
const topTextInput = document.querySelector('input[name="topText"]')
const bottomTextInput = document.querySelector('input[name="bottomText"]')
const fontNameInput = document.querySelector('input[name="fontName"]')
const colorInput = document.querySelector('input[name="color"]')
const fontSizeInput = document.querySelector('input[name="fontsize"]')
const imgHeight = document.querySelector('input[name="height"]')
const imgWidth = document.querySelector('input[name="width"]')
const position = document.querySelector('#position')
const podpis = document.querySelector('input[name="podpis"]')
const result = document.querySelector('#result')


form.addEventListener('submit',function(e){
    e.preventDefault();
    const newMeme = makePost(imgUrlInput.value,topTextInput.value,bottomTextInput.value,colorInput.value,
        fontSizeInput.value,fontNameInput.value,
        imgHeight.value,
        imgWidth.value,position.value, podpis.value)
    result.appendChild(newMeme)
    imgUrlInput.value = ''
    topTextInput.value=''
    bottomTextInput.value=''
    fontNameInput.value=''
    fontNameInput.value=''
    imgHeight.value='150'
    imgWidth.value='150'
    podpis.value=''
})


function makePost(imgUrl,zagolovok,text,color,size,font,height,width,position,podpis){
    const post = document.createElement('div')
    post.setAttribute('class','container')
    let img = new Image(height,width)
    img.src = imgUrl
    img.style.float=position
    img.setAttribute('alt',podpis)
    post.appendChild(img)
    const textTop = document.createElement('h2')
    textTop.textContent = zagolovok.slice(0,30)
    post.prepend(textTop)
    const textbottom = document.createElement('div')
    textbottom.setAttribute('class','botcenter')
    textbottom.textContent = text
    textbottom.style.color = color;
    textbottom.style.fontSize = size + 'px';
    textbottom.style.fontFamily = font
    post.appendChild(textbottom)
    const rmvButton = document.createElement('button')
    rmvButton.setAttribute('class','removebutton')
    rmvButton.innerText = 'X'
    post.appendChild(rmvButton)
    const horizontalLine = document.createElement('hr')
    post.appendChild(horizontalLine)
    const signTime = document.createElement('div')
    signTime.setAttribute('class', 'signTime')
    signTime.innerText = new Date()
    post.appendChild(signTime)
    return post;
}

result.addEventListener('click',function(e){
    e.preventDefault();
    if (event.target.tagName === 'BUTTON'){
        e.target.parentElement.remove()
    }
})