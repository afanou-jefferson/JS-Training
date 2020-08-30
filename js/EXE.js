function Calculator() {
    that = this,
        this.field = "input#number", // Le champs d'écriture
        this.button = "#body .buttons",
        this.init = false,

        this.run = function () {
            $(this.button).click(function () {
                var value = $(this).html();

                if (that.init == false) // Si c'est le premier chiffre depuis le lancement du calcul
                {
                    $(that.field).val(""); 
                    that.init = true;
                }

                if (value != "=")
                    $(that.field).val($(that.field).val() + value); // On affecte à la faleur du field  la valeur du field actuel plus la nouvelle entrée

                that.dispatcher(value);
            });
        },

        this.dispatcher = function (value) {
            if ($(this.field).val().indexOf("/") != -1)
                this.operation(value, "/");
            if ($(this.field).val().indexOf("*") != -1)
                this.operation(value, "*");
            if ($(this.field).val().indexOf("-") != -1)
                this.operation(value, "-");
            if ($(this.field).val().indexOf("+") != -1)
                this.operation(value, "+");
        },

        this.operation = function (value, symbol) {
            var numbers = $(this.field).val().split(symbol),
                result;

            if (symbol == "/")
                result = numbers[0] / numbers[1];
            else if (symbol == "*")
                result = numbers[0] * numbers[1];
            else if (symbol == "-")
                result = numbers[0] - numbers[1];
            else if (symbol == "+")
                result = parseFloat(numbers[0]) + parseFloat(numbers[1]);

            result = Math.round((result) * 100) / 100;

            if (numbers.length > 1) {
                if (value == "=")
                    $(this.field).val(result);
                else if (numbers.length > 2)
                    $(this.field).val(result + symbol);
            }
        };
}