const app = {
    init(selectors) {
        this.flicks = []
        this.max = 0
        this.list = document.querySelector(selectors.listSelector)
        this.template = document.querySelector(selectors.templateSelector)

        document
         .querySelector(selectors.formSelector)
         .addEventListener('submit', ev => {
            ev.preventDefault()
            this.handleSubmit(ev)
         })
    },

    renderListItem(flick) {
        const item = this.template.cloneNode(true)
        item.classList.remove('template')
        item.dataset.id = flick.id
    
        const nameSpan = item.querySelector('.flickName')
        nameSpan.textContent = flick.name
        
        
        //const elem = item.querySelector(".flickName")
        //debugger  
        //elem.textContent = flick.name

        return item
    },
  
    handleSubmit(ev) {
        
        const f = ev.target
        const flick = {
            id: ++this.max, 
            name: f.flickName.value,
            fav: false,
        }
        
        this.flicks.unshift(flick)
        const item = this.renderListItem(flick)
        this.list.insertBefore(item, this.list.firstElementChild)
        
        f.reset()
    },
    
}

    app.init({
        formSelector: '#flickForm',
        listSelector: '#flickList',
        templateSelector: '.flick.template',
    })