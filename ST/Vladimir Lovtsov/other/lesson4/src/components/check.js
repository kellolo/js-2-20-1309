export default class Check {

    constructor() {
        this.container = document.querySelector(".container");
        this.render();
      }


    render() {
        this.clear();
        let str = `<heading>
                    <h1>Transform text</h1>
                </heading>
                <main>
                    <form action="#">
                        <fieldset>
                            <legend>Enter text</legend>
                            <textarea cols="60" rows="20"></textarea>
                            <button>Transform</button>
                        </fieldset>
                    </form>

                </main>
                <footer>
                    <span>Made by Vladimir Lovtsov &copy;</span>
                </footer> `;
        this.container.innerHTML = str;
        this.action();
    }

    action() {
        const btn = document.querySelector("button");
    
        btn.addEventListener("click", (event) => {
          event.preventDefault();
          const text = document.querySelector("textarea").value;
          const regular = /(^')|(\ ')|('\ )|('$)/gmi;
          document.querySelector("textarea").value = text.replace(regular, ' "');
        });
      }

      clear() {
        this.container.innerHTML = "";
      }
}


//let check = new Check();