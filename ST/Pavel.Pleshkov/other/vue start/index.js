const app = new Vue({
    el: '#app',
    data: {
        name:'Geek',

        // names: ['Frodo', 'Sam', 'Meriadoc', 'Peregrin'],
    },
    methods: {
        clickHandler() {
            console.log(`click`);
        }
    },
    computed: {
        //высисляемые свойства, для преобразования исходных данных data
        upperCaseName() {
            return this.name.toUpperCase();
        }
    },
    mounted() {
        //выполнится сразу после загрузки приложения
        console.log('App loaded. This is field "mounted(){console.log(.....)}"');
    },
});

console.log(app);
