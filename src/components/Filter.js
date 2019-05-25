import Component from './Component.js';

class Filter extends Component {

    render() {
        const dom = this.renderDOM();
        const form = dom.querySelector('form');
        form.addEventListener('input', () => {
            event.preventDefault();
            // const formData = new FormData(form);
     

            const search = form.elements['search'].value;
            this.props.onFilter({ 
                completed: form.elements['radio'].value,
                text: search

            });  
        });
       
      
        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <fieldset  class="radio">
                <form id="search-form">
                    <div >
                    <label  for="search-todo">Search: <input name="search" type="text"  placeholder="Todo"></label>

                    <label for="all">All<input type="radio" name="radio" value="all"></label>
                    <label for="completed">Completed<input type="radio" name="radio" value="true"></label>
                    <label for="not-done">Not Done<input type="radio" name="radio" value="false"></label>
                    </div>
                </form>
            </fieldset>
    `;
    }
}

export default Filter;