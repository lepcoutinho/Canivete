var ana = {
    tipo: "HUMANO",
    tel:"",
    print:function(){
        console.log(this.tipo)
    },
    set telefone(t){
        this.tel = t;
    },
    get printTel(){
        return this.tel;
    }
    
}

ana.telefone = "99817621";
console.log(ana.printTel);