const App = {
    data(){
        return{
            title: 'Notes',
            input:{
                value:'',
                placeholder:'Type ur note',
            },
            
            notes:["task1", "task1", "task2"],
        };
    },

    mounted(){
        this.getNotes();
    },


    watch:{
        notes:{
            handler: function (updateList){
               localStorage.setItem('notes',JSON.stringify(updateList));
            },
            deep:true,
        }
    },

    methods:{

        getNotes(){
            const localNotes = localStorage.getItem('notes');
            if(localNotes){
                this.notes= JSON.parse(localNotes);
            }
        },

        onSubmit(){
            this.notes.push(this.input.value);
            // resit
            this.input.value="";
        },

        remove(index){
            console.log(`${index}`)
            this.notes.splice(index,1);
        }
    },
}

Vue.createApp(App).mount('#app');