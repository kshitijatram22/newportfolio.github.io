let btn = document.getElementById('darkmode')
let body = document.body
let heading = document.getElementById('header')
let intro = document.getElementById('intro2')
let languages = document.getElementById('langs')
let tools = document.getElementById('tools')
btn.addEventListener('click', darkModeToggle)
let footer = document.getElementById('credit')
function darkModeToggle(e) {

    if(btn.textContent.includes('Light')){
        
    languages.style.backgroundColor = 'rgb(0, 119, 255)'
    tools.style.backgroundColor = 'rgb(0, 119, 255)'
    languages.style.borderColor = 'rgb(0, 119, 255)'
    tools.style.borderColor = 'rgb(0, 119, 255)'
    body.className = 'lightmode'
    btn.textContent = 'Dark'
    intro.style.backgroundColor = 'rgb(0, 119, 255)'
    heading.style.color ='white'
    btn.style.backgroundColor = 'black'
    btn.style.color = 'white'
    footer.style.color = 'white'
}
else{
    footer.style.color = '#fa1414'
    btn.style.backgroundColor = 'white'
    btn.style.color = 'black'
    languages.style.backgroundColor = '#15317E'
    tools.style.backgroundColor = '#15317E'
    body.className = 'darkmode'
    languages.style.borderColor = 'white'
    tools.style.borderColor = 'white'
    btn.textContent = 'Light'
    intro.style.backgroundColor = '#fa1414'
    heading.style.color ='#fa1414'
    }

}

