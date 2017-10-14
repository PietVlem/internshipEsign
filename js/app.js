new Vue({
    el: '#root',
    data:{
        name: "",
        errorname: false,
        mail: "",
        errormail: false,
        phone: "",
        errorphone: false,
        btnDisable: false,
    },
    methods:{
        disableEnableBtn(){
            (this.errormail && this.errorname) ? this.active = false : this.active = true;
            console.log("test")
        },
        validateName(){
            if(this.name=="")
            { 
                this.errorname = false;
                return;
            }
            const reName = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
            const nameTest = reName.test(this.name);
            (!nameTest) ? this.errorname = true: this.errorname = false;
            //(this.errormail || this.errorname) ? this.btnDisable = true : this.btnDisable = false
        },
        resetErrorName(){
            this.errorname = false;
        },
        validateEmail(){
            if(this.mail=="")
            { 
                this.errormail = false;
                return;
            }
            const reMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const emailTest = reMail.test(this.mail);
            (!emailTest) ? this.errormail = true: this.errormail = false;
            //(this.errormail || this.errorname) ? this.btnDisable = true : this.btnDisable = false
        },
        resetErrorMail(){
            this.errormail = false;
        },
        validatePhone(){
            if(this.phone=="")
            { 
                this.phone = false;
                return;
            }
            const rePhone = new RegExp('^[0-9]+$');
            const phoneTest = rePhone.test(this.phone);
            console.log(phoneTest);
            (!phoneTest) ? this.errorphone = true: this.errorphone = false;
        },
        resetErrorPhone(){
            this.errorphone = false;
        },
    },
});

