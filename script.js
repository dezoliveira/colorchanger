function changeColor(event){
  //reseta e remove a classe ativa
  document.querySelectorAll('span.active').forEach(function(item){
    item.classList.remove('active')
  })

  //adiciona classe ao menu selecionado
  event.target.classList.add('active')

}